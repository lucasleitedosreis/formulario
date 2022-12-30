# fernandev

- CHALLENGE progresso do formulário

- INSTRUÇÕES
  Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
  juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.

* Crie também validações para cada campo conforme instruções abaixo.

- BARRA DE PROGRESSO
  Para aproveitar estilização já definida, crie:

* a barra com um elemento pai chamado .bar-container e seu filho .bar

- CAMPOS DO FORMULÁRIO:
  input - nome completo - válido se digitar no mínimo dois nomes,
  input - email - válido se digitar um e-mail,
  select - estado civil,
  radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

- FUNCIONAMENTO
  Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
  o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
  o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
\*/

## React Interview Challenge #03

E aí dev, tudo bem? Trouxe pra você mais um desafio de entrevista para que você possa treinar em casa e aprimorar suas habilidades.

Dessa vez temos um formulário que deve alterar uma barra de progresso conforme seus campos vão sendo digitados pelo usuário. Muitos conceitos usados nesse desafio!

Preste bem atenção às instruções dentro do arquivo App.jsx e bora codar!

**Se você curtir esse conteúdo, deixa uma STAR aí nesse repo, porque isso me motiva a trazer mais conteúdos desse gênero.**

## Resolução do desafio

https://youtu.be/ngcH4e2RTUM
