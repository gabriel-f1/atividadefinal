ALUNO: GABRIEL FONTOURA MELO    N°6     2°B
ATIVIDADE - PROGRAMAÇÃO FRONT-END

-> Neste arquivo, será explicado o que acontece em cada linha de código do arquivo JavaScript. Cada número representa a sua linha respectiva.

1. O JavaScript procura no documento HTML um elemento que tenha o ID "formularioemails" e então adiciona um evento "ouvinte" que executa uma ação quando o formulário for enviado. (a função será explicada nas próximas linhas)
2. Técnica utilizada para prevenir o comportamento padrão do formulário (impede a página de recarregar quando enviar o formulário).
3. Pega o valor inserido no campo de texto com o ID "nome" e o armazena na variável "nome".
4. Pega o valor inserido no campo de texto com o ID "email" e o armazena na variável email.
5. Acessa o primeiro elemento <tbody> da tabela com o ID "cadastrados", utilizando a mesma lógica da linha 1. (getElementbyID)
6. Insere uma nova linha na tabela. (auto explicativo)
7. Cria uma nova célula na primeira coluna da nova linha. (Armazena o nome do usuário)
8. Cria uma nova célula na segunda coluna da nova linha. (Armazena o e-mail do usuário) (As novas células são criadas nas colunas nas linhas 7 e 8 para armazenar os dados do nome e do e-mail que o usuário inseriu no formulário. Cada linha da tabela precisa de células (colunas) para exibir essas informações.)
9. Define o conteúdo de texto da célula "Nome" como o valor da variável nome.
10.  Define o conteúdo de texto da célula "Email" como o valor da variável email.
11. Adiciona a classe "centralizado" à célula de nome, centralizando o texto.
12.  Adiciona a classe "centralizado" à célula de e-mail, centralizando o texto.
13. Limpa o campo de entrada "nome" após o cadastro.
14. Limpa o campo de entrada "email" após o cadastro.
15. Função fecha. Fim do código.


Referências Bibliográficas: 

W3SCHOOLS. W3Schools Online Web Tutorials. Disponível em: https://www.w3schools.com. Acesso em: 20 out. 2024.

(*HTML DOM*)