# README — Estado estabilizado do site MGA

## 1. Ponto em que o site está agora

O site da **MGA – Miguel, Goes & Associados** tem neste momento uma base visual e estrutural estabilizada em português, com coerência transversal entre homepage, página-mãe de áreas, páginas institucionais e páginas individuais de prática.

O trabalho que estava em fase de transição passou, nesta fase, para um estado de **uniformização concluída** do lado PT.

Em termos práticos, o site já não está numa lógica de redesign nem numa fase híbrida entre páginas antigas e novas. O que existe agora é um **sistema visual único**, aplicado de forma consistente ao conjunto principal das páginas públicas em português.

---

## 2. O que está estabilizado

### 2.1. Sistema visual base (`estilos.css`)

O CSS funciona agora como **design system principal** do site e já suporta de forma coerente:

- variáveis de cor, tipografia, sombras, raios, larguras e transições;
- header fixo com linguagem visual premium e sóbria;
- submenu de áreas no header em desktop;
- botões principais e secundários;
- hero editorial da homepage;
- componentes reutilizáveis (`home-card`, grelhas, blocos, secções, CTA);
- estrutura comum das páginas internas;
- estrutura comum das páginas de área;
- footer bar fixa com links institucionais e CTA de contacto;
- responsive base para homepage, páginas internas e páginas de área.

Ou seja: o CSS deixou de estar em modo experimental. Está a funcionar como base estável do site.

### 2.2. Homepage (`index.html`)

A homepage está fechada como página de referência visual e institucional do site.

Neste momento já integra:

- header novo com submenu completo em “Áreas”; 
- hero principal com linguagem mais editorial;
- secção introdutória em split;
- áreas em destaque;
- secção “Como trabalhamos”;
- CTA final institucional;
- footer bar coerente com o resto do sistema.

A homepage serve agora como **página-mãe de linguagem visual**. fileciteturn0file22

### 2.3. Página de áreas (`areas.html`)

A `areas.html` está estabilizada como **página-mãe de navegação estratégica das áreas de prática**.

Já incorpora:

- o mesmo header novo do `index.html`;
- abertura editorial consistente;
- bloco introdutório;
- organização das áreas por grandes grupos;
- cards uniformes;
- CTA final de orientação/contacto;
- melhor ocupação de largura útil.

Ela já não funciona como uma simples lista. Passou a ser a página de enquadramento das práticas da sociedade. fileciteturn0file24

### 2.4. Páginas institucionais

As páginas institucionais em português estão alinhadas com o novo sistema:

- `sobre.html`
- `contactos.html`
- `equipa.html`
- `informacao-legal.html`
- `politica-privacidade.html`

Todas passaram a seguir a mesma lógica de:

- header novo;
- subtítulo consistente;
- bloco de introdução;
- secções com hierarquia uniforme;
- fecho institucional com CTA;
- footer bar alinhada.

A página `sobre.html` já está no novo padrão editorial e visual. fileciteturn0file25

A página `contactos.html` está alinhada com o mesmo sistema e mantém formulário, dados de contacto e localização num enquadramento visual uniforme. fileciteturn0file0

A página `equipa.html` foi tratada como página institucional própria, com estrutura coerente com o site e sem cair numa lógica de simples página de listagem. fileciteturn0file3

As páginas `informacao-legal.html` e `politica-privacidade.html` estão igualmente integradas na nova lógica institucional. fileciteturn0file10 fileciteturn0file12

### 2.5. Páginas de residência e instalação em Portugal

O grupo de páginas de residência em português está já alinhado com o novo sistema:

- `residencia-em-portugal.html`
- `visto-d2-portugal.html`
- `visto-d7-portugal.html`
- `visto-gold-portugal.html`
- `reagrupamento-familiar-portugal.html`

Estas páginas seguem já a lógica de página de área estabilizada, com:

- `main` em formato de página de área simples;
- `areas-etiqueta`;
- `areas-subtitulo`;
- secção “O que acompanhamos”;
- secções temáticas;
- secção de articulação com outras áreas;
- fecho com CTA.

fileciteturn0file16 fileciteturn0file17 fileciteturn0file19 fileciteturn0file18 fileciteturn0file13

### 2.6. Páginas de áreas de prática

As páginas individuais de áreas em português estão agora, no essencial, fechadas dentro do mesmo sistema estrutural e visual:

- `direito-civil.html`
- `familia.html`
- `direito-administrativo.html`
- `direito-penal.html`
- `direito-trabalho.html`
- `contratacao-publica.html`
- `contencioso-arbitragem.html`
- `comercial-societario.html`
- `imobiliario-investimento.html`
- `solicitadoria-atos-notariais.html`
- `sucessoes-herancas.html`
- `recuperacao-credito-gestao-processos.html`

Estas páginas já obedecem a uma estrutura quase-template comum e apresentam coerência de hierarquia, largura, cadência visual e fecho institucional. fileciteturn0file1 fileciteturn0file2 fileciteturn0file4 fileciteturn0file5 fileciteturn0file6 fileciteturn0file7 fileciteturn0file8 fileciteturn0file9 fileciteturn0file11 fileciteturn0file14 fileciteturn0file15 fileciteturn0file21

---

## 3. Lógica do site nesta fase

A lógica certa do projeto, nesta altura, é a seguinte:

### A. Homepage

Página mais editorial, institucional e aspiracional.
Tem mais composição, mais ritmo visual, mais imagem e mais peso de posicionamento.

### B. Página-mãe de áreas

Página de navegação estratégica.
Organiza as práticas da sociedade e encaminha para páginas individuais.

### C. Páginas institucionais internas

Ex.: `sobre.html`, `contactos.html`, `equipa.html`, `informacao-legal.html`, `politica-privacidade.html`.

Devem ser sóbrias, claras, bem espaçadas e coerentes com o sistema geral.

### D. Páginas individuais de área

Ex.: civil, família, administrativo, trabalho, penal, residência, vistos, sucessões, solicitadoria, recuperação de crédito, etc.

Devem parecer parte do mesmo site, do mesmo momento de design e do mesmo nível de acabamento, com diferenças pontuais apenas quando a natureza do conteúdo o justifique.

---

## 4. Estrutura-base que manda agora nas páginas

Para as páginas internas institucionais, a estrutura estabilizada é esta:

```html
<header>...</header>

<main class="conteudo-pagina">
  <section class="subtitulo scroll-reveal">...</section>
  <section class="pagina-intro scroll-reveal">...</section>

  <section class="secao scroll-reveal">...</section>
  <section class="secao scroll-reveal">...</section>
  <section class="secao scroll-reveal">...</section>

  <section class="pagina-fecho scroll-reveal">...</section>
</main>

<div class="footer-bar" id="footerBar">...</div>
```

Para as páginas de área simples, a lógica estabilizada é:

```html
<header>...</header>

<main class="conteudo-pagina pagina-area-simples">
  <section class="subtitulo scroll-reveal">
    <p class="areas-etiqueta">...</p>
    <h1>...</h1>
    <p class="areas-subtitulo">...</p>
  </section>

  <section class="pagina-intro scroll-reveal">...</section>
  <section class="secao scroll-reveal">...</section>
  <section class="secao scroll-reveal">...</section>
  <section class="secao scroll-reveal">...</section>
  <section class="secao scroll-reveal">...</section>
  <section class="pagina-fecho scroll-reveal">...</section>
</main>

<div class="footer-bar" id="footerBar">...</div>
```

Esta lógica já está aplicada, em substância, ao conjunto principal das páginas PT. fileciteturn0file24 fileciteturn0file16 fileciteturn0file1

---

## 5. O que ficou resolvido face ao README anterior

Em relação ao estado anterior do projeto, ficou entretanto resolvido o seguinte:

### 5.1. Header novo aplicado no lado PT

O header antigo deixou de ser a referência.
O padrão a seguir passou a ser o do `index.html` e do `areas.html`, com submenu de áreas em desktop e linguagem visual consistente. fileciteturn0file22 fileciteturn0file24

### 5.2. Uniformização das páginas institucionais

As páginas institucionais que antes pediam tratamento próprio já foram alinhadas no sistema geral. fileciteturn0file0 fileciteturn0file3 fileciteturn0file10 fileciteturn0file12 fileciteturn0file25

### 5.3. Aplicação do sistema às páginas de área

As páginas de área já não estão apenas “em transição”. Estão, no essencial, estabilizadas dentro do mesmo padrão. fileciteturn0file1 fileciteturn0file4 fileciteturn0file8 fileciteturn0file11 fileciteturn0file21

---

## 6. Estado por grupos de páginas

### Fechado / estabilizado

- `estilos.css`
- `index.html`
- `areas.html`
- `sobre.html`
- `contactos.html`
- `equipa.html`
- `informacao-legal.html`
- `politica-privacidade.html`
- `residencia-em-portugal.html`
- `visto-d2-portugal.html`
- `visto-d7-portugal.html`
- `visto-gold-portugal.html`
- `reagrupamento-familiar-portugal.html`
- `direito-civil.html`
- `familia.html`
- `direito-administrativo.html`
- `direito-penal.html`
- `direito-trabalho.html`
- `contratacao-publica.html`
- `contencioso-arbitragem.html`
- `comercial-societario.html`
- `imobiliario-investimento.html`
- `solicitadoria-atos-notariais.html`
- `sucessoes-herancas.html`
- `recuperacao-credito-gestao-processos.html`

### Ainda fora deste fecho

Este README descreve o estado estabilizado do **lado PT** do site público principal.
A eventual revisão fina de versões EN, pequenos polimentos microvisuais ou limpeza técnica de duplicações no CSS pode ainda ser feita numa fase posterior.

---

## 7. Observações técnicas importantes

### A. O contentor geral está corretamente mais largo

Mantêm-se como base útil:

- `--mga-container: 1180px`
- `--mga-container-narrow: 1040px`

Isto já deu mais presença e melhor ocupação horizontal às páginas internas. fileciteturn0file23

### B. O submenu de áreas está resolvido em desktop

O submenu do header está funcional em desktop e encontra-se desligado em mobile. Isto é coerente com o estado atual do CSS e do JS. fileciteturn0file23 fileciteturn0file20

### C. O script base continua simples e suficiente para esta fase

O `script.js` trata de:

- fade-in inicial do `body`;
- imagem da hero conforme ambiente;
- toggle do menu mobile;
- scroll reveal;
- exibição da footer bar no fundo da página;
- sombra do header em scroll.

É um script simples, mas adequado ao estado atual do projeto. fileciteturn0file20

### D. Continua a haver margem para limpeza técnica futura

O CSS estabilizado já é forte, mas continua a fazer sentido, numa fase posterior:

- limpar duplicações de regras;
- rever micro-espaçamentos finos;
- pensar uma solução mobile mais rica para o submenu de áreas;
- uniformizar integralmente o lado EN à luz do sistema final PT.

Isto já não é trabalho de base estrutural. É trabalho de polimento técnico.

---

## 8. Objetivo da próxima fase

O objetivo deixou de ser “dar forma ao site”.

O objetivo da próxima fase passa a ser um destes três caminhos, consoante a prioridade:

### Caminho 1 — Consolidação técnica

- limpeza de duplicações no CSS;
- revisão de classes menos elegantes;
- uniformização fina de detalhes HTML;
- eventual reorganização de assets.

### Caminho 2 — Expansão editorial

- rever textos com foco SEO e posicionamento;
- reforçar subtítulos, meta descriptions e coerência editorial;
- criar novas páginas de apoio ou FAQ por área.

### Caminho 3 — Fecho internacional / publicação

- alinhar o lado EN com o novo sistema final PT;
- rever paths, consistência de navegação e conteúdos em inglês;
- preparar publicação final e controlo de qualidade transversal.

---

## 9. Resumo executivo

Neste momento:

- o sistema visual principal do site está criado e estabilizado no `estilos.css`;
- o `index.html` está fechado e continua a servir de referência principal;
- a `areas.html` está fechada como página-mãe das áreas de atuação;
- as páginas institucionais PT estão alinhadas com o mesmo sistema;
- as páginas individuais de área PT estão, no essencial, reformuladas e coerentes entre si;
- o site PT já aparenta pertencer claramente ao mesmo projeto, ao mesmo momento de design e ao mesmo nível de acabamento.

Em suma: **a fase de reformulação estrutural do lado PT está estabilizada**. O que sobra já não é reinvenção do site, mas consolidação técnica, polimento e eventual expansão.
