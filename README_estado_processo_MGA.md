# MGA Site — Estado do Processo

## 1. Objeto do projeto
Criação e organização do website institucional da sociedade **Miguel, Goes & Associados**, com estrutura estática em HTML/CSS/JS, versão em português e versão em inglês, foco institucional sóbrio e possibilidade de expansão futura por áreas de prática.

---

## 2. O que já foi feito

### 2.1. Estrutura base do site
Foi montada uma estrutura estática simples e limpa, adequada a publicação em alojamento tradicional ou GitHub Pages.

**Estrutura atualmente identificada:**

- raiz PT:
  - `index.html`
  - `sobre.html`
  - `equipa.html`
  - `areas.html`
  - `contactos.html`
  - `informacao-legal.html`
  - `politica-privacidade.html`
- pasta EN:
  - `en/index.html`
  - `en/about.html`
  - `en/team.html`
  - `en/practice-areas.html`
  - `en/contacts.html`
  - `en/legal-information.html`
  - `en/privacy-policy.html`
- assets partilhados:
  - `css/estilos.css`
  - `js/script.js`
  - `img/`

### 2.2. Navegação e base visual
Já existe uma base funcional comum ao site:

- cabeçalho com logótipo e navegação principal;
- menu responsivo com ícone hamburger para mobile;
- alternância PT/EN nas páginas principais;
- hero na homepage;
- secções internas consistentes para páginas institucionais;
- footer com links utilitários.

### 2.3. Comportamento técnico já tratado
O `script.js` já contempla:

- ajuste automático da imagem da hero consoante:
  - raiz do site;
  - pasta `/en/`;
  - ambiente GitHub Pages;
- toggle do menu mobile;
- animações de scroll reveal;
- comportamento visual do cabeçalho no scroll;
- lógica de barra inferior / footer bar, quando aplicável.

### 2.4. Contactos e conversão
A página de contactos já inclui:

- morada;
- telefone;
- email;
- formulário de contacto;
- mapa incorporado.

O formulário está ligado ao **Formspree** através do endpoint:

- `https://formspree.io/f/mzzrpvnq`

Isto significa que a base de captação de contactos já está montada.

### 2.5. Trabalho editorial já encaminhado
No trabalho já desenvolvido e nas decisões tomadas durante o processo, ficou essencialmente definido:

- um **tom institucional, sóbrio e juridicamente credível**;
- reposicionamento da homepage para comunicar melhor:
  - acompanhamento de clientes internacionais;
  - investidores;
  - empresas com interesses em Portugal;
  - articulação entre residência, mobilidade, investimento, corporate, imobiliário e instalação em Portugal;
- reformulação da página **Áreas** numa lógica mais integrada e estratégica;
- orientação para não transformar o site numa landing page comercial nem numa página com tom de “consultora de vistos”.

### 2.6. Base bilingue já montada
Já existe uma base bilingue funcional com páginas principais em inglês.

Isto permite:

- navegação institucional em EN;
- coerência básica entre versões PT e EN;
- expansão futura de páginas específicas também em inglês.

---

## 3. O que temos neste momento

### 3.1. O que está materialmente presente
Neste momento, o projeto já tem:

- estrutura de site institucional estático;
- design base comum;
- folhas de estilo e JavaScript centrais;
- homepage e páginas institucionais principais;
- pasta inglesa `/en/` com correspondentes essenciais;
- formulário de contacto funcional com Formspree;
- mapa incorporado na página de contactos;
- alternância linguística nas páginas principais.

### 3.2. O que está conceptualmente fechado
Além do que já existe em ficheiros, já ficou conceptualmente definido:

- novo posicionamento institucional da homepage;
- lógica editorial da página de Áreas;
- ideia de expansão por páginas-filhas ligadas a áreas com procura própria;
- direção estratégica para reforçar temas como:
  - residência;
  - mobilidade internacional;
  - investimento;
  - imobiliário;
  - societário/comercial;
  - família e sucessões;
  - contencioso.

---

## 4. Observações importantes sobre o estado atual

### 4.1. Há um ponto a confirmar antes de publicação
No snapshot de ficheiros disponível nesta fase, o ficheiro carregado como `index.html` aparece em inglês, com `lang="en"` e caminhos relativos do tipo `../css/...` e `../img/...`.

Isto sugere uma de duas hipóteses:

- foi carregada aqui uma cópia da homepage inglesa em vez da homepage PT da raiz; ou
- existe neste momento alguma divergência entre a estrutura local real e o snapshot aqui analisado.

**Antes de publicar**, convém confirmar qual é a homepage real da raiz do projeto e se a arquitetura final será:

- PT na raiz; e
- EN em `/en/`.

### 4.2. SEO on-page ainda incompleto
Pelas páginas observadas, há margem de melhoria técnica e editorial em SEO:

- títulos ainda genéricos em várias páginas;
- ausência de `meta description` nas páginas principais observadas;
- em várias páginas internas, o topo visual usa `h2` em vez de um `h1` claro;
- ainda não há desdobramento por páginas específicas de áreas com procura autónoma.

### 4.3. Internacionalização ainda pode ser afinada
Apesar de já existir base PT/EN, ainda convém fechar:

- coerência total dos caminhos relativos;
- alinhamento de todos os language switchers;
- eventual implementação futura de `hreflang`;
- consistência dos conteúdos entre PT e EN à medida que o site crescer.

### 4.4. Elementos utilitários ainda não identificados
Não aparecem nesta estrutura, pelo menos neste estado:

- `sitemap.xml`;
- `robots.txt`;
- páginas-filhas por área;
- política explícita de canonical / hreflang;
- organização final de publicação e domínio.

---

## 5. Próximos passos recomendados

### Prioridade 1 — consolidar a arquitetura final
1. Confirmar a estrutura final do site:
   - PT na raiz;
   - EN em `/en/`.
2. Confirmar que a homepage da raiz é realmente a portuguesa.
3. Rever todos os caminhos relativos para CSS, JS, imagens e links PT/EN.

### Prioridade 2 — fechar a homepage
4. Garantir que o texto final aprovado da homepage está implementado na versão PT correta.
5. Rever a versão EN correspondente da homepage para assegurar coerência material e institucional.

### Prioridade 3 — expandir as áreas com páginas-filhas
Criar páginas próprias ligadas a `areas.html`, em vez de concentrar tudo na página-hub.

Páginas mais prioritárias:

6. `residencia-mobilidade-internacional.html`
7. `investimento-imobiliario-urbanismo.html`
8. `direito-comercial-societario.html`
9. `familia-sucessoes-herancas.html`
10. `contencioso-arbitragem.html`

Páginas seguintes possíveis:

11. `direito-do-trabalho.html`
12. `direito-administrativo-contratacao-publica.html`
13. `direito-penal.html`
14. `solicitadoria-atos-notariais.html`

### Prioridade 4 — ligar melhor o site internamente
15. Transformar `areas.html` numa verdadeira página-mãe/hub.
16. Criar links da homepage para as páginas-filhas mais relevantes.
17. Criar links cruzados entre páginas relacionadas.

### Prioridade 5 — melhorar SEO on-page
18. Definir `title` único e mais forte para cada página.
19. Criar `meta description` para cada página principal.
20. Garantir um `H1` claro por página.
21. Ajustar introduções e headings para refletirem melhor a intenção de procura.

### Prioridade 6 — fechar a versão inglesa com o mesmo nível de maturidade
22. À medida que forem criadas páginas novas em PT, criar os equivalentes EN dentro de `/en/`.
23. Manter materialmente o mesmo conteúdo, sem deriva comercial nem diferenças de posicionamento.

### Prioridade 7 — preparar publicação
24. Definir repositório Git/GitHub final.
25. Decidir modo de alojamento:
   - GitHub Pages; ou
   - alojamento tradicional com domínio próprio.
26. Preparar ligação ao domínio final.
27. Criar `sitemap.xml` e `robots.txt`.
28. Fazer testes finais de navegação, mobile, links, formulário e alternância de idioma.

---

## 6. Estado editorial resumido

### Linha já assumida
O site deve comunicar uma prática jurídica:

- institucional;
- tecnicamente credível;
- sóbria;
- próxima, mas não promocional em excesso;
- apta a acompanhar clientes portugueses e internacionais com interesses em Portugal.

### Linha a evitar
Deve evitar-se:

- tom de agência comercial;
- linguagem demasiado agressiva de captação;
- excesso de claims vagas;
- aparência de página centrada em “vistos” como produto isolado.

A expansão da procura deve ser feita por **arquitetura de páginas e cobertura temática**, não por exagero promocional.

---

## 7. Resumo executivo

O projeto já tem uma base boa e aproveitável:

- estrutura limpa;
- site bilingue principal montado;
- formulário a funcionar;
- base visual coerente;
- direção editorial já bastante definida.

O trabalho agora já não é “fazer um site do zero”, mas sim:

- consolidar a arquitetura correta;
- fechar a homepage definitiva;
- desdobrar as áreas em páginas-filhas;
- reforçar SEO técnico e editorial;
- preparar publicação com domínio e indexação em condições.

