### Exercício 1

a) Round: quantidade de vezes que o hash será executado.
Salt: valor aletório usado antes da criação do hash.

###Exercício 2

a) O cadastro, porque ele é o primeiro a ser executado.

###Exercício 3

a) 
```
ALTER TABLE introducao_autenticacao_Users
ADD COLUMN role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL";
```