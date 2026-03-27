from pathlib import Path
from bs4 import BeautifulSoup, NavigableString, Comment
import re
import shutil
import sys

# ============================================================
# CONFIGURAÇÃO
# ============================================================

ROOT_DIR = Path(r"C:\Users\JoseVitorinoQuintas\MGA_site")

# Se True, cria backup .bak antes de alterar cada ficheiro
CREATE_BACKUPS = True

# Se True, só mostra o que mudaria, sem gravar alterações
DRY_RUN = False

# Extensões a processar
TARGET_EXTENSIONS = {".html", ".htm"}

# Tags cujo conteúdo textual NÃO deve ser alterado
EXCLUDED_PARENT_TAGS = {"script", "style", "noscript", "template"}

# Regras de substituição:
# - as duas primeiras são literais
# - MGA é tratado como palavra isolada
REPLACEMENTS = [
    (
        "Sociedade de Advogados, RL",
        "Sociedade de Advogados, SP, RL",
        False,
    ),
    (
        "Law Firm, RL",
        "Law Firm, SP, RL",
        False,
    ),
    (
        r"\bMGA\b",
        "MG&A",
        True,
    ),
]


# ============================================================
# FUNÇÕES AUXILIARES
# ============================================================

def is_visible_text_node(node: NavigableString) -> bool:
    """
    Determina se o nó de texto deve ser tratado como texto visível.
    Exclui:
    - comentários
    - nós fora do <body>
    - texto dentro de script/style/noscript/template
    """
    if isinstance(node, Comment):
        return False

    parent = node.parent
    if parent is None:
        return False

    if parent.name and parent.name.lower() in EXCLUDED_PARENT_TAGS:
        return False

    # garantir que o texto está dentro do body
    current = parent
    inside_body = False
    while current is not None:
        if getattr(current, "name", None) and current.name.lower() == "body":
            inside_body = True
            break
        current = current.parent

    if not inside_body:
        return False

    return True


def apply_replacements_to_text(text: str):
    """
    Aplica as substituições a uma string e devolve:
    - novo texto
    - contagem por regra
    """
    new_text = text
    counts = {
        "Sociedade de Advogados, RL -> Sociedade de Advogados, SP, RL": 0,
        "Law Firm, RL -> Law Firm, SP, RL": 0,
        "MGA -> MG&A": 0,
    }

    # 1) PT literal
    old = "Sociedade de Advogados, RL"
    new = "Sociedade de Advogados, SP, RL"
    c = new_text.count(old)
    if c:
        new_text = new_text.replace(old, new)
        counts["Sociedade de Advogados, RL -> Sociedade de Advogados, SP, RL"] += c

    # 2) EN literal
    old = "Law Firm, RL"
    new = "Law Firm, SP, RL"
    c = new_text.count(old)
    if c:
        new_text = new_text.replace(old, new)
        counts["Law Firm, RL -> Law Firm, SP, RL"] += c

    # 3) MGA como palavra isolada
    pattern = r"\bMGA\b"
    new_text, c = re.subn(pattern, "MG&A", new_text)
    if c:
        counts["MGA -> MG&A"] += c

    return new_text, counts


def process_html_file(file_path: Path, dry_run: bool = False, create_backup: bool = True):
    """
    Processa um ficheiro HTML:
    - altera apenas texto visível no body
    - não altera atributos
    - não altera head/meta/title/scripts/styles
    """
    try:
        original_html = file_path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        # fallback raro
        original_html = file_path.read_text(encoding="utf-8-sig")

    soup = BeautifulSoup(original_html, "html.parser")

    if soup.body is None:
        return {
            "file": file_path,
            "changed": False,
            "reason": "Sem <body>",
            "counts": {},
            "total": 0,
        }

    file_counts = {
        "Sociedade de Advogados, RL -> Sociedade de Advogados, SP, RL": 0,
        "Law Firm, RL -> Law Firm, SP, RL": 0,
        "MGA -> MG&A": 0,
    }

    changed = False

    # Percorrer apenas os nós de texto do body
    for text_node in soup.body.find_all(string=True):
        if not is_visible_text_node(text_node):
            continue

        original_text = str(text_node)
        new_text, counts = apply_replacements_to_text(original_text)

        if new_text != original_text:
            text_node.replace_with(new_text)
            changed = True
            for k, v in counts.items():
                file_counts[k] += v

    total_changes = sum(file_counts.values())

    if changed and not dry_run:
        if create_backup:
            backup_path = file_path.with_suffix(file_path.suffix + ".bak")
            shutil.copy2(file_path, backup_path)

        file_path.write_text(str(soup), encoding="utf-8")

    return {
        "file": file_path,
        "changed": changed,
        "reason": "",
        "counts": file_counts,
        "total": total_changes,
    }


def find_html_files(root_dir: Path):
    files = []
    for path in root_dir.rglob("*"):
        if path.is_file() and path.suffix.lower() in TARGET_EXTENSIONS:
            files.append(path)
    return sorted(files)


def print_report(results):
    grand_total = 0
    files_changed = 0

    grand_counts = {
        "Sociedade de Advogados, RL -> Sociedade de Advogados, SP, RL": 0,
        "Law Firm, RL -> Law Firm, SP, RL": 0,
        "MGA -> MG&A": 0,
    }

    print("\n" + "=" * 80)
    print("RELATÓRIO")
    print("=" * 80)

    for result in results:
        file_path = result["file"]
        rel_path = file_path.relative_to(ROOT_DIR)

        if result["changed"]:
            files_changed += 1
            grand_total += result["total"]

            for k, v in result["counts"].items():
                grand_counts[k] += v

            print(f"\n[ALTERADO] {rel_path}")
            print(f"  Total de substituições: {result['total']}")
            for k, v in result["counts"].items():
                if v:
                    print(f"  - {k}: {v}")
        else:
            if result["reason"]:
                print(f"\n[SEM ALTERAÇÃO] {rel_path} ({result['reason']})")

    print("\n" + "-" * 80)
    print(f"Ficheiros alterados: {files_changed}")
    print(f"Total global de substituições: {grand_total}")
    print("Totais por regra:")
    for k, v in grand_counts.items():
        print(f"  - {k}: {v}")
    print("=" * 80 + "\n")


# ============================================================
# MAIN
# ============================================================

def main():
    if not ROOT_DIR.exists():
        print(f"Erro: a pasta não existe: {ROOT_DIR}")
        sys.exit(1)

    html_files = find_html_files(ROOT_DIR)

    if not html_files:
        print("Não foram encontrados ficheiros HTML.")
        sys.exit(0)

    print(f"Foram encontrados {len(html_files)} ficheiros HTML.")
    print(f"Raiz: {ROOT_DIR}")
    print(f"Modo dry-run: {'SIM' if DRY_RUN else 'NÃO'}")
    print(f"Criar backups .bak: {'SIM' if CREATE_BACKUPS else 'NÃO'}")

    results = []
    for file_path in html_files:
        result = process_html_file(
            file_path=file_path,
            dry_run=DRY_RUN,
            create_backup=CREATE_BACKUPS
        )
        results.append(result)

    print_report(results)


if __name__ == "__main__":
    main()