# Análise do site MGA e plano de fecho

Data: 26 de outubro de 2026.

## Conclusão

O site tem uma base aproveitável, mas ainda não está pronto para publicação como versão final. O principal problema é a coexistência de versões editoriais e estruturas diferentes, sobretudo entre português e inglês. Os anteriores documentos do repositório que classificam o site como estabilizado não descrevem o estado atual com rigor suficiente.

A direção recomendada é uma sociedade de advogados de Lisboa, fundada em 1998, com experiência em Direito Público e recuperação de crédito, e uma oferta de Direito Privado sustentada pelos seus profissionais. A residência de cidadãos estrangeiros deve continuar acessível como área de prática, sem dominar a identidade da sociedade.

O trabalho deve avançar com uma estrutura definida e uma revisão transversal. Alargar contentores ou acrescentar caixas isoladamente não resolve a falta de coerência.

## Materiais e alcance

- Notas da reunião em `Notas site.txt`, na pasta de trabalho indicada pelo utilizador.
- Documento `SITE INTERNET - JSM.docx`, incluindo distinção entre texto mantido e texto riscado.
- Email do Dr. José da Silva Miguel transcrito na conversa.
- Histórico dos pedidos e imagens de problemas visuais enviados nesta conversa.
- Inventário e verificação estática das 50 páginas locais: 26 PT e 24 EN.
- Leitura dos conteúdos institucionais e das áreas em PT e EN, CSS e JavaScript partilhados.
- Inspeção no navegador da homepage e da equipa; comparação da equipa EN; verificação do menu e contactos em telemóvel.
- Verificação dos ficheiros locais referenciados, âncoras, maiúsculas/minúsculas dos caminhos, títulos, descrições, H1 e sitemap.

O utilizador confirmou nesta análise que ainda não existem contributos adicionais da Dra. Carla ou do Dr. Miguel Costa Pinto. A conformidade jurídica dos serviços anunciados e a atualidade de cada regime legal não foram certificadas nesta auditoria. Não foram consultados Search Console, estatísticas, configuração do alojamento ou conta Formspree. Não foi submetida nenhuma mensagem pelo formulário.

## O que o Dr. JSM pretende

| Intenção nos materiais | Consequência para o site | Estado observado |
| --- | --- | --- |
| Recuperar a identidade histórica da MGA | Direito Público e Privado como enquadramento; fundação em 1998 como facto de confiança | Presente na homepage PT; menos consistente no resto do site EN |
| Retirar residência do primeiro plano | Direito dos Estrangeiros acessível, subordinado à oferta geral | Aplicado em PT; página de áreas EN ainda abre com residência e instalação |
| Seis áreas em destaque | Público; Comercial e Societário; Trabalho; Penal; Executivo/Insolvências/Crédito; Propriedade/Investimento/Imobiliário/Urbanismo | A homepage PT tem seis destaques, mas a designação e o âmbito de insolvências precisam de fecho |
| Partir das pessoas para as áreas | Mostrar quem acompanha cada matéria e ligar perfis e práticas | Existem etiquetas ocultas nos perfis PT; as páginas das áreas não identificam os interlocutores |
| Cada departamento desenvolver a sua proposta | Textos específicos e confirmados pelos profissionais | Ainda não recebidos; os textos atuais devem ser tratados como propostas editoriais |
| Reforçar a experiência em recuperação de crédito | Mais de 20 anos, crédito ao consumo e hipotecário, processos em massa e reporte continuado | A referência aos 20 anos desapareceu; os termos escolhidos pelo sócio foram parcialmente substituídos |
| Prevenção e resolução de litígios | Explicar as duas formas de intervenção em linguagem simples | Presente, mas repetido em várias secções com pouco ganho de informação |
| Balança colocada por brincadeira | Não constitui uma instrução estética nem um elemento obrigatório | Não deve orientar o desenho |
| Revisão posterior por alguém de marketing | Uma revisão final de apresentação | Não substitui a organização, conteúdo e utilização que o site precisa de ter antes |

Interpretação: o conservadorismo do sócio traduz-se sobretudo em rigor, identidade, continuidade e responsabilidade profissional. Os materiais não exigem um site visualmente antiquado. É possível usar uma apresentação moderna e sóbria com fotografias autênticas, boa tipografia e navegação simples.

## Problemas por prioridade

### 1. Conteúdo invisível em telemóvel

Reproduzido na página da equipa a 390 × 720: a secção dos perfis tinha cerca de 3888 px de altura. O observador exigia 20% da secção visível, aproximadamente 778 px, mais do que a altura do ecrã. A secção permanecia com `opacity: 0` mesmo durante a leitura.

Corrigido nesta análise em `js/script.js`: o limiar passou de `0.2` para `0`. Confirmado no navegador, nas mesmas dimensões, que a secção recebe `visible` e termina com opacidade 1. A primeira repetição em 127.0.0.1 ainda utilizou o script em cache; uma navegação nova por localhost confirmou a versão atualizada.

Permanece por melhorar a dependência geral do JavaScript para mostrar a página: o CSS começa por ocultar o `body` e as secções. O conteúdo deve ser visível por defeito, com animações opcionais e respeito por movimento reduzido.

### 2. Português e inglês representam versões diferentes da sociedade

- `en/practice-areas.html` mantém residência como primeiro grupo, contrariando a reorganização PT e as notas.
- Vários menus EN mantêm a arquitetura antiga; outros já apresentam a nova. A navegação varia ao mudar de página.
- `en/about.html` mantém o texto abstrato anterior e não acompanha a organização e o posicionamento de `sobre.html`.
- Não existem equivalentes EN próprios de `direito-publico.html` e `direito-dos-estrangeiros.html`. Os interruptores de idioma levam, respetivamente, à listagem geral e à página de residência.
- O H1 inglês `Legal Advice in Portugal` é adequado à intenção já expressa pelo utilizador. Deve ser mantido, com a mesma identidade e hierarquia do site PT.

Decisão proposta: uma única arquitetura nos dois idiomas, adaptando a redação ao público, mantendo correspondência entre conteúdos e páginas.

### 3. A equipa não está pronta para publicação

- A imagem de `img/equipa/jsmiguel.jpg` é uma ilustração de um olho, não um retrato profissional. Em EN é reutilizada nos nove perfis.
- PT apresenta 12 pessoas; EN apresenta nove. Faltam em EN Ana Rita Alves Costa, Vânia Furtado e Elsa Pombinho.
- As áreas de prática estão ocultas atrás de botões em PT e ausentes em EN.
- O perfil do Dr. Miguel Costa Pinto não inclui Trabalho, apesar da associação expressa no email do Dr. JSM. A atribuição deve ser confirmada e corrigida.
- Falta distinguir de forma confirmada as funções e, quando adequado, sócios e associados.
- O clique no cartão inteiro ativa um efeito de foco que esbate outro grupo. Complica uma página cuja função principal é conhecer as pessoas.
- Há demasiado texto introdutório antes dos perfis. Na inspeção desktop, o primeiro ecrã da equipa não mostrava as pessoas.

Decisão proposta: perfis simples com nome, função confirmada, áreas visíveis e contacto. Usar iniciais consistentes até existirem retratos reais aprovados. Ligar as áreas aos perfis e vice-versa. Retirar o efeito de esbatimento dos grupos.

### 4. Recuperação de crédito precisa de respeitar melhor a revisão do sócio

O documento contém escolhas deliberadas, não apenas sugestões genéricas: mais de 20 anos de experiência; crédito ao consumo e hipotecário; recuperação extrajudicial e judicial; processos em massa; acompanhamento dos acordos; reação ao incumprimento; tribunais e agentes de execução; informação continuada ao cliente.

No site, a antiguidade da experiência foi omitida, o texto voltou a privilegiar algumas formulações riscadas e a homepage ainda usa «processos com volume». A página EN mantém uma versão anterior, centrada em notificações e organização processual, e não destaca consumo e hipotecário.

Decisão proposta: recuperar os factos e a ênfase do documento, corrigindo a língua sem diluir o sentido. «Carteiras de processos» pode ajudar a leitura, mas não deve apagar a capacidade de tratamento em massa que o sócio quis comunicar. Confirmar o âmbito de insolvências antes de o transformar numa promessa autónoma de serviço.

### 5. A coerência visual exige hierarquia e alinhamento

O contentor local atual das páginas internas tem 1120 px. A existência de margens laterais é normal; não há uma largura universalmente correta. A sensação de conteúdo espalhado resulta também de introduções extensas, alternância de alinhamentos, larguras diferentes entre componentes e repetição de blocos pouco informativos.

Decisão proposta:

- Manter uma grelha comum e margens responsivas, com texto de leitura limitado dentro de secções mais largas.
- Reservar duas colunas para relações claras: fotografia e apresentação; dados de contacto e formulário.
- Colocar título, introdução e conteúdo numa sequência previsível, com menos espaço desperdiçado antes do conteúdo principal.
- Simplificar a homepage para abertura, apresentação curta, práticas, pessoas e contacto.
- Reduzir as introduções e caixas repetidas de «rigor», «método» e «resposta integrada».
- Dar imagem própria à sociedade com material real. Confirmar a origem das fotografias usadas; uma imagem decorativa de documentos acrescenta menos confiança do que o escritório e a equipa.
- Preservar a base sóbria de branco, texto escuro e apontamentos bordô. Aplicar a mesma escala tipográfica e o mesmo tratamento dos componentes nas duas línguas.

Não se justifica migrar para outro framework para resolver estes problemas. Uma composição consistente pode ser feita na base atual.

### 6. Revisão linguística ainda incompleta

O português é globalmente compreensível, mas tem repetições e excesso de linguagem abstrata. Exemplo: «sentido de responsabilidade, responsabilidade profissional» na introdução da equipa. Várias páginas repetem a relevância da área, a análise caso a caso e a articulação com outras áreas sem acrescentar informação específica.

O inglês não deve ser considerado validado para publicação. Exemplos observados:

| Expressão atual | Direção de revisão |
| --- | --- |
| `an integrated reading of each concrete situation` | Explicar que as áreas relevantes são consideradas em conjunto, em inglês natural |
| `In matters with volume or prolonged evolution` | Referir carteiras numerosas ou assuntos de longa duração |
| `initial legal framework` no convite ao contacto | Usar uma formulação como `an initial assessment of your matter` |
| `obligations liability` | Rever o sentido pretendido e a terminologia de responsabilidade contratual |
| `Closeness` como princípio | Descrever contacto direto e uma relação de trabalho próxima |

Termos como `patrimonial`, `legal framing`, `coercive measures` e `notarial services` precisam de revisão contextual, e não de substituição automática. A tradução deve explicar institutos portugueses sem sugerir qualificações ou serviços diferentes dos efetivamente prestados. Uniformizar inglês britânico.

O script partilhado contém textos dos botões de equipa fixos em português. Esses controlos não existem atualmente em `en/team.html`; o problema terá de ser resolvido ao uniformizar as duas páginas, não deve ser descrito como uma interação já reproduzida em EN.

A palavra «discrição» saiu do posicionamento principal PT. A versão EN de Penal ainda usa `discreet`; rever essa escolha face à preferência do utilizador.

### 7. Contactos e confiança precisam de um fecho funcional

A grelha local de contactos e formulário é uma organização aproveitável. O menu móvel abriu e os elementos de contactos não apresentaram transbordo horizontal a 390 × 720.

Falta confirmar a entrega real pelo Formspree, o destinatário e os estados de sucesso e erro. O código atual apenas faz um POST para o serviço externo; a auditoria não prova que as mensagens chegam à sociedade.

Proposta: contacto direto disponível com pouca leitura prévia, formulário curto, aviso junto do formulário ligado à política de privacidade, confirmação clara do envio e alternativa por telefone/email em caso de falha. Acrescentar informação de disponibilidade apenas quando confirmada pela sociedade.

O menu móvel é uma `div` clicável, sem semântica de botão nem estado expandido. Deve funcionar por teclado e anunciar o seu estado. O iframe do mapa não tem título acessível.

O rodapé só aparece ao chegar ao fundo. Nome, morada, contacto e ligações institucionais devem integrar um rodapé normal, previsível. Há ainda uma diferença entre o código postal escrito (1050-164) e o incluído na identificação do mapa (1050-167), a confirmar.

A informação legal e a política de privacidade usam formulações genéricas e condicionais. É necessário preencher a identificação confirmada da sociedade e fazer corresponder a política aos serviços efetivamente usados: alojamento, Formspree, mapa e eventuais estatísticas. Esta observação identifica informação por fechar; não constitui certificação de conformidade ou uma conclusão automática sobre consentimentos obrigatórios.

### 8. SEO tem fundamentos, mas precisa de conteúdo e medição

Verificação automática local:

| Verificação | Resultado |
| --- | --- |
| Páginas HTML | 50: 26 PT e 24 EN |
| Título e meta description | Presentes nas 50 |
| H1 | Um por página |
| Títulos duplicados | Não encontrados |
| Ficheiros locais referenciados em href/src | Sem referências partidas encontradas |
| Âncoras locais e diferenças de maiúsculas em caminhos | Sem problemas encontrados |
| Canonical no HTML | Ausente nas 50 |
| Hreflang no HTML | Ausente nas 50 |
| Imagem Open Graph | Ausente nas 50 |
| Sitemap | 26 URLs PT; nenhuma URL EN |

Estas verificações não equivalem a uma validação completa do HTML, indexação real ou posições no Google. Ausência de canonical ou hreflang não significa que uma página não possa ser indexada.

Prioridades recomendadas:

1. Definir URLs preferidas e pares PT/EN, depois aplicar canonical, hreflang e sitemap coerentes. Cada tradução deve ter a sua própria canonical; não apontar todas para PT.
2. Dar a cada área uma intenção de pesquisa e conteúdo próprio: que problemas trata, para quem, como intervém e que profissional a assegura. Evitar três páginas quase iguais de Público, Administrativo e Contratação Pública.
3. Reforçar confiança com profissionais e experiência confirmados. Os materiais do Dr. JSM fornecem diferenciação concreta que hoje está diluída.
4. Organizar a presença local de Lisboa com nome, morada e contactos consistentes; confirmar o perfil de empresa e acessos existentes.
5. Configurar Search Console, submissão do sitemap e acompanhamento dos pedidos qualificados. Não existe código de medição de conversões identificado nos ficheiros revistos; podem existir ferramentas externas não verificadas.
6. Otimizar as imagens principais: `bg-hero.jpg` tem cerca de 2,17 MB e `detalhe-documental.jpg` cerca de 1,91 MB. Em conjunto são aproximadamente 4,08 MB antes de outros recursos. Preparar formatos e tamanhos adequados, dimensões explícitas e carregamento da imagem principal sem depender do script.
7. Completar metadados de partilha e validar os dados estruturados já existentes. Não prometer resultados de pesquisa ou estrelas pela simples adição de schema.

O critério editorial deve ser utilidade e experiência própria, não volume de texto ou repetição de palavras-chave. Referências técnicas: [conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [versões linguísticas](https://developers.google.com/search/docs/specialty/international/localized-versions), [canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) e [dados estruturados locais](https://developers.google.com/search/docs/appearance/structured-data/local-business), do Google Search Central.

## Estrutura proposta para fechar a versão de lançamento

Navegação principal: Início, Sociedade, Equipa, Áreas de Atuação, Contactos e PT/EN. Manter um único menu em todas as páginas de cada idioma.

Homepage:

1. Nome da sociedade, título curto, fotografia apropriada e contacto. Manter «Advogados em Lisboa desde 1998» em PT e «Legal Advice in Portugal» em EN; reduzir repetições da data e texto secundário.
2. Apresentação curta de Direito Público e Privado, com a prevenção e a resolução de litígios como forma de trabalho.
3. Seis destaques na ordem das notas. Fechar a designação da quinta área com a sociedade e uniformizá-la no site.
4. Pessoas e práticas: acesso imediato à equipa e associação a áreas confirmadas.
5. Contacto claro e rodapé completo.

Páginas de áreas: título, descrição breve do problema/serviço, lista concreta de intervenções, desenvolvimento apenas quando acrescenta valor, profissional ou equipa responsável confirmada, áreas relacionadas pertinentes e contacto. O índice de áreas deve conservar a prioridade do Direito Público e facilitar o acesso ao crédito, às empresas e às pessoas.

Direito dos Estrangeiros permanece no índice geral, com residência, D2, D7, ARI e reagrupamento em páginas próprias quando acrescentam informação. Os regimes e procedimentos devem ser revistos em fontes oficiais atuais antes da publicação; esta análise não fez essa atualização jurídica.

## Ordem de execução

| Ordem | Entrega | Critério de fecho |
| --- | --- | --- |
| 1 | Navegação, estruturas e componentes comuns PT/EN | Nenhuma página muda de identidade, hierarquia ou navegação ao mudar de idioma |
| 2 | Homepage, Sociedade, Equipa e Contactos | Informação principal acessível cedo; perfis coerentes; percurso de contacto claro |
| 3 | Público, Administrativo, Contratação Pública e Recuperação de Crédito | Revisão do Dr. JSM refletida e conteúdos distintos entre páginas |
| 4 | Restantes áreas e inglês | Propostas prontas para os colegas confirmarem; tradução natural e equivalente |
| 5 | SEO, imagens, acessibilidade e funcionamento | Validação nos tamanhos desktop e móvel, teclado, links, envio e estados de erro |
| 6 | Publicação e verificação externa | Domínio, HTTPS, redirecionamentos, formulário, sitemap e indexação verificados no alojamento final |

Não é necessário esperar pelos contributos para preparar as páginas. É necessário distinguir uma proposta editorial de uma descrição já confirmada dos serviços e dos profissionais.

## Informação que só a sociedade pode fechar

- Lista atual de profissionais, funções, áreas e contactos; identificação de sócios quando se pretenda apresentá-la.
- Confirmação do âmbito de Comercial, Trabalho, Penal e Insolvências pelos respetivos profissionais.
- Identificação institucional completa e morada/código postal corretos.
- Fotografias reais disponíveis e respetiva utilização; alternativamente, lançamento com iniciais consistentes.
- Alojamento e domínio final, destinatário do formulário e acessos existentes ao Search Console e perfil de empresa.

## Alterações e validação desta análise

Foi alterado apenas `js/script.js`, para corrigir o limiar da animação que deixava os perfis invisíveis. As alterações locais anteriores em `css/estilos.css`, `contactos.html` e `en/contacts.html` foram preservadas. Foi acrescentado este diagnóstico.

O JavaScript passou em `node --check`; `git diff --check` não reportou erros de whitespace. O servidor local respondeu HTTP 200. O erro de equipa foi reproduzido e a correção foi confirmada a 390 × 720. Contactos foi verificado sem transbordo horizontal nesse tamanho e o menu móvel abriu.

Não foi feita uma certificação visual de todas as 50 páginas em todos os tamanhos, nem testes de entrega de email, Lighthouse, indexação ou configuração de produção. Não foi feito commit, push ou publicação.
