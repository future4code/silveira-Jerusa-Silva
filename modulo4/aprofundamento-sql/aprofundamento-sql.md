
### Exercício  1

a)Deleta a coluna salary da tabela Actor

b) Altera o nome da tabela Actor para sex, com limite de 6 caracteres.

c) Altera de 6 para 255 caracteres.

d)

> ALTER TABLE Actor
> CHANGE gender gender VARCHAR(100);

### Exercício 2

a)

>UPDATE Actor
>SET name = "Moacyr Franco",
>birth_date = "2000-12-01",
>WHERE id = "003";

b)
>UPDATE Actor
>SET name = UPPER(name)
>WHERE name = "Juliana Paes";

>UPDATE Actor
>SET name = "Juliana Paes"
>WHERE name = "JULIANA PAES";

c)
UPDATE Actor
SET name = "Jim Parsons", salary = "300000", birth_date = "1973-03-24", gender = "male"
WHERE id = "005";

d) Coloquei um dado que não existe e foi retornou o erro que a coluna é desconhecida.

###Exercício 3

a)
>DELETE FROM Actor
>WHERE name = "Fernanda Montenegro";

b)
>DELETE FROM Actor
>WHERE gender = "male" AND salary > 1000000;

###Exercício 4

a)

>SELECT MAX(salary)
>FROM Actor;

b)

>SELECT MIN(salary)
>FROM Actor
>WHERE gender = "female";

c)

>SELECT COUNT(*)
>FROM Actor
>WHERE gender = "female";

d)

>SELECT SUM(salary)
>FROM Actor;

### Exercício 5

a) Devolve a quantidade de atores divididos por gender, quantidade de dois grupos
um masculino e outro feminino.

b)

>SELECT id, name
>FROM Actor
>ORDER BY name DESC;

c)

>SELECT * FROM Actor
>ORDER BY salary ASC;

d)

>SELECT * FROM Actor
>ORDER BY salary DESC
>LIMIT 3;

e)

>SELECT AVG(salary), gender
>FROM Actor
>GROUP BY gender;

###Exercício 6

a) 

>ALTER TABLE Movies
>ADD playing_limit_date DATE;

b)
>ALTER TABLE Movies
>CHANGE rating rating FLOAT;

c)
>UPDATE Movies
>SET playing_limit_date = "2021-10-01"
>WHERE id = "002";

>UPDATE Movies
>SET playing_limit_date = "2022-01-01"
>WHERE id = "004";

d) Não apresentou mensagem de erro.




