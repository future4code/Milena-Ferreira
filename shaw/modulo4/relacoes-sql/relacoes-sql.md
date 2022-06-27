# Relações SQL

## Exercício 1
- a) A chave estrangeira relaciona a linha daquela tabela a uma linha de outra tabela, referenciando a chave primária desta.

- b)
```sql
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie (id)
);

INSERT INTO Rating VALUES
("001", "Muito bom", 8, "001"),
("002", "Médio", 5, "002"),
("003", "Assisti com a família, adorei", 7.5, "001");
```

- c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-milena-lara`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
Não é possível adicionar porque não existe nenhuma linha com PK com o valor.

- d)

```sql
ALTER TABLE Movie DROP COLUMN rating;
```

- e)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`shaw-milena-lara`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
O SQL só permite que sejam apagadas linhas que não foram referenciadas por FK. Para apagar o filme, primeiro é preciso apagar o registro dele na outra tabela onde a referência foi feita.

## Exercício 2
- a) A tabela relaciona filmes e atores, ligando-os por seus ids, referenciados através de FK.
- b)
```sql
INSERT INTO MovieCast VALUES
("001", "001"),
("002", "001"),
("001", "008"),
("002", "008"),
("002", "005"),
("002", "005");
```

- c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-milena-lara`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Não é possível criar a linha porque o valor passado de id não existe na tabela onde é feita a referência.

- d)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`shaw-milena-lara`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
O SQL só permite que sejam apagadas linhas que não foram referenciadas por FK. Para apagar o filme, primeiro é preciso apagar o registro dele na outra tabela onde a referência foi feita.

## Exercício 3
- a)
- b)

```sql
```