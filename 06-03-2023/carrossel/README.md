# treinamento.js
Treinamento javascript

>Carrossel

Em tecnologia, um carrossel é uma sequência de imagens num site que pode mudar conforme o usuário aperta os botões para a direita (>) ou para a esquerda (<), como na imagem abaixo:



No time de development que você está trabalhando, você ficou responsável por programar este carrossel, que, neste caso, não passa automaticamente. Ou seja, a imagem só muda se o usuário clicar nos botões para a direita (>) ou para a esquerda (<).

Cada imagem é um item de um array. O carrossel de vocês tem 7 imagens, o que significa que elas ficam guardadas nos índices de 0 a 6 de um array.

Você deve calcular qual é o índice da imagem que deve ser exibida a depender da quantidade de cliques que foram dados nos botões da direita ou da esquerda.

Naturalmente, cada clique no botão da direita avança uma imagem, enquanto cada clique no da esquerda volta uma imagem.

Caso o usuário esteja na última imagem e clique na direita, ele volta para a primeira.

Caso o usuário esteja na primeira imagem e clique na esquerda, ele volta para a última.

A sequência de cliques feitos pelo usuário é uma informação que lhe é passada através de uma string que pode conter apenas os caracteres >e <.

Por exemplo, o string >>><>indica que o usuário apertou 3 vezes para a direita, depois uma vez para a esquerda, depois mais uma vez para a direita. Como o carrossel sempre começa na imagem primeira imagem, que é a de índice 0, isso significa que ele foi do índice 0 até o índice 3, voltou para o 2 e foi novamente para o 3. Por isso, neste exemplo o seu programa deveria imprimir o número 3 na tela.

Formato de entrada

#A entrada será sempre uma única variável sequenciaque guarda sempre uma sequência de caracteres >ou <

Formato de saída

A saída deve ser sempre um número inteiro positivo entre 0 e 6 que indica o índice da imagem que será exibido na tela após o usuário fazer todos os cliques apresentados na sequência.

#Exemplo de Entrada 0

">>><>"

#Saída de amostra 0

3

Exemplo de entrada 1

">"

Saída de amostra 1

1

Exemplo de entrada 2

"<"

Saída de amostra 2

6

Exemplo de entrada 3

">>>>>>>>>"

Saída de amostra 3

2