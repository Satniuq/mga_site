README — Estado atual do site MGA
1. Ponto em que estamos

O site já tem neste momento uma nova base visual e estrutural sólida, assente em:

um index.html novo, com linguagem mais premium, mais editorial e mais coerente com uma sociedade de advogados;
um areas.html novo, já pensado como página-mãe das áreas de prática e não apenas como listagem;
um sobre.html já redefinido em HTML para bater certo com esta nova lógica; o sobre.html anterior ainda estava numa linguagem intermédia, mais antiga.
um estilos.css já bastante evoluído, com um sistema visual comum suficientemente forte para suportar homepage, páginas internas, páginas de áreas e páginas institucionais.

Em termos práticos, o site deixou de ser apenas um conjunto de páginas e passou a ter um design system pequeno, mas consistente.

2. O que já está fechado
2.1. Sistema visual base (estilos.css)

O CSS já define de forma coerente:

variáveis de cor, sombras, raios, larguras e transições;
header fixo com visual premium;
submenu de áreas no header;
botões primários e secundários;
hero da homepage;
componentes reutilizáveis (home-card, grelhas, secções, etc.);
estrutura comum das páginas internas;
componentes das páginas de áreas;
footer bar fixa;
responsive base.

Ou seja: o CSS já não está numa fase de “remendo”. Já está numa fase de sistema principal do site.

2.2. Homepage (index.html)

O novo index.html já está alinhado com o nível visual pretendido. Tem:

header mais premium;
submenu completo em “Áreas”;
hero mais forte;
secção introdutória em split;
áreas em destaque;
secção “Como trabalhamos”;
CTA final limpo e institucional.

A homepage serve agora como referência-mãe de linguagem visual.

2.3. Página de Áreas (areas.html)

A nova areas.html já está reposicionada como página estratégica do site. Tem:

mesmo header do novo index;
abertura editorial;
bloco introdutório;
cards organizados por grandes grupos;
CTA final de apoio/orientação;
melhor ocupação da largura útil da página.

Ela é agora a página-mãe das áreas de prática, e não apenas uma página de navegação secundária.

2.4. Página Sobre (sobre.html)

O sobre.html antigo ainda estava funcional, mas menos alinhado com a nova fase do site. Tinha:

header antigo sem submenu de áreas;
abertura mais simples;
boa base de conteúdo, mas com linguagem visual menos integrada no novo sistema.

A versão nova pensada para substituir essa anterior passa a usar:

header consistente com o index e areas;
mesma lógica de subtítulo, introdução, secções e fecho;
princípios em blocos;
mesma cadência visual do resto do site.
3. Lógica do novo site

Neste momento, a lógica certa do projeto é esta:

A. Homepage

É a página mais editorial e mais aspiracional.
Tem mais composição, mais ritmo visual, mais imagem e mais storytelling institucional.

B. Página-mãe de áreas

É uma página de navegação estratégica.
Organiza o universo da prática e encaminha para páginas individuais.

C. Páginas internas institucionais

Ex.: sobre.html, contactos.html, equipa.html, informacao-legal.html, politica-privacidade.html.
Devem ser sóbrias, bem espaçadas, claras e coerentes com o sistema.

D. Páginas individuais de área

Ex.: civil, família, administrativo, trabalho, penal, vistos, residência, etc.
Devem seguir uma estrutura quase-template, para que o site pareça coeso e profissional.

4. Estrutura-base que deve mandar nas próximas páginas

Para as páginas internas normais, a estrutura ideal já está praticamente definida:

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

Nas páginas de área simples, a lógica é semelhante, mas com:

main class="conteudo-pagina pagina-area-simples"
areas-etiqueta
areas-subtitulo
secção “O que acompanhamos”
várias secções temáticas
secção “Articulação com outras áreas”
fecho com CTA.
5. O que falta fazer agora

Agora já não estás a “inventar o site”.
Estás a fazer aplicação sistemática do sistema já criado.

Faltam 3 coisas principais:

5.1. Atualizar o header de todas as páginas

Muitas páginas ainda estão com o header antigo, sem submenu de áreas.
O novo padrão deve ser o do index.html e do novo areas.html.

Isto significa:

copiar a estrutura nova do header;
manter a classe ativo na página correspondente;
adaptar apenas os links PT/EN.

Este é talvez o batch mais importante.

5.2. Uniformizar as páginas internas institucionais

As páginas:

sobre.html
contactos.html
equipa.html
informacao-legal.html
politica-privacidade.html

devem todas entrar na mesma lógica de:

header novo;
subtítulo consistente;
introdução;
secções com secao-topo quando fizer sentido;
fecho consistente;
footer bar igual.
5.3. Aplicar o mesmo sistema às páginas de área

As páginas individuais de áreas já estão bastante alinhadas em conteúdo e estrutura, mas ainda precisam de ficar 100% coerentes com a nova fase do site, sobretudo no header.
A boa notícia é que estas páginas já têm uma base quase-template muito boa.

6. Método de trabalho recomendado para as próximas páginas

A forma mais eficiente de seguir agora é esta:

Fase 1 — batch estrutural

Aplicar a todas as páginas:

novo header;
footer uniforme;
organização base do main.
Fase 2 — batch visual

Garantir que as páginas usam corretamente:

.subtitulo
.pagina-intro
.secao
.secao-topo
.pagina-fecho
.areas-etiqueta
.areas-subtitulo
.lista-topicos
.topico-item
Fase 3 — afinação pontual

Rever individualmente as páginas que têm natureza própria:

equipa.html
contactos.html
informacao-legal.html
politica-privacidade.html

Estas não devem ser tratadas como simples cópias das páginas de área.

7. Estado por grupos de páginas
Já em novo nível
index.html
areas.html
estilos.css como base geral do sistema
Em transição / a alinhar
sobre.html
Boas de conteúdo e estrutura, mas a fechar visualmente
direito-civil.html
familia.html
direito-administrativo.html
direito-penal.html
direito-trabalho.html
contratacao-publica.html
contencioso-arbitragem.html
comercial-societario.html
imobiliario-investimento.html
residencia-em-portugal.html
visto-d2-portugal.html
visto-gold-portugal.html
visto-d7-portugal.html
reagrupamento-familiar-portugal.html
solicitadoria-atos-notariais.html
sucessoes-herancas.html
recuperacao-credito-gestao-processos.html
Páginas que pedem tratamento próprio
contactos.html
equipa.html
informacao-legal.html
politica-privacidade.html
8. Observações importantes sobre o CSS atual

O estilos.css já está muito avançado, mas há alguns pontos a ter em conta:

A. O contentor geral já foi alargado

Neste momento:

--mga-container: 1180px
--mga-container-narrow: 1040px

Isto deu mais largura útil às páginas internas e foi uma melhoria importante.

B. A areas.html já tem regras próprias fortes

A classe .areas-pagina e os componentes das áreas já estão bem definidos.

C. Há duplicação de regras em .area-card h3

No CSS atual aparecem repetidas duas vezes as regras de .area-card h3 e .area-card h3 i. Não quebra nada, mas convém limpar mais tarde.

D. O submenu está resolvido para desktop e desligado em mobile

Em mobile, o submenu das áreas está ocultado com:

.menu-item-com-submenu .submenu-areas {
  display: none;
}

Portanto, mais tarde talvez seja preciso pensar numa solução mobile específica, se quiseres que o acesso às áreas também exista dentro do menu hamburger.

9. Objetivo para a próxima fase

O objetivo agora já não é redesign.
É este:

fazer com que todas as páginas pareçam claramente pertencer ao mesmo site, ao mesmo momento de design e ao mesmo nível de acabamento.

Isto implica:

mesma navegação;
mesma hierarquia visual;
mesma largura útil;
mesma linguagem de secções;
mesmo fecho institucional;
e apenas diferenças pontuais quando a natureza da página o justificar.
10. Ordem recomendada de execução daqui para a frente

Eu seguiria esta ordem:

1.

Fechar definitivamente o sobre.html.

2.

Fazer contactos.html bater com o novo sistema.

3.

Refazer equipa.html com mais cuidado, porque é a página institucional que mais facilmente denuncia falta de acabamento.

4.

Uniformizar informacao-legal.html e politica-privacidade.html.

5.

Aplicar em batch o novo header às páginas de área.

6.

Rever uma a uma as páginas de área apenas para pequenos polimentos de consistência.

11. Resumo executivo

Neste momento:

o novo sistema visual está criado no estilos.css;
o novo index está fechado e serve de referência principal;
a nova página de áreas está fechada e serve de referência para a navegação das práticas;
o Sobre está pronto para ser alinhado com este novo sistema;
as restantes páginas devem agora ser tratadas por lotes, usando a mesma estrutura e o mesmo header, com afinação pontual apenas onde a natureza da página o exija.