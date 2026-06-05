# Decide o Date

Um app simples em HTML, CSS e JavaScript para ajudar a decidir o que fazer num date.

## O que o app faz

- Pede a cidade do date e consulta o clima com a API Open-Meteo.
- Pergunta se o casal prefere sair, ficar em casa ou deixar o app decidir.
- Se a escolha for sair, pergunta o tipo de lugar: restaurante, cafe, barzinho ou passeio.
- Se a escolha for sair, pergunta tambem se o date sera de manha, tarde ou noite.
- Se a escolha for ficar em casa, pergunta sobre comida e entretenimento.
- Ajuda a escolher entre gastar um pouco, economizar ou ficar no meio termo.
- Permite escolher comidas famosas como pizza, hamburguer, sushi, lanche, massa e doces.
- Deixa adicionar comidas personalizadas.
- Pergunta quais assinaturas o casal tem: Netflix, Prime Video, HBO Max, Disney+ e Globoplay.
- Pergunta se preferem filme, serie ou se o app pode decidir.
- Permite escolher generos favoritos.
- Recomenda um titulo especifico do catalogo interno.
- Tem botao "Ja assisti a esse filme ou serie" para trocar por outro titulo do mesmo estilo.
- Monta um date completo, decidindo uma comida, um lugar/atividade, um horario e dicas finais.

## Como abrir

Abra o arquivo `index.html` no navegador.

Se quiser rodar com servidor local:

```bash
python -m http.server 8124
```

Depois acesse:

```text
http://127.0.0.1:8124/
```

## Estrutura

```text
date-decider/
  index.html   Estrutura da pagina
  styles.css   Visual e responsividade
  app.js       Perguntas, clima, respostas e resultado
```

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- Open-Meteo Geocoding API
- Open-Meteo Forecast API
- Catalogo interno de filmes e series por streaming/genero

## Observacao sobre o clima

O app usa APIs publicas da Open-Meteo. Se estiver sem internet ou a API falhar,
ele continua funcionando e cria um plano mais flexivel.

## Observacao sobre streaming

O catalogo de filmes e series e interno e curado manualmente. Catalogos reais de
streaming mudam com frequencia e normalmente precisam de uma API de disponibilidade.
