MGA Site — Estado do Processo
1. Objeto do projeto

Criação e organização do website institucional da sociedade Miguel, Goes & Associados, com estrutura estática em HTML/CSS/JS, versão em português e versão em inglês, tom institucional sóbrio e arquitetura preparada para expansão por áreas de prática e páginas-filhas temáticas.

2. Estrutura atualmente existente

A estrutura base do site está corretamente organizada com:

páginas em português na raiz;
páginas em inglês dentro de /en;
assets comuns em css/, img/ e js/.
Estrutura identificada
PT:
index.html
sobre.html
equipa.html
areas.html
contactos.html
informacao-legal.html
politica-privacidade.html
EN:
en/index.html
en/about.html
en/team.html
en/practice-areas.html
en/contacts.html
en/legal-information.html
en/privacy-policy.html
comuns:
js/script.js
css/estilos.css
img/...
3. O que já está feito
3.1. Base institucional do site

Já existe uma base funcional do site, com homepage, páginas institucionais, áreas, contactos, informação legal e política de privacidade, em PT e EN.

3.2. Arquitetura bilingue

A arquitetura bilingue está fechada:

PT na raiz;
EN em /en;
script.js compatível com essa estrutura e com GitHub Pages.
3.3. Reposicionamento editorial da homepage

A homepage PT já foi reposicionada para comunicar a sociedade como escritório que acompanha:

clientes internacionais;
investidores;
empresas;
assuntos ligados a residência, mobilidade, investimento, corporate, imobiliário e instalação em Portugal.
3.4. Página de áreas como página-mãe

A areas.html já está assumida como hub principal de áreas de prática, com texto institucional e estrutura adequada para expansão em páginas-filhas.

3.5. Primeira página-filha criada

Já foi definida a primeira página-filha:

PT
residencia-em-portugal.html
EN
en/residence-in-portugal.html

Esta página já foi redigida e pensada para:

reforço de SEO;
captação temática;
articulação com investimento, património, imobiliário e organização de interesses em Portugal.
3.6. Cards clicáveis

Ficou definida a lógica de tornar clicáveis:

os blocos de areas.html;
os cards da homepage PT;
os equivalentes em en/practice-areas.html;
os equivalentes em en/index.html.

Isto melhora:

navegação interna;
arquitetura temática;
distribuição de relevância entre página-mãe e páginas-filhas.
4. Melhorias já identificadas
4.1. SEO on-page

Já ficou identificado que o site precisa de reforço em:

<title> mais fortes;
meta description;
uso correto de h1 nas páginas principais;
melhor estrutura semântica para Google.
4.2. Expansão por páginas-filhas

Já ficou definida a estratégia de crescimento por páginas-filhas temáticas, em vez de concentrar tudo apenas em areas.html. Isto é importante para melhorar a cobertura semântica e a indexação temática no Google.

4.3. Lógica de links internos

Já foi decidida a ligação:

homepage → áreas em destaque → páginas-filhas;
areas.html → páginas-filhas;
páginas-filhas → página geral de áreas + contactos + áreas relacionadas.
5. Páginas-filhas já definidas como necessárias
Primeira vaga
residencia-em-portugal.html
imobiliario-investimento.html
comercial-societario.html
Segunda vaga
familia-sucessoes-patrimonio.html ou separação em:
familia.html
sucessoes-herancas.html
contencioso-arbitragem.html
direito-trabalho.html
Terceira vaga
notariado-atos-formais.html ou variante nominal próxima

Na versão EN, ficaram igualmente previstos os equivalentes:

en/residence-in-portugal.html
en/real-estate-investment.html
en/corporate-commercial.html
en/family-succession-estate-planning.html ou separação equivalente
en/litigation-arbitration.html
en/employment-labour-law.html
en/notarial-services-formal-acts.html
6. O que falta fazer
6.1. Criar as restantes páginas-filhas

Neste momento só a primeira está materialmente trabalhada. Falta criar as demais páginas-filhas, em PT e EN, com conteúdo coerente e estrutura uniforme.

Prioridade imediata:

imobiliario-investimento.html
comercial-societario.html
respetivas versões EN
6.2. Fechar nomes de ficheiros

Ainda convém uniformizar definitivamente a taxonomia dos slugs, sobretudo em áreas como:

família / sucessões;
notariado / solicitadoria;
civil / administrativo / penal;
equivalentes EN.

Isto deve ser fechado antes de multiplicar links internos.

6.3. Atualizar os links em areas.html

Os blocos de areas.html devem ficar todos clicáveis e a apontar para os ficheiros finais corretos. Neste momento a lógica já está definida, mas depende de fechar os nomes finais dos ficheiros.

6.4. Atualizar os links na homepage

Os cards “Áreas em Destaque” da homepage PT e EN devem ficar clicáveis para as respetivas páginas-filhas.

6.5. Corrigir o CSS dos links clicáveis

Ao transformar os cards e blocos em links, surgiu o problema de o browser aplicar:

azul;
sublinhado;
a todo o conteúdo.
Já ficou identificado que é necessário fixar isso em css/estilos.css com regras específicas para .secao-link e .home-card-link.
6.6. Uniformizar a versão inglesa

Continuam a existir incoerências na versão EN, nomeadamente:

uso não uniforme de “Miguel, Goes & Associados” / “Miguel, Goes & Associates”;
uso não uniforme de “Law Firm, RL” / “Sociedade de Advogados, RL”.

Isto deve ser uniformizado em todas as páginas EN.

6.7. Corrigir detalhes editoriais

Ficaram identificados alguns detalhes a rever:

duplo ponto final na homepage PT, no card de residência e mobilidade.
inconsistência entre a morada textual e o embed do Google Maps nas páginas de contactos PT e EN.
placeholders/repetição de imagens na equipa.
6.8. Reforçar SEO técnico-editorial

Falta ainda:

rever <title> de todas as páginas;
adicionar meta description;
garantir um h1 por página;
alinhar headings com intenção de procura;
eventualmente reforçar linking interno contextual.
7. Prioridades recomendadas
Prioridade 1

Fechar e publicar a estrutura de páginas-filhas principais:

residência;
imobiliário/investimento;
comercial/societário.
Prioridade 2

Ligar essas páginas:

na homepage;
em areas.html;
na versão EN equivalente.
Prioridade 3

Uniformizar branding e nomenclatura em EN.

Prioridade 4

Fazer ronda de SEO on-page em todo o site.

Prioridade 5

Criar segunda vaga de páginas-filhas:

família/sucessões;
contencioso/arbitragem;
trabalho;
notariado.
8. Estado global

O projeto já tem:

base estrutural funcional;
arquitetura bilingue correta;
homepage reposicionada;
página de áreas consolidada como hub;
estratégia SEO definida;
primeira página-filha criada;
lógica de expansão já montada.

O que falta já não é “inventar o site”; é sobretudo:

executar a expansão por páginas-filhas;
fechar links internos;
uniformizar EN;
fazer a ronda final de SEO e acabamento.