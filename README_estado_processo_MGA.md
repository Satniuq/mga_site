# README — Estado atual do projeto MGA e preparação da fase EN

## Objetivo deste documento

Este README passa a refletir o estado atual do projeto após a revisão editorial e estrutural das páginas em português do site institucional da MGA.

O projeto entrou numa nova fase:

- o núcleo PT do site está, em termos práticos, estabilizado;
- a linha editorial e visual está definida;
- o próximo passo é a criação e alinhamento das páginas em inglês (**EN**) em conformidade com o novo padrão.

Este documento deve servir como referência de continuidade para qualquer nova intervenção no projeto.

---

## 1. Estado atual do projeto

### 1.1. O que está fechado em PT

As páginas em português já foram revistas ou afinadas de forma consistente com a nova linha editorial.

#### Páginas institucionais PT
- `index.html`
- `areas.html`
- `sobre.html`
- `equipa.html`
- `contactos.html`
- `informacao-legal.html`
- `politica-privacidade.html`

#### Páginas de áreas PT
- `comercial-societario.html`
- `direito-civil.html`
- `familia.html`
- `sucessoes-herancas.html`
- `direito-administrativo.html`
- `contencioso-arbitragem.html`
- `direito-trabalho.html`
- `contratacao-publica.html`
- `direito-penal.html`
- `imobiliario-investimento.html`
- `solicitadoria-atos-notariais.html`

#### Páginas PT de residência e mobilidade
- `residencia-em-portugal.html`
- `visto-d2-portugal.html`
- `visto-d7-portugal.html`
- `visto-gold-portugal.html`
- `reagrupamento-familiar-portugal.html`

### 1.2. O que existe atualmente em EN

No diretório `en`, existem já as seguintes páginas:

- `index.html`
- `about.html`
- `team.html`
- `contacts.html`
- `legal-information.html`
- `privacy-policy.html`
- `practice-areas.html`
- `residence-in-portugal.html`

Estas páginas não estão todas no mesmo grau de maturidade editorial.

Algumas já têm uma base aproveitável, mas várias ainda refletem uma linha anterior:
- mais abstrata;
- menos concreta;
- menos próxima da nova estrutura PT;
- por vezes com hierarquia de títulos e metadados menos consistentes.

### 1.3. O que falta criar em EN

Faltam criar, pelo menos, as seguintes páginas EN, que já estão ligadas a partir dos ficheiros PT e/ou da navegação EN:

- `en/corporate-commercial.html`
- `en/real-estate-investment.html`
- `en/civil-law.html`
- `en/family-law.html`
- `en/family-succession-estate-planning.html`
- `en/administrative-law.html`
- `en/public-procurement.html`
- `en/criminal-law.html`
- `en/litigation-arbitration.html`
- `en/notarial-services-formal-acts.html`
- `en/d2-visa-portugal.html`
- `en/d7-visa-portugal.html`
- `en/golden-visa-portugal.html`
- `en/family-reunification-portugal.html`

---

## 2. Linha editorial estabilizada

A linha editorial definida para o site deve agora ser considerada estável.

### 2.1. O que se quis evitar
Foram evitados:
- texto demasiado longo;
- excesso de abstração institucional;
- formulações meta-explicativas;
- linguagem demasiado académica;
- tom promocional ou agressivamente comercial;
- excesso de secções e “parede de texto”;
- SEO artificial.

### 2.2. O que se procurou
Passou a procurar-se:
- mais concretização;
- mais escaneabilidade;
- introduções mais curtas;
- blocos mais claros;
- problemas jurídicos reconhecíveis pelo utilizador;
- melhor correspondência entre H1, meta description e conteúdo;
- SEO discreto e natural;
- tom sóbrio, técnico e institucional.

### 2.3. Fórmula editorial de referência
A estrutura-base usada nas páginas de áreas PT passou a ser, em regra:

1. **subtítulo / hero curto**
2. **intro curta** com 2 parágrafos
3. bloco **“O que acompanhamos”** com grelha de tópicos
4. **3 blocos principais curtos**
5. **articulação com outras áreas**
6. **fecho curto com CTA**

---

## 3. Linha visual e CSS

O CSS base já foi ajustado para suportar este novo modelo, nomeadamente com:

- `text-align: left` na lógica principal de leitura;
- menor peso visual das caixas;
- melhoria de respiro;
- manutenção do ADN do site sem excesso decorativo;
- introdução de estruturas reutilizáveis para páginas simples de áreas.

### Classes relevantes já assumidas
- `pagina-area-simples`
- `lista-topicos`
- `topico-item`
- `areas-etiqueta`
- `areas-subtitulo`

### Princípio visual
A lógica visual do site deve continuar a ser:
- sóbria;
- clara;
- leve;
- sem parecer “landing page”;
- sem excesso de ornamento;
- sem “tapete de Arraiolos”.

---

## 4. Regra central para a fase EN

A fase EN **não deve consistir numa tradução literal do EN antigo**.

Deve, sim, seguir esta ordem de prioridade:

### Prioridade 1
Usar o **PT já revisto** como texto-fonte principal.

### Prioridade 2
Adaptar o conteúdo ao inglês de forma:
- natural;
- institucional;
- clara;
- juridicamente segura;
- sem calques desajeitados do português.

### Prioridade 3
Garantir coerência entre:
- navegação;
- `<title>`;
- `meta description`;
- H1;
- subtítulo;
- links internos;
- naming dos ficheiros EN.

### Regra prática
Sempre que existir conflito entre:
- o EN antigo,
- e o PT novo,

deve prevalecer **o PT novo**, salvo se houver uma boa razão editorial para adaptar a formulação à leitura em inglês.

---

## 5. Estado editorial das páginas EN já existentes

### 5.1. Páginas EN institucionais
Estas páginas existem e podem servir de base, mas devem ser revistas à luz do novo padrão PT:

- `en/index.html`
- `en/about.html`
- `en/team.html`
- `en/contacts.html`
- `en/legal-information.html`
- `en/privacy-policy.html`
- `en/practice-areas.html`

### 5.2. Página EN de residência já existente
- `en/residence-in-portugal.html`

Esta página existe, mas ainda está mais próxima do modelo antigo:
- texto mais longo;
- mais abstrato;
- menos concreto;
- sem a fórmula já estabilizada nas páginas PT recentes.

Deve, por isso, ser reescrita com base em `residencia-em-portugal.html`, e não apenas “retocada”.

---

## 6. Ordem recomendada para a fase EN

A sequência mais lógica é a seguinte:

### Fase A — alinhar as páginas EN estruturantes
1. `en/practice-areas.html`
2. `en/residence-in-portugal.html`

### Fase B — criar as páginas EN do bloco residência
3. `en/d2-visa-portugal.html`
4. `en/d7-visa-portugal.html`
5. `en/golden-visa-portugal.html`
6. `en/family-reunification-portugal.html`

### Fase C — criar as páginas EN das áreas principais
7. `en/corporate-commercial.html`
8. `en/real-estate-investment.html`
9. `en/civil-law.html`
10. `en/family-law.html`
11. `en/family-succession-estate-planning.html`
12. `en/administrative-law.html`
13. `en/public-procurement.html`
14. `en/criminal-law.html`
15. `en/litigation-arbitration.html`
16. `en/notarial-services-formal-acts.html`

### Fase D — afinação final de consistência EN
17. rever `en/index.html`
18. rever `en/about.html`
19. rever `en/team.html`
20. rever `en/contacts.html`
21. rever `en/legal-information.html`
22. rever `en/privacy-policy.html`

---

## 7. Regras práticas para escrever as páginas EN

### Regra 1
Não traduzir literalmente estruturas portuguesas que soem artificiais em inglês.

### Regra 2
Evitar fórmulas vagas como:
- “integrated reading”
- “careful framing”
- “cross-cutting approach”
- “this page should be read as”
- “this area aims to cover”

### Regra 3
Favorecer problemas concretos e reconhecíveis:
- shareholders
- dismissal
- wills
- residence permits
- family reunification
- public tenders
- licensing
- criminal proceedings
- powers of attorney
- certified copies

### Regra 4
Manter tom:
- institutional;
- sober;
- technically reliable;
- discreet;
- clear;
- not overly academic;
- not sales-driven.

### Regra 5
Em EN, simplificar sem banalizar.
A página deve soar a:
- law firm website,
- not brochure,
- not blog post,
- not keyword stuffing.

### Regra 6
As meta descriptions EN devem ser úteis e contidas, evitando:
- exagero comercial;
- excesso de keywords repetidas;
- frases demasiado longas.

### Regra 7
A estrutura EN deve espelhar a arquitetura PT já estabilizada, salvo ajuste fino por razões de naturalidade linguística.

---

## 8. Convenções técnicas e de consistência

### 8.1. Navegação
Os ficheiros EN devem manter:
- caminhos relativos corretos (`../` quando aplicável);
- alternância PT/EN coerente;
- links internos funcionais.

### 8.2. Head
Cada nova página EN deve incluir:
- `<title>` claro;
- `meta description`;
- favicon correto;
- stylesheet correto;
- Font Awesome;
- estrutura idêntica à base PT/EN do projeto.

### 8.3. Imagens e caminhos
A pasta de imagens da equipa deve ser uniformizada com atenção a maiúsculas/minúsculas, especialmente por causa de alojamento Linux.

### 8.4. Script
O `script.js` já acomoda diferenças de caminho entre raiz, pasta `en` e GitHub Pages, pelo que os novos ficheiros EN devem respeitar essa lógica de paths.

---

## 9. Princípio editorial final

O princípio que passou a reger o projeto é este:

**não decorar, não dramatizar, não vender em excesso — mas tornar o site mais claro, mais concreto, mais leve e mais útil.**

No bloco EN, isso significa:

- não aproveitar passivamente o inglês antigo;
- reescrever com base no PT já consolidado;
- manter consistência estrutural e visual;
- garantir um inglês natural, sóbrio e juridicamente credível.

---

## 10. Resumo executivo

### PT
O lado PT está, em termos práticos, fechado.

### EN
O lado EN é agora a prioridade principal.

### Método correto
Não traduzir o EN antigo:  
**usar o PT novo como base e construir o EN a partir daí.**