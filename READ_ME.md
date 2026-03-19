# README.md

# MGA Site — Análise do Estado Atual do Projeto

## 1. Visão Geral do Projeto

O projeto corresponde a um **website institucional** de uma sociedade de advogados identificada no conteúdo como **Miguel, Goes & Associados – Sociedade de Advogados, RL**. O objetivo do site, inferido a partir dos textos presentes, é apresentar a sociedade, a sua proposta de valor, a equipa, as áreas de atuação e os meios de contacto, incluindo ainda páginas de enquadramento legal e de privacidade. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2} :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4} :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6}

Pelo que está efetivamente implementado, trata-se de um site estático composto por páginas HTML interligadas, uma folha de estilos CSS comum e um ficheiro JavaScript comum. Existe navegação entre páginas, animações simples, formulário de contacto com submissão para Formspree e incorporação de mapa Google Maps. :contentReference[oaicite:7]{index=7} :contentReference[oaicite:8]{index=8} :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10}

**Estado atual do projeto:** funcional a nível de estrutura e conteúdo base, mas **incompleto e não pronto para produção** no estado exato dos ficheiros fornecidos, por existirem inconsistências entre a estrutura referenciada no código e os ficheiros efetivamente disponibilizados, bem como ativos locais em falta (CSS/JS em subpastas esperadas, imagens e favicon). Sem esses recursos na localização esperada, a renderização e parte da interatividade ficam comprometidas. :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13}

---

## 2. Estrutura de Ficheiros

### Estrutura efetivamente fornecida

```text
/
├── index.html
├── sobre.html
├── equipa.html
├── areas.html
├── contactos.html
├── politica-privacidade.html
├── informacao-legal.html
├── estilos.css
└── script.js
Estrutura esperada pelo código

O código HTML referencia uma estrutura diferente da que foi fornecida.

/
├── index.html
├── sobre.html
├── equipa.html
├── areas.html
├── contactos.html
├── politica-privacidade.html
├── informacao-legal.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
├── img/
│   ├── logo.jpg
│   ├── bg-hero.jpg
│   └── equipa/
│       └── jsmiguel.jpg
└── favicon.ico
Função de cada ficheiro relevante

index.html — página inicial, com hero principal, proposta de valor e resumo das áreas de atuação.

sobre.html — página institucional com história, valores e visão.

equipa.html — página de apresentação da equipa, com sócios e advogados associados.

areas.html — página com as áreas de atuação jurídicas.

contactos.html — página de contacto com morada, telefone, email, formulário e mapa incorporado.

politica-privacidade.html — página de política de privacidade.

informacao-legal.html — página de informação legal e responsabilidade do site.

estilos.css — folha de estilos global aplicada a todo o site.

script.js — comportamentos de interface comuns (fade-in inicial, hero background, menu mobile, scroll reveal, barra inferior e sombra do header).

3. Páginas Existentes
index.html

Função da página: homepage institucional do site.

Principais secções:

Header com logótipo/nome da sociedade e menu principal.

Secção hero com headline “Excelência Jurídica com Proximidade”, texto de apoio e botão “Fale connosco”.

Secção areas-resumo com enumeração resumida de áreas de atuação e botão “Ver todas”.

Footer bar fixo inferior com links jurídicos e contacto.

Ligações internas:

Menu para index.html, sobre.html, equipa.html, areas.html, contactos.html.

Botão para contactos.html.

Botão para areas.html.

Footer para politica-privacidade.html, informacao-legal.html e contactos.html.

sobre.html

Função da página: apresentação institucional da sociedade.

Principais secções:

História.

Valores.

Visão.

Ligações internas:

Menu principal igual ao da homepage.

Footer com links para privacidade, informação legal e contactos.

equipa.html

Função da página: apresentação da equipa jurídica.

Principais secções:

Secção “Sócios”.

Secção “Advogados Associados”.

Perfis com nomes e emails; alguns perfis incluem imagem.

Ligações internas:

Menu principal.

Links mailto: nos emails.

Footer com links jurídicos e contacto.

areas.html

Função da página: descrição das áreas de atuação.

Principais secções:

Direito Civil.

Direito Comercial.

Direito do Trabalho.

Imobiliário e Urbanismo.

Contencioso e Arbitragem.

Ligações internas:

Menu principal.

Footer com links jurídicos e contacto.

contactos.html

Função da página: disponibilização de contactos e canal de mensagem.

Principais secções:

Morada, telefone e email.

Formulário de contacto com campos nome, email e mensagem.

Mapa Google Maps incorporado.

Ligações internas:

Menu principal.

Footer com links jurídicos e contacto.

Form action externa para Formspree.

Email visível em texto, mas não convertido em link mailto: nesta secção.

politica-privacidade.html

Função da página: apresentação da política de privacidade do site.

Principais secções:

Dados recolhidos.

Finalidades do tratamento.

Direitos dos titulares.

Conservação dos dados.

Segurança.

Ligações internas:

Menu principal.

Footer com link para informação legal e contacto.

informacao-legal.html

Função da página: informação legal sobre o site e limitações de responsabilidade.

Principais secções:

Identificação da sociedade.

Responsabilidade.

Direitos de autor.

Ligações externas.

Alterações.

Ligações internas:

Menu principal.

Footer com link para política de privacidade e contacto.

4. Layout e Componentes
Header

O header é comum às páginas e inclui:

Logótipo/imagem da sociedade.

Nome da sociedade em duas linhas.

Navegação principal horizontal.

Elemento de menu mobile (.menu-toggle) com ícone “☰”.

O header está configurado com position: fixed, ocupando o topo da página, e recebe sombra dinâmica por JavaScript quando ocorre scroll.

Footer

Não existe um <footer> semântico nas páginas fornecidas, embora exista regra CSS para footer. Em vez disso, o projeto usa um componente visual comum chamado .footer-bar, fixo ao fundo e inicialmente oculto abaixo da viewport. Esta barra sobe quando o utilizador chega ao fundo da página.

Componentes reutilizáveis identificados

Header comum com logo e menu.

Footer bar comum.

Botões .btn.

Secções .secao com animação de revelação.

Perfis .perfil na página de equipa.

Conteúdo principal .conteudo-pagina para páginas internas.

Formulário .formulario na página de contactos.

Organização geral do layout

A homepage tem uma estrutura mais promocional, com hero e resumo de serviços. As páginas internas seguem um padrão centrado, com conteúdo numa coluna principal limitada por largura máxima, afastamento superior para compensar o header fixo e secções verticais sucessivas.

5. Estilo (CSS)
Organização do CSS

A folha estilos.css concentra estilos globais e específicos das várias páginas no mesmo ficheiro, sem modularização por componentes ou páginas. O CSS inclui:

estilos base do body;

header e navegação;

hero e botões;

secções genéricas;

formulário;

mapa;

perfis da equipa;

footer bar;

animações e estados hover;

media queries para responsividade.

Tipografia

A tipografia base definida é 'Segoe UI', sans-serif. Não existe integração de fontes externas personalizadas. O site usa variações de tamanho e peso para títulos, subtítulos, nome da sociedade e texto corrente.

Cores identificáveis

As cores mais presentes são:

#333 para texto base;

#222 / #111 / #000 para texto e elementos de navegação;

#005fa3 como cor de destaque em títulos, hover e focos;

#f4f4f4 / #f7f7f7 / #f9f9f9 para fundos claros;

#1c1c1c / #333 / #444 / #555 / #666 na footer bar e respetivos estados.

Responsividade

Existe responsividade básica implementada:

a partir de max-width: 768px, o menu horizontal passa a estar oculto por defeito e pode ser mostrado com a classe .show;

a partir de max-width: 600px, os blocos .perfil passam de layout horizontal para vertical.

Contudo, a implementação mobile não está completa do ponto de vista funcional, porque o HTML usa onclick="toggleMenu()", mas o JavaScript não define nenhuma função global toggleMenu(). Em contrapartida, o script adiciona um addEventListener ao mesmo elemento .menu-toggle. Isto significa que o clique tenta chamar uma função inexistente e, ao mesmo tempo, existe uma lógica JS diferente para o mesmo comportamento.

6. JavaScript
Funcionalidades implementadas

O ficheiro script.js implementa:

adição da classe loaded ao body no DOMContentLoaded, ativando um fade-in inicial;

definição dinâmica do fundo da secção .hero, com caminho diferente consoante o hostname contenha github.io;

alternância da classe .show no menu mobile;

animação de scroll reveal através de IntersectionObserver para elementos com .scroll-reveal;

exibição da .footer-bar quando o utilizador chega ao fundo da página;

adição de sombra ao header quando há scroll.

Interatividade existente

animação inicial de entrada da página;

menu mobile colapsável (parcialmente implementado e com conflito, como referido);

revelação progressiva de secções ao entrar na viewport;

barra inferior contextual visível no final da leitura;

efeito visual no header em scroll.

Limitações

Não existe qualquer lógica de validação adicional do formulário além da validação HTML nativa.

Não há gestão de estados de erro/sucesso para o envio do formulário.

O código depende da existência de elementos específicos (header, #footerBar, .hero, .menu-toggle, #menu) mas não abstrai componentes nem protege totalmente contra markup inconsistente.

O caminho da imagem de hero pressupõe a existência de img/bg-hero.jpg, ficheiro não fornecido.

O uso simultâneo de onclick="toggleMenu()" no HTML e addEventListener no JavaScript revela inconsistência de abordagem.

7. Funcionalidades Implementadas

No estado do código fornecido, estão implementadas as seguintes funcionalidades:

Navegação

Navegação principal entre as páginas HTML existentes.

Navegação por logótipo para a homepage.

Links internos na homepage para contactos e áreas.

Links jurídicos e de contacto na barra inferior.

Links

Links internos entre páginas.

Links mailto: nos perfis da equipa.

Submissão do formulário para um endpoint Formspree.

Incorporação de mapa através de iframe do Google Maps.

Scripts e UI

Fade-in do body após carregamento.

Background dinâmico na hero.

Scroll reveal em secções marcadas.

Sombra do header no scroll.

Barra inferior revelada ao atingir o fundo da página.

Estilos hover em links, secções, perfis e botões.

Layout adaptativo básico para mobile.

8. Problemas e Limitações
Inconsistências estruturais

Estrutura física diferente da estrutura referenciada no HTML

Os HTML apontam para css/estilos.css e js/script.js, mas os ficheiros fornecidos estão na raiz.

Sem reorganização de pastas, o CSS e o JavaScript não serão carregados.

Ativos locais em falta

img/logo.jpg não foi fornecido.

img/equipa/jsmiguel.jpg não foi fornecido.

img/bg-hero.jpg não foi fornecido.

favicon.ico não foi fornecido.

Problemas funcionais

Menu mobile incoerente

O HTML usa onclick="toggleMenu()", mas essa função não existe no script.js.

Existe, em alternativa, um addEventListener que já trata o toggle da classe .show.

O resultado provável é erro JavaScript no clique e comportamento inconsistente.

Estado ativo do menu incorreto

Em todas as páginas, o item “Início” surge com classe ativo.

As páginas internas não marcam corretamente o item correspondente à página atual.

Problemas de consistência de conteúdo/markup

Estrutura dos perfis da equipa inconsistente

Alguns perfis usam div.dados e imagem.

Outros perfis contêm apenas h3 e p diretamente no bloco .perfil, sem a mesma estrutura.

Há perfis com imagem e outros sem imagem, sem tratamento visual diferenciado explícito.

Imagens repetidas com atributos incorretos

Vários perfis usam a mesma imagem jsmiguel.jpg.

Em pelo menos dois casos, o alt continua a referir “Dr. José da Silva Miguel”, mesmo quando o nome apresentado é outro.

CSS com seletores sem correspondência clara no HTML fornecido

Existe estilo para footer, mas as páginas usam .footer-bar.

Existe hover para .area-atuacao, mas essa classe não aparece nos HTML fornecidos.

Existe estilo para .pagina-sobre, que não está a ser usado em sobre.html.

Existe estilo para .hero .btn, mas a hero só existe na homepage.

Existe body::after para compensar altura da barra inferior, mas a barra só aparece no final da leitura.

Classe potencialmente não estilizada

informacao-legal.html usa .texto-pagina, mas essa classe não tem definição visível no CSS fornecido.

Problemas de UX/UI

Header fixo e compensação manual

A compensação do topo é feita sobretudo com padding-top em .conteudo-pagina, o que é funcional mas pouco robusto se a altura do header mudar.

Barra inferior fixa pode competir com o conteúdo

A .footer-bar não é um footer convencional; surge apenas ao fundo do scroll e depende de compensação artificial no body::after.

Homepage muito sucinta

A página inicial tem pouca profundidade institucional quando comparada com o potencial do restante conteúdo.

9. Funcionalidades em Falta

Com base apenas no que é visível no código, estão em falta ou não estão claramente implementados:

Estrutura de pastas coerente com os caminhos usados no HTML.

Inclusão dos ativos locais referenciados (imagens e favicon).

Função mobile totalmente consistente para o menu.

Marcação correta do item ativo do menu em cada página.

Tratamento uniforme dos perfis da equipa.

Estados visuais e mensagens de sucesso/erro no formulário.

Metadados SEO mais completos (descrições, Open Graph, etc.).

Melhor normalização semântica do rodapé.

Eventual página 404, ficheiro robots.txt e sitemap.xml (não fornecidos).

Componentização/redução de repetição de header e footer.

Não se pode afirmar, com rigor, a existência de backend, CMS, analytics, consentimento de cookies, multilíngua ou integrações adicionais, porque nada disso consta dos ficheiros disponibilizados.

10. Melhorias Recomendadas
Técnicas

Corrigir a estrutura do projeto para que coincida com os caminhos referenciados (css/, js/, img/).

Adicionar os ativos em falta ou corrigir as referências.

Remover o onclick="toggleMenu()" do HTML e centralizar a lógica do menu no JavaScript atual, ou então criar efetivamente a função global — preferencialmente a primeira opção.

Uniformizar o markup dos perfis da equipa.

Eliminar CSS morto ou classes não utilizadas.

Criar uma convenção consistente para estados ativos do menu.

Melhorar a semântica HTML com uso mais rigoroso de <footer>, eventualmente <section>/<article> onde adequado.

UX/UI

Tornar a homepage mais completa e representativa da sociedade.

Melhorar a consistência visual entre perfis com e sem imagem.

Garantir feedback ao utilizador no formulário.

Rever a utilidade e comportamento da barra inferior fixa.

Ajustar acessibilidade de navegação e contraste onde necessário.

Performance

Otimizar e comprimir imagens.

Evitar dependência de ativos inexistentes.

Rever carregamento de recursos externos e adicionar política consistente de fallbacks.

Minificar CSS e JS numa fase posterior de build, se houver pipeline.

Organização

Separar o projeto por pastas (css, js, img).

Documentar assets obrigatórios.

Criar README técnico com instruções de execução e publicação.

Considerar um sistema de includes/templates se o projeto crescer, para evitar repetição de header/footer em todos os HTML.

11. Estado de Prontidão
Classificação: Protótipo avançado / MVP inicial estático
Justificação

O projeto já apresenta:

várias páginas reais e interligadas;

identidade textual e posicionamento institucional claros;

estilos próprios;

alguma interatividade em JavaScript;

formulário funcional via serviço externo;

conteúdos jurídicos mínimos essenciais.

Contudo, não pode ser classificado como “quase pronto” nem “pronto para produção” no estado exato fornecido, por razões objetivas:

os caminhos de CSS e JS não coincidem com a localização real dos ficheiros entregues;

faltam ativos indispensáveis à apresentação visual;

o menu mobile tem implementação incoerente;

há inconsistências de conteúdo e markup entre páginas.

Assim, o estado mais rigoroso é o de um protótipo funcional em desenvolvimento, com base suficiente para evoluir rapidamente para um MVP sólido, mas ainda a necessitar de correções estruturais antes de publicação.

12. Próximos Passos Prioritários

Corrigir a estrutura de pastas para corresponder aos caminhos usados no HTML.

Adicionar todos os ativos em falta (logo, imagens da equipa, imagem da hero, favicon) ou corrigir/remover referências quebradas.

Corrigir o menu mobile, removendo a chamada inexistente toggleMenu() e garantindo funcionamento sem erros.

Corrigir o estado ativo do menu em cada página.

Uniformizar a página da equipa, tanto no HTML como no conteúdo visual e nos atributos alt.

Verificar a consistência do CSS, removendo classes não usadas e adicionando estilos em falta, como para .texto-pagina se for para manter essa classe.

Testar todas as páginas localmente e em ambiente de deploy, incluindo links, scroll reveal, formulário e mapa.

Melhorar a homepage, reforçando conteúdo institucional e chamada à ação.

Reforçar acessibilidade e semântica HTML.

Só depois destas correções considerar publicação em ambiente público.

Anexo Técnico — Observações Objetivas sobre o estado fornecido

Foram fornecidos 7 ficheiros HTML, 1 CSS e 1 JS.

Os HTML referenciam recursos em subpastas (css/, js/, img/) que não constam na estrutura disponibilizada.

O formulário de contacto envia para https://formspree.io/f/mzzrpvnq.

O mapa está incorporado por iframe Google Maps.

O JavaScript aplica um caminho especial para GitHub Pages (/mga_site/img/bg-hero.jpg), o que sugere intenção de publicação nesse contexto.