# MGA Site — Estado do Processo

## 1. Ponto de situação geral

O website institucional encontra-se numa fase avançada de consolidação da versão portuguesa, com a estrutura principal já montada, identidade visual estável e base técnica funcional.

Nesta fase, o trabalho editorial evoluiu de um registo mais genérico para um tom mais institucional, sóbrio e juridicamente credível, centrado em:

- assessoria jurídica em Portugal;
- acompanhamento de pessoas, famílias, investidores e empresas;
- articulação entre matérias distintas sempre que a realidade do cliente o exija;
- rigor, discrição e visão integrada;
- comunicação menos promocional e mais própria de uma sociedade de advogados.

O projeto já tem páginas principais em português, folha de estilos global e script comum carregados localmente, incluindo:

- `estilos.css`;
- `script.js`;
- `sobre.html`;
- `equipa.html`;
- `areas.html`;
- `contactos.html`;
- `politica-privacidade.html`;
- `informacao-legal.html`.

O `script.js` já contempla a lógica de imagem da hero para ambiente local/GitHub e para páginas na pasta `en/`, bem como menu mobile, animação de scroll reveal e barra inferior no fundo da página. O suporte técnico para a coexistência PT/EN já está parcialmente preparado. 

## 2. Estado editorial — homepage (`index.html`)

A homepage entrou numa fase de reposicionamento editorial mais clara e consistente.

Ficou fechada, em termos de direção de texto, a seguinte linha conceptual:

- comunicação de assessoria jurídica em Portugal;
- enfoque em atividade empresarial, trabalho, residência, investimento, estruturação societária, imobiliário, família, sucessões e contencioso;
- reforço de uma lógica integrada e não meramente setorial;
- apresentação da sociedade como apta a lidar com problemas jurídicos que não se resolvem num único plano;
- abandono gradual de fórmulas mais antigas como “entrada no mercado português” ou “organização de interesses” quando soavam vagas ou excessivamente consultivas.

### Formulações já estabilizadas no processo de revisão da homepage

Entre as formulações que ficaram materialmente fechadas ou muito próximas de fechadas, contam-se:

- hero orientado para “Assessoria jurídica em Portugal”;
- inclusão de família e sucessões na mensagem principal;
- secção de diferenciação assente na ideia de problema → articulação jurídica → solução;
- secção “Áreas em Destaque” reescrita para maior coerência com o novo tom das áreas.

## 3. Estado editorial — página `areas.html`

A página `areas.html` já foi substancialmente retrabalhada num sentido mais coerente com a homepage. O ficheiro atual confirma essa evolução e já contém sinais claros do novo tom, nomeadamente:

- subtítulo: “Assessoria jurídica para pessoas, famílias e empresas em Portugal”;
- introdução assente em lógica integrada;
- linguagem mais institucional nas áreas de comercial/societário e trabalho;
- tentativa de alinhar o texto das áreas com uma lógica de enquadramento e articulação jurídica. 

### Áreas já existentes em `areas.html`

Neste momento, a página inclui:

1. Residência, Mobilidade Internacional e Instalação em Portugal; 
2. Direito Comercial e Societário; 
3. Investimento, Imobiliário e Urbanismo; 
4. Direito do Trabalho; 
5. Direito Civil; 
6. Contencioso e Arbitragem. fileciteturn3file5

### Ajustes editoriais ainda pendentes em `areas.html`

Apesar do avanço, a página ainda não está editorialmente fechada. Persistem alguns pontos a rever:

#### a) Área de Residência
O texto atual ainda contém a formulação:

> “... em matérias de residência, investimento, património, estruturação e imobiliário.”

A palavra “estruturação” está demasiado solta e deverá ser substituída por formulação mais fechada, por exemplo:

- “organização patrimonial e imobiliário”; ou
- “estruturação de interesses e imobiliário”; ou
- outra redação equivalente que mantenha coerência com a homepage. fileciteturn3file5

#### b) Área de Investimento, Imobiliário e Urbanismo
A frase atualmente termina com vírgula, ficando materialmente incompleta:

> “... enquadramento urbanístico e organização patrimonial,” fileciteturn3file5

Este ponto tem de ser corrigido antes da publicação.

#### c) Área de Direito Civil
O texto atual ainda está demasiado preso à lógica antiga e continua a incluir sucessões, quando a intenção definida no processo foi autonomizar essa matéria em página/área própria. O texto atual refere:

> “... relações contratuais, propriedade, arrendamento, sucessões e demais situações jurídicas da esfera privada.” fileciteturn3file5

A intenção mais recente foi recentrar esta área em contratos, propriedade, condomínio, compra e venda, arrendamento, doações e outras situações da vida civil/patrimonial não penal, não societária e não familiar-sucessória.

#### d) Fecho da página
O bloco final (`pagina-fecho`) está atualmente a funcionar como mini-texto de Direito Civil, e não como verdadeiro fecho institucional da página. Convém decidir se:

- o bloco final deve voltar a ser um fecho transversal da página; ou
- se o texto deve ser absorvido para a própria secção de Direito Civil. fileciteturn3file5

## 4. Novas áreas ainda por criar

No processo editorial, ficou assente que a página de áreas ainda não está completa e que deverão ser autonomizadas, pelo menos, as seguintes áreas:

- Família;
- Sucessões / Heranças;
- Direito Administrativo;
- Contratação Pública;
- Direito Penal / Crime;
- Notariado / atos notariais ou área equivalente.

### Observação estratégica
Estas novas áreas não devem ser simplesmente acrescentadas como rótulos. Devem ser construídas de modo coerente com o novo tom do site, ou seja:

- menos enumeração burocrática;
- menos linguagem demasiado residual;
- maior clareza quanto ao tipo de problemas jurídicos tratados;
- maior proximidade com situações reais do cliente;
- formulações sóbrias, institucionais e juridicamente credíveis.

Em particular:

- **Família** deverá cobrir casamento, divórcio, relações familiares, regulação e demais matérias conexas, sem se confundir com sucessões;
- **Sucessões / Heranças** deverá autonomizar heranças, testamentos, partilhas e organização sucessória;
- **Notariado** poderá abranger reconhecimento de assinaturas, autenticações, certificações, procurações, atos e instrumentos notariais ou estrutura equivalente, conforme o posicionamento pretendido;
- **Direito Administrativo / Contratação Pública** deverá ser autónomo se a sociedade pretender comunicar trabalho com entidades públicas, licenças, procedimentos administrativos e contratos públicos;
- **Direito Penal / Crime** deverá surgir claramente separado de civil, comercial e contencioso geral.

## 5. Páginas institucionais já estabilizadas em PT

As páginas institucionais secundárias estão, no essencial, em bom estado editorial e estrutural:

- `sobre.html` apresenta a sociedade como prática jurídica assente em rigor, ética, proximidade e confiança, com secções bem estruturadas sobre enquadramento, princípios e modo de atuação. fileciteturn3file2
- `equipa.html` já está adaptada ao tom institucional e contém a equipa, com bloco de sócios e advogados associados. fileciteturn3file6
- `contactos.html` está funcional, com dados de contacto, formulário Formspree e mapa incorporado. O email de contacto está em link clicável `mailto:`. fileciteturn3file7
- `politica-privacidade.html` e `informacao-legal.html` existem e estão integradas na navegação/footer. fileciteturn3file4turn3file3

## 6. Estado técnico verificado

### CSS
A folha `estilos.css` já contém:

- estrutura global do header e navegação;
- hero;
- blocos da homepage;
- cards;
- secções internas;
- scroll reveal;
- footer bar fixa;
- comportamento responsivo para mobile;
- switch PT/EN. fileciteturn3file1

### JavaScript
O `script.js` já contém:

- carga da imagem da hero consoante ambiente local/GitHub;
- ajuste para páginas dentro de `/en/`;
- toggle do menu mobile;
- IntersectionObserver para revelar secções em scroll;
- exibição da footer bar ao chegar ao fundo;
- sombra do header em scroll. fileciteturn3file0

## 7. Tradução / versão inglesa (`/en`)

Este é um dos principais blocos de trabalho ainda pendentes.

A navegação das páginas portuguesas já aponta para equivalentes ingleses dentro da pasta `en/`, nomeadamente:

- `en/index.html`;
- `en/about.html`;
- `en/team.html`;
- `en/practice-areas.html`;
- `en/contacts.html`;
- `en/privacy-policy.html`;
- `en/legal-information.html`. fileciteturn3file2turn3file3turn3file4turn3file5turn3file6turn3file7

### O que falta nesta frente

- criar/fechar os HTML em inglês na pasta `en/`;
- garantir que os textos EN acompanham o novo tom fechado em PT;
- adaptar corretamente caminhos relativos (`../css/estilos.css`, `../js/script.js`, `../img/...`) nas páginas EN;
- testar links internos PT/EN;
- validar se a hero em EN usa corretamente a imagem depois da lógica já introduzida no `script.js`. fileciteturn3file0

## 8. Pontos funcionais e operacionais relevantes

### Formulário de contacto
O formulário de `contactos.html` está ligado ao endpoint Formspree:

- `https://formspree.io/f/mzzrpvnq` fileciteturn3file7

Convém manter verificação operacional de:

- receção dos emails;
- pasta de spam/lixo;
- remetente e reply-to;
- política de privacidade coerente com o formulário.

### Imagens da equipa
Na página `equipa.html`, pelo menos dois perfis usam a mesma imagem `img/equipa/jsmiguel.jpg`, incluindo o perfil do Dr. Manuel Jorge Goes. Isto pode ser provisório, mas deve ser confirmado antes de publicação. fileciteturn3file6

## 9. Lista de pendências prioritárias

### Prioridade alta

1. Fechar editorialmente `areas.html`.
2. Corrigir a frase incompleta em “Investimento, Imobiliário e Urbanismo”.
3. Reescrever a área de Direito Civil para a nova lógica definida.
4. Decidir se o fecho da página de áreas permanece como fecho institucional ou é absorvido para Direito Civil.
5. Consolidar definitivamente o `index.html` local segundo o novo tom já fechado.
6. Criar as páginas EN em `/en/`.

### Prioridade média

7. Criar as novas áreas: Família, Sucessões/Heranças, Administrativo, Contratação Pública, Penal/Crime e Notariado.
8. Rever coerência terminológica entre homepage e `areas.html`.
9. Verificar imagens da equipa.
10. Fazer ronda final de revisão de links PT/EN e navegação.

### Prioridade baixa / fecho final

11. Rever pormenores finais de estilo e uniformidade textual.
12. Confirmar publicabilidade do site no domínio final.
13. Rever legal pages com dados finais da sociedade, se necessário.

## 10. Critério editorial a preservar daqui para a frente

Para as próximas alterações, o critério consolidado do projeto deve manter:

- tom institucional, sóbrio e premium;
- credibilidade jurídica;
- linguagem clara, sem jargão excessivo;
- afastamento de linguagem demasiado comercial;
- ênfase em enquadramento, articulação e resposta ajustada;
- coerência entre homepage, áreas e restantes páginas institucionais;
- distinção clara entre áreas empresariais, civis, familiares, sucessórias, administrativas e penais.

## 11. Próximo passo recomendado

O passo mais eficiente, a partir do estado atual, é o seguinte:

1. fechar definitivamente `areas.html` em PT;
2. definir a lista final de áreas e respetiva arquitetura;
3. só depois replicar essa versão estabilizada para a pasta `en/`;
4. no fim, fazer revisão transversal de homepage + áreas em PT e EN.

---

README de estado elaborado com base no estado atual dos ficheiros do projeto e nas decisões editoriais já fechadas durante a revisão do site.
