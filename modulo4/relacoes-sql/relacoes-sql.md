### Exercício 1

a)

b)
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("1", "Foi um filme ok.", 6, "001"),
("2", "Legal", 5.0, "002"),
("3", "Muito engraçado", 7, "003"),
("4", "Perfeito", 9.5, "004"),
("5", "Perdi meu tempo", 1, "005"),
("6", "Sempre assisto, um clássico", 10, "006");


```

c) Não pode atualizar uma linha filha, devido a restrição de chave estrangeira.

```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("113", "Muito Bom", 9, "007");```


```
d)

```
ALTER TABLE Movies
DROP COLUMN rating;

```

### Exercício 2

a) É uma junção de tabelas, faz referência de um filme com um ator.

b)
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("001","001"), ("001","002"),
("002","003"), ("002","005"),
("003","001"), ("003","004"),
("004","007"), ("004","006"),
("005","005"), ("005","002"),
("006","003"), ("006","007"),
("007","004"), ("007","006");


```

c) Não pode ser adicionado o id na chave estrangeira (foreign key), filme não encontrado.

```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("009","001");
```

d)

```
DELETE FROM Actor
WHERE id = "005";

```


###Exercício 3

a) Retorna os dados presentes nas duas tabelas. Operador ON, faz referência do id e o Rating junta essas informações.

b)

```
SELECT title, movie_id, rate
FROM Movies
JOIN Rating
ON Movies.id = Rating.movie_id;

```