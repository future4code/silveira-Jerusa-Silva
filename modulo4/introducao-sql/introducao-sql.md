### Exercício 1

 
a) NOT NULL Campo obrigatório, não pode estar vazio. VARCHAR(255) Pode ter até 255 caracteres.  PRIMARY KEY identificador único de cada item. DATE representa data. 
b) DATABASE: Recebi como resultado o banco de dados criado pela Labenu. SHOW TABLES: como resultado obtive a tabela Actor, que utilizei para esta atividade.
c) Utilizando o comando DESCRIBE é possível visualizar todos os dados de uma coluna que estão na tabela.



### Exercício 2


a)
>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES(
>  "002", 
>  "Glória Pires",
>  1200000,
>  "1963-08-23", 
>  "female"
>);

b) Foi utilizado PRIMARY KEY, logo, valor é único e não pode duplicar.
c) A contagem de colunas não correspode a contagem de valores na linha 1.
Para a correção desse erro, é necessário adicionar as propriedades que estão faltando na linha 1.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");

d)O erro diz que a propriedade 'name' não tem um valor padrão. Não foi definido nenhum valor padrão para esse coluna quando criamos essa tabela, por isso, ocorreu o erro. 
Para a correção, é necessário adicionar um valor para a propriedade 'name'.

>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES ("004", "Antônio Fagundes", 400000, "1949-04-18", "male");

e)Valor da data incorreto foi adicionado. Ocorreu porque não foram colocadas aspas duplas no valor da data.
 Para crreção devemos adicionar aspas em volta do valor da data.

>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");



### Exercício 3


a)
>SELECT * FROM Actor
>WHERE gender = "female";

b)

>SELECT salary FROM Actor
>WHERE name = "Tony Ramos";

c) Todos os valores nulos.

d)
>SELECT id, name, salary from Actor
>WHERE salary < 500000;

e)Coluna 'nome' é desconhecida nesta tabela. Como o nome está escrito errado, não foi reconhecida a coluna.Só é necessário escrever o nome certo no comando para que funcione.



###Exercício 4



a) Seleciona tudo sobre o ator, depois filtra as pessoas que iniciam com A e J e que tenha o salario maior que 300000.

b)

>SELECT * from Actor
>WHERE name NOT LIKE "A%" AND salary > 350000;

c)

>SELECT * from Actor
>WHERE name LIKE "%G%";

d)

>SELECT * from Actor
>WHERE (name LIKE "%A%" OR "%G%") AND (salary > 350000 AND salary < 900000);




###Exercício 5



a)VARCHAR e PRIMARY KEY para essa coluna receber strings e não receber valores duplicados.
NOT NULL para poder receber strings e não ficar sem valor.
Sinopse, TEXT e NOT NULL para receber strings com mais caracteres
Lançamento, DATE e NOT NULL para receber strings de datas e não ficar sem valor.
Avaliação,TINYINT para essa coluna receber um número inteiro de 0 a 10.


>CREATE TABLE Movies (
>	id VARCHAR(255) PRIMARY KEY,
>    name VARCHAR(255) NOT NULL,
>    synopsis TEXT NOT NULL,
>    release_date DATE NOT NULL,
>    rating TINYINT
>);


b)

>INSERT INTO Movies (id, name, synopsis, release_date, rating)
>VALUES ("001", 
>	"Se Eu Fosse Você", 
>	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
>	"2006-01-06",
>	7
>);

c)

>INSERT INTO Movies (id, name, synopsis, release_date, rating)
>VALUES ("002", 
>	"Doce de mãe",
>	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
>    "2012-12-27",
>    10
>);

d)

>INSERT INTO Movies (id, name, synopsis, release_date, rating)
>VALUES ("003",
>	"Dona Flor e Seus Dois Maridos",
>    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
>    "2017-11-02",
>    8
>);


e) 

>   INSERT INTO Movies (id, name, synopsis, release_date, rating)
>VALUES ("004",
>	"Bacurau",
>    "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa",
>    "2019-08-23",
>    10
>);



###Exercício 6



a)

>SELECT id, name, rating FROM Movies
>WHERE id = "002";

b)

>SELECT * FROM Movies
>WHERE name = "Bacurau";

c)

>SELECT id, name, synopsis FROM Movies
>WHERE rating > 7;




###Exercício 7



a)

>SELECT * FROM Movies
>WHERE name LIKE "%vida%";

b)

>SELECT * FROM Movies
>WHERE name LIKE "%mãe%" OR synopsis LIKE "%pequeno%";

c)

>SELECT * FROM Movies
>WHERE release_date < "2022-06-06";

d)

>SELECT * FROM Movies
>WHERE release_date < "2022-05-04" AND (name LIKE "%pequeno%" OR synopsis LIKE "%pequeno%") AND rating > 7






