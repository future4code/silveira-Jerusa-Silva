
###Exercício 1:
a) Sim, dessa forma podemos incluir outros caracteres.

###Exercício 2:
a) Recebeu os parâmetros: id, email e password dentro da função. 

b)

```
CREATE TABLE introducao_autenticacao_Users (
	id VARCHAR(255) PRIMARY KEY,
         email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL
);

```

###Exercício 3:
a) É o valor recebido no process.env.JWT_KEY. Sua utilização é necesária porque undefined também pode ser um valor.

###Exercício 7:
a) O valor do payload será de qualquer tipo.