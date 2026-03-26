# README — Revisão editorial e SEO das páginas de áreas

## Objetivo do trabalho

Está a ser feita uma revisão das páginas do site institucional da sociedade de advogados, com foco nas **páginas das áreas de atuação**.

O objetivo **não** é tornar o site mais “publicitário” nem mais “decorativo”. O objetivo é:

* reduzir redundância;
* diminuir o peso visual do texto;
* tornar cada página mais concreta;
* melhorar escaneabilidade;
* reforçar SEO on-page com linguagem mais próxima do que o utilizador realmente procura;
* manter um tom **sóbrio, institucional, técnico e contido**;
* evitar que o site fique visualmente pesado ou “ornamental”.

A expressão usada pelo utilizador para o risco a evitar foi: **“não convém isto começar a parecer um tapete de Arraiolos”**.

---

## Linha editorial definida

A linha seguida até agora foi esta:

### 1. Menos abstração institucional

Foram cortadas fórmulas demasiado genéricas, repetitivas ou meta-explicativas, por exemplo construções do género:

* “leitura integrada”
* “abordagem transversal”
* “enquadramento prudente”
* “articulação com diferentes áreas” quando isso não acrescenta nada de concreto
* parágrafos que explicam a própria página em vez de explicarem o problema jurídico

### 2. Mais ligação a problemas concretos

Cada página passou a ser escrita mais em torno de temas que um cliente reconhece logo, por exemplo:

* cessão de quotas
* despedimento
* partilhas
* responsabilidades parentais
* concursos públicos
* licenças
* interrogatório
* cobrança de créditos
* compra e venda de imóveis

### 3. Menos texto visualmente pesado

Mesmo quando o conteúdo estava juridicamente bom, muitas páginas tinham:

* parágrafos longos;
* demasiadas secções com o mesmo peso;
* caixas cinzentas visualmente pesadas;
* blocos seguidos que criavam “parede de texto”.

A solução passou por:

* encurtar introduções;
* usar menos secções;
* introduzir um bloco “**O que acompanhamos**” com grelha de tópicos curtos;
* deixar os restantes blocos mais claros e mais curtos.

### 4. SEO discreto, não agressivo

Não se procurou “copy de marketing”. Procurou-se apenas:

* títulos mais claros;
* meta descriptions úteis;
* termos que correspondem a pesquisas reais;
* melhor correspondência entre H1, conteúdo e intenção de pesquisa.

### 5. Tom a manter

O tom definido é:

* institucional;
* claro;
* tecnicamente seguro;
* não dramático;
* não emocional;
* não académico em excesso;
* não comercial agressivo.

---

## Ajustes de CSS já assumidos

Além do conteúdo HTML, foi definido que o CSS base também devia ser aligeirado, porque estava a contribuir para o peso visual do site.

### Alterações de princípio no CSS

Foram recomendadas estas mudanças:

* trocar `text-align: justify` por `text-align: left` em `.conteudo-pagina`;
* reduzir ligeiramente largura útil e densidade visual;
* diminuir peso e tamanho visual das secções;
* remover hover effects em texto corrido;
* suavizar as caixas de `.pagina-intro` e `.pagina-fecho`;
* acrescentar uma grelha reutilizável:

  * `.pagina-area-simples`
  * `.lista-topicos`
  * `.topico-item`

### Ideia visual

A lógica visual definida foi:

* manter o ADN do site;
* evitar excesso de elementos decorativos;
* usar estrutura e respiro em vez de “efeitos”;
* não transformar páginas jurídicas em landing pages comerciais.

---

## Ficheiros já reformulados

### 1. `areas.html`

Foi refeita como **página-hub**.

#### O que mudou

* nova introdução;
* melhor hierarquia;
* agrupamento das áreas por lógica de utilização;
* descrições mais concretas;
* melhor função SEO e de navegação interna;
* CTA final mais útil.

#### Lógica usada

A página passou a funcionar como porta de entrada para:

* residência / património / instalação em Portugal;
* empresas / atividade económica;
* pessoas / família / litígios.

---

### 2. `comercial-societario.html`

Foi revista para sair do registo demasiado genérico e institucional.

#### Direção adotada

Foco em:

* constituição de sociedades;
* cessão de quotas;
* entrada e saída de sócios;
* governação societária;
* contratos comerciais;
* reorganização societária.

#### Estrutura adotada

* introdução curta;
* bloco “O que acompanhamos” em grelha;
* blocos curtos sobre:

  * sociedades, sócios e governação;
  * contratos comerciais;
  * articulação com outras áreas.

#### Nota importante

Houve uma primeira versão ainda pesada visualmente. Depois foi feita uma **segunda versão mais curta**, que é a que deve ser considerada como referência.

---

### 3. `direito-civil.html`

Foi reformulada para evitar que a página ficasse demasiado ampla e difusa.

#### Direção adotada

Foco em:

* contratos;
* propriedade;
* arrendamento;
* condomínio;
* compra e venda;
* doações;
* responsabilidade civil.

#### Estrutura adotada

* intro curta;
* bloco “O que acompanhamos” com tópicos;
* três blocos principais:

  * contratos e relações patrimoniais;
  * propriedade, arrendamento e condomínio;
  * compra e venda, doações e responsabilidade civil.

---

### 4. `familia.html`

Foi reformulada para ter um tom sóbrio, claro e não excessivamente emocional.

#### Direção adotada

Foco em:

* divórcio;
* separação;
* responsabilidades parentais;
* alimentos;
* união de facto;
* questões patrimoniais ligadas à dissolução da relação.

#### Estrutura adotada

* intro curta;
* grelha de tópicos;
* blocos sobre:

  * divórcio e reorganização familiar;
  * responsabilidades parentais e alimentos;
  * união de facto e questões patrimoniais.

---

### 5. `sucessoes-herancas.html`

Foi reformulada para ficar mais concreta e menos vaga em torno de “planeamento patrimonial”.

#### Direção adotada

Foco em:

* testamentos;
* heranças;
* partilhas;
* habilitação de herdeiros;
* aceitação e repúdio da herança;
* planeamento sucessório.

#### Estrutura adotada

* intro curta;
* grelha de tópicos;
* blocos sobre:

  * testamentos e planeamento sucessório;
  * herdeiros, herança e partilhas;
  * aceitação, repúdio e regularização patrimonial.

---

### 6. `direito-administrativo.html`

Foi reformulada para evitar tom demasiado académico ou doutrinário.

#### Direção adotada

Foco em:

* procedimentos administrativos;
* licenças;
* autorizações;
* notificações;
* despachos;
* indeferimentos;
* contraordenações;
* relações com entidades públicas.

#### Estrutura adotada

* intro curta;
* grelha de tópicos;
* blocos sobre:

  * procedimentos e relações com entidades públicas;
  * licenças, autorizações e atos administrativos;
  * contraordenações e reação à atuação administrativa.

---

### 7. `contencioso-arbitragem.html`

Esta página teve uma evolução importante.

#### Primeira direção

Inicialmente a página estava mais centrada em:

* litígios judiciais;
* arbitragem;
* cobrança;
* conflitos patrimoniais e empresariais.

#### Depois houve ajuste de alcance

O utilizador alterou manualmente o bloco “O que acompanhamos”, introduzindo ideias úteis:

* mediação / acordos / litígios
* processos judiciais e arbitrais
* responsabilidade e incumprimento
* cobrança de créditos, penhoras e indemnizações
* conflitos patrimoniais, familiares, de condomínio, laborais e empresariais
* análise pré-contenciosa e estratégia processual

A partir daí, a página foi reenquadrada para mostrar melhor que o contencioso é a **vertente litigiosa de várias matérias**, sem “engolir” as outras áreas.

#### Ajustes conceptuais importantes

* evitar tom meta-explicativo;
* não escrever frases que expliquem a própria arquitetura do site;
* apresentar a área como resposta jurídica ao conflito, qualquer que seja a sua origem.

#### Estrutura final pretendida

* intro curta;
* grelha de tópicos;
* blocos sobre:

  * resolução de litígios e fase pré-contenciosa;
  * processos judiciais, arbitragem e execução;
  * conflitos patrimoniais, pessoais e empresariais.

#### Nota importante

Foi identificado um problema de tom numa frase demasiado explicativa:

> “Por isso, esta área deve ser lida como a vertente litigiosa...”

Essa formulação foi rejeitada. O critério é: **não explicar a página; explicar a realidade jurídica do problema**.

---

### 8. `direito-trabalho.html`

Foi reformulada para sair do tom demasiado “manualístico”.

#### Direção adotada

Foco em:

* contratos de trabalho;
* admissão;
* deveres laborais;
* vicissitudes do vínculo;
* procedimentos disciplinares;
* despedimento;
* cessação do contrato;
* conflitos laborais.

#### Estrutura adotada

* intro curta;
* grelha de tópicos;
* blocos sobre:

  * contratação e organização da relação laboral;
  * execução do vínculo, deveres e vicissitudes;
  * procedimentos disciplinares e cessação do contrato.

---

### 9. `contratacao-publica.html`

Foi reformulada para ficar menos abstrata e mais ligada à prática procedimental.

#### Direção adotada

Foco em:

* concursos públicos;
* peças do procedimento;
* caderno de encargos;
* participação de operadores económicos;
* exclusões;
* adjudicação;
* execução de contratos públicos;
* contencioso pré-contratual.

#### Estrutura adotada

* intro curta;
* grelha de tópicos;
* blocos sobre:

  * procedimentos pré-contratuais e participação;
  * adjudicação, exclusões e reação procedimental;
  * execução de contratos públicos.

---

### 10. `direito-penal.html`

Foi reformulada com preocupação especial de tom.

#### Direção adotada

Evitar:

* dramatização;
* sensacionalismo;
* tom demasiado emocional;
* tecnicismo processual excessivo.

#### Foco adotado

* queixas;
* denúncias;
* constituição como arguido;
* interrogatório;
* medidas de coação;
* inquérito;
* instrução;
* julgamento;
* defesa penal;
* assistência ao ofendido.

#### Estrutura adotada

* intro curta;
* grelha de tópicos;
* blocos sobre:

  * fase inicial e definição de posição;
  * inquérito, instrução e julgamento;
  * defesa penal e assistência ao ofendido.

---

## Ficheiros ainda por rever ou por fechar com o mesmo critério

Os ficheiros que ainda devem ser revistos ou retomados com esta mesma lógica são, pelo menos:

* `imobiliario-investimento.html`
  já houve proposta, mas o utilizador não quis seguir para aí nesse momento; convém rever com o mesmo critério geral;

* `solicitadoria-atos-notariais.html`

Podem ainda justificar revisão de consistência geral:

* `residencia-em-portugal.html`
* `visto-d2-portugal.html`
* `visto-d7-portugal.html`
* `visto-gold-portugal.html`
* `reagrupamento-familiar-portugal.html`

Estas páginas estavam globalmente melhores de origem, mas podem beneficiar de afinação de coerência visual e editorial com as restantes.

---

## Regras práticas para continuar

Qualquer novo ambiente que pegue nisto deve respeitar estas regras:

### Regra 1

Não voltar atrás para texto mais longo, mais abstracto ou mais “institucional por defeito”.

### Regra 2

Cada página deve responder a esta pergunta:
**“Que tipo de problema jurídico concreto é que o visitante reconhece aqui?”**

### Regra 3

Em regra, cada página de área deve ter:

* subtítulo / hero curto;
* intro curta;
* bloco “O que acompanhamos” com grelha;
* 3 blocos principais curtos;
* articulação com outras áreas;
* fecho curto.

### Regra 4

Evitar frases meta-explicativas, por exemplo:

* “esta área deve ser lida como...”
* “esta página pretende abranger...”
* “a presente área reflete a articulação...”

### Regra 5

Evitar excesso de secções.
Mais secções não significa mais clareza.

### Regra 6

Evitar listas demasiado técnicas ou demasiado processuais se isso empobrecer a leitura institucional.
Exemplo: “penhoras” pode às vezes ser útil, mas pode ser melhor substituído por “execução”.

### Regra 7

O SEO deve ser discreto:

* usar termos reais;
* não repetir keywords artificialmente;
* não transformar páginas jurídicas em páginas de marketing.

### Regra 8

O tom deve continuar:

* sóbrio;
* fiável;
* contido;
* claro;
* sem floreado;
* sem “vender demais”.

---

## Fórmula base recomendada para os próximos ficheiros

Uma boa fórmula de trabalho para os próximos ficheiros é:

### Hero

* H1 claro
* subtítulo curto e específico

### Intro

2 parágrafos curtos:

* o que a área cobre;
* quando é especialmente relevante

### Bloco “O que acompanhamos”

Grelha de 6 tópicos curtos, concretos e reconhecíveis

### Blocos de desenvolvimento

3 blocos curtos:

* cada um com um subtítulo funcional;
* cada um com 2 parágrafos curtos;
* sem repetir a intro;
* sem prosa autoexplicativa

### Articulação com outras áreas

1 parágrafo curto apenas

### Fecho

1 parágrafo curto + CTA

---

## Resumo final

O trabalho já feito redefiniu uma **linha editorial estável** para o site:

* menos densidade visual;
* menos redundância;
* mais clareza temática;
* mais aproximação a problemas reais;
* SEO mais natural;
* manutenção do tom institucional.

O princípio central é este:

**não simplificar em excesso, não decorar, não vender demasiado — mas tornar as páginas juridicamente sérias e editorialmente mais úteis.**
