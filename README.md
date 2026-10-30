# Site MGA

Site institucional bilingue, com páginas HTML estáticas e JavaScript progressivo. Não precisa de instalar pacotes para gerar ou servir as páginas.

## Edição

- `src/site-data.mjs`: conteúdos PT/EN, profissionais, áreas, contactos e correspondência de URLs.
- `src/practice-topics.mjs`: vinte subpáginas temáticas PT/EN, respetivas áreas principais e fontes oficiais.
- `scripts/build-site.mjs`: estrutura comum, páginas institucionais, SEO, sitemap e índices de pesquisa.
- `css/site.css`: sistema visual e responsive.
- `js/site.js`: navegação, pesquisa, filtros, formulário e mapa a pedido.

As páginas HTML da raiz e de `en/` são geradas e ficam no repositório para permitir alojamento estático. As URLs públicas anteriores foram preservadas. As versões inglesas de Direito Público e Direito dos Estrangeiros foram acrescentadas.

```powershell
npm run build
npm test
npm run check
npm run dev
```

A pré-visualização fica em `http://127.0.0.1:8018`. O servidor é local e desativa a cache para mostrar as alterações imediatamente. Não é um servidor de produção.

## Critério editorial e associações

Nos nomes das áreas apresentados em títulos, menus, filtros, perfis e opções do formulário, usar maiúsculas: "Direito Civil", "Direito da Família" e "Direito Público". No texto corrido e nas descrições SEO, usar minúsculas: "direito civil", "direito da família" e "direito público", salvo no início de frase. O uso genérico de "direito" e o plural "direitos" seguem as regras normais da frase.

Cada área deve apresentar pelo menos dois advogados, com associações correspondentes nos perfis. As subpáginas usam `parentPractice` e a mesma equipa da área principal; o perfil lista a área principal para não repetir cada tema. As cinco páginas de residência e vistos mantêm a associação a Direito dos Estrangeiros.

As primeiras dez subpáginas acrescentadas em 30 de outubro de 2026 cobrem impugnação administrativa, preparação de propostas, exclusão e adjudicação, cobrança e injunção, gestão de carteiras, constituição de sociedades, compra e venda de imóveis, divórcio, partilhas hereditárias e autenticação documental.

A segunda série acrescenta responsabilidades parentais e alimentos, contratos de trabalho, despedimento e cessação, defesa do arguido e interrogatório, responsabilidade civil e indemnizações, execuções e penhoras, entrada e saída de sócios e cessão de quotas, arrendamento, procurações e execução de sentenças administrativas. Todos os vinte temas estão disponíveis em PT e EN, em "Temas nesta área", com regresso e breadcrumbs, sem entradas próprias na topbar ou na grelha de áreas. O site passa a ter 92 páginas, com pesquisa, contactos por assunto e sitemap atualizados.

Os textos novos usam linguagem informativa, não prometem resultados e não fixam prazos ou custos universais. Foram consultadas fontes oficiais do Diário da República, Portal BASE, Portal dos Tribunais, Justiça.gov.pt e IRN, ligadas nas páginas quando aplicável. A página de gestão de carteiras descreve a organização do serviço a partir das notas da sociedade. A conferência editorial e das fontes não substitui a aprovação final dos advogados responsáveis.

## Publicação

Publicar as páginas HTML, `en/`, `css/site.css`, `js/site.js`, `js/search-pt.json`, `js/search-en.json`, `img/`, `assets/`, `favicon.ico`, `robots.txt` e `sitemap.xml` num alojamento estático com HTTPS. Não é necessário publicar `src/`, `scripts/`, `tests/` ou os documentos internos de auditoria.

O domínio canónico está definido em `firm.url` e deve corresponder ao domínio de produção. O CSS e o JavaScript usam versões baseadas no conteúdo. As páginas incluem canonical própria, pares PT/EN recíprocos e dados estruturados sem avaliações ou qualificações inventadas.

## Formulário e serviços externos

O endpoint Formspree existente foi mantido. O formulário tem validação nativa, prevenção de envios duplicados, estados de envio, sucesso, erro, indisponibilidade de rede e limite de pedidos. Um envio real para confirmar o destinatário deve ser feito pela sociedade antes da publicação. Os testes locais não provam entrega na caixa de correio.

O mapa Google só é carregado a pedido. Ícones e imagens são locais. Não foram adicionadas ferramentas de publicidade ou analytics. Search Console e perfil de empresa são configurações externas, a verificar com os respetivos acessos.

## Conteúdo e validação da sociedade

Os textos foram alinhados com as notas e o documento do Dr. José da Silva Miguel. Os contributos adicionais dos departamentos ainda não foram recebidos. Antes da publicação, confirmar a composição da equipa, as associações entre profissionais e áreas, o código postal e a identificação institucional completa, incluindo NIPC e número de registo quando aplicável. Não se inventaram estes elementos nem fotografias de pessoas.

Usam-se iniciais nos perfis até existirem retratos profissionais. A revisão editorial e linguística feita no projeto não é uma certificação externa ou uma aprovação dos departamentos.

Referências consultadas na revisão: [Google Search Central](https://developers.google.com/search/docs/specialty/international/localized-versions), [parecer da OA sobre publicidade de 31 de outubro de 2024](https://portal.oa.pt/media/144822/processo-24_pp_2024-g-publicidade-ap-em-31-10-2024.pdf), [informação ARI da AIMA](https://aima.gov.pt/en/viver/autorizacao-de-residencia-para-investimento-art-90-o-a) e [documentação Formspree](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax).

Os antigos `css/estilos.css`, `js/script.js` e README de março foram preservados como material anterior. Não são utilizados pelas páginas atuais. O diagnóstico de 26 de outubro descreve o estado anterior à implementação desta versão.
