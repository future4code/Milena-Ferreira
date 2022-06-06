# Exercício 1

**a. Explique o que é uma chave estrangeira**
É uma coluna extra que colocamos em uma tabela para que ela possa referenciar a chave primária de outra tabela, tornando assim os itens correlacionados.

**b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes**

```sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

SELECT * FROM Rating;

INSERT INTO Rating
VALUES
	('001', 'Adorei o filme', 9, '004'),
    ('002', 'Meu filme favorito', 10, '1638727789372'),
	('003', 'Podre, pior filme que já vi', 0, '005'),
    ('004', 'É engraçadinho, dá pra passar a tarde', 6, '002');
```

**c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.**

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-milena-lara`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

Ele não permite que a entrada seja criada porque a movie_id precisa existir na tabela à qual ela faz referência.

**d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.**

```sql
ALTER TABLE Movie DROP COLUMN rating;
```

**e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.**


```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-milena-lara`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

Não é possível apagar esse dado porque ele está vinculado a outro dado de outra tabela. É preciso deletar o dado na outra tabela (Rating) primeiro para depois apagar na tabela Movie.


# Exercício 2

**a. Explique, com as suas palavras, essa tabela**
É uma tabela que tem apenas chaves estrangeiras, referenciando elementos de outras duas tabelas. Ela faz o link entre a tabela de atores e a de filmes. Assim, um ator pode ser vinculado a mais de uma filme e vice-versa.


**b. Crie, ao menos, 6 relações nessa tabela**

```sql
INSERT INTO MovieCast (movie_id, actor_id)
	VALUES
		('001', '001'), 
		('001', '002'),
		('002', '001'),
		('002', '003'),
		('003', '005'),
		('004', '005'),
		('004', '004');
```

**c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query**

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-milena-lara`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```

Foi inserido um valor como foreign key que não existe como primary key na tabela a qual ela faz referência. Toda FK precisa ser uma PK que existe.


**d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query**

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-milena-lara`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Esse dado não pode ser deletado porque ele é utilizado em outra tabela, ou seja, outra tabela faz referência a ele como foreign key.

# Exercício 3

```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

**a. Explique, com suas palavras, a query acima. O que é o operador `ON`?**

Essa query mostra  todos os campos das duas tabelas (`Movie` e `Rating`).
O operador `ON` é para indicar que a foreign key `movie_id` da tabela `Rating` é o mesmo campo que a primary key `id` na tabela `Movie`.

**b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.**

```sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT 
    Movie.id AS movie_id, title, rate
FROM
    Movie
        INNER JOIN
    Rating ON Rating.movie_id = Movie.id;
```


# Exercício 4

**a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário**

```sql
SELECT
	m.id as movie_id,
	m.title,
	r.rate as rating,
    r.comment
FROM
	Movie m
		LEFT JOIN
	Rating r ON r.movie_id = m.id;
```

**b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator**

```sql
SELECT
	m.id as "Movie ID",
	m.title "Movie Title",
  mc.actor_id as "Actor ID"
FROM
	Movie m
		RIGHT JOIN
	MovieCast mc ON mc.movie_id = m.id;
```

**c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)**

```sql
SELECT
	m.id as "Movie ID",
	m.title as "Movie title",
    AVG(r.rate) as "Avaliação média"
FROM
	Movie m
		LEFT JOIN
	Rating r ON r.movie_id = m.id
GROUP BY m.id;
```

# Exercício 5

**a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?**'

As tabelas de `Actor` e `Movie` não estão relacionadas entre si, mas cada uma delas está relacionada à tabela MovieCast. Assim, para juntar as informações de `Actor` e `Movie`, é preciso fazer o `JOIN` das duas com a tabela em comum entre elas, `MovieCast`.

**b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query**'

```sql
SELECT 
    m.id as "Movie ID",
	m.title as "Movie Title",
    a.id as "Actor ID",
    a.name as "Actor name"
FROM
    Movie m
        LEFT JOIN
    MovieCast mc ON m.id = mc.movie_id
        JOIN
    Actor a ON a.id = mc.actor_id;
```

**c. A query abaixo *deveria* ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.**'
   
```sql
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

ERRO: `Error Code: 1054. Unknown column 'm' in 'field list'`

Houve um erro de digitação, onde deveria estar escrito `m.title`, está escrito `m,title`. Assim, em vez de o MySQL interpretar que se trata do campo `title` da tabela Movie, ele entende que são dois campos separados: `m` e `title`, e não existe o campo `m` em nenhuma das tabelas.
    
**d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)**

```sql
SELECT
	m.id as movie_id,
    m.title as movie_title,
    a.id as actor_id,
    a.name as actor_name,
    r.rate as movie_rating,
    r.comment
FROM
	Movie m 
		LEFT JOIN
	Rating r ON r.movie_id = m.id
		JOIN
    MovieCast mc ON mc.movie_id = m.id
		JOIN
	Actor a ON mc.actor_id = a.id;
```

# Exercício 6

*a. Que tipo de relação é essa?*

*b. Explicite a query que você usou para criar a tabela*

*c. Crie ao menos 2 óscar para cada um dos filmes* 

*d. Faça uma query que retorne todos os filmes e seus respectivos óscar*