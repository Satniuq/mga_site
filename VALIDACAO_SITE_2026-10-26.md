# Validação da nova versão do site MGA

## Implementação

- 52 páginas, com a mesma estrutura e navegação em português e inglês.
- URLs anteriores preservadas; acrescentadas as páginas EN de Direito Público e Direito dos Estrangeiros.
- Textos revistos nas duas línguas e reorganizados a partir das notas e do documento do Dr. JSM.
- Seis áreas de destaque na ordem pedida, com relevo para Direito Público e recuperação de crédito.
- Equipa com as mesmas 12 pessoas nos dois idiomas, áreas visíveis, contactos diretos e iniciais em substituição das imagens de amostra.
- Pesquisa local, filtros de áreas e pessoas, menu por botão, navegação por teclado, índice de página e encaminhamento do assunto para o formulário.
- Formulário com validação, estados de envio e erro, proteção contra envios duplicados e alternativa por telefone/email.
- Mapa carregado apenas a pedido; imagens, ícones e tipos de letra locais.
- Canonical própria, hreflang recíproco, dados estruturados e sitemap com os 52 endereços.
- Imagem principal otimizada de 2,17 MB para 117 KB na maior versão WebP; versões de 77 KB e 37 KB para dimensões inferiores.

## Verificações realizadas

- Geração das 52 páginas e verificação de sintaxe JavaScript.
- Quatro testes automáticos de conteúdo bilingue, referências, ordem dos destaques, composição da equipa e preservação de URLs.
- Verificação automática das 52 páginas: estrutura de tags, IDs, H1, títulos, descrições, JSON, imagens, referências locais, âncoras, caminhos, idiomas, sitemap e recursos CSS.
- Inspeção DOM no navegador das 52 páginas a 1440 × 900 e a 390 × 720: sem transbordo horizontal, títulos por baixo do cabeçalho ou falhas de ativação do JavaScript.
- Verificação adicional de 11 páginas a 320 × 568 e oito páginas a 768 × 1024, sem transbordo horizontal.
- Inspeção visual da homepage PT/EN, equipa, página de recuperação de crédito e contactos.
- Menu de áreas em desktop; menu e submenu móveis; fecho por Escape e retorno do foco.
- Pesquisa por «credito», sem acento, com resultados da área e dos profissionais.
- Filtro de apoio administrativo com dois resultados; pesquisa de áreas sem correspondência com estado vazio.
- Assunto pré-selecionado no formulário a partir da área, em PT e EN.
- Tentativa de envio com campos vazios bloqueada pela validação nativa, com foco no primeiro campo obrigatório. Não foi efetuado um envio real.
- Ausência de iframe de mapa antes do pedido; mapa Google carregado após o botão, com título acessível.
- Sem erros de JavaScript nos registos consultados.

Estes controlos não constituem um teste manual exaustivo de todas as combinações de navegador, leitor de ecrã e dispositivo, nem uma medição Lighthouse.

## Fecho operacional

Antes da publicação pela sociedade, confirmar a receção de uma mensagem de teste na conta Formspree existente, os dados institucionais completos e o código postal. Confirmar também a composição atual da equipa e as áreas atribuídas. Os contributos adicionais dos departamentos continuam por receber.

O NIPC não foi acrescentado ao site a partir de fontes secundárias sem confirmação. Não foram inventados números de registo, qualificações, retratos, avaliações ou clientes. Os textos em inglês foram revistos editorialmente no projeto, sem certificação externa.

Não foram alterados o alojamento, o domínio ou as contas externas. Não foi feito commit, push ou publicação nesta implementação.

Pré-visualização local: `http://127.0.0.1:8018/`.
