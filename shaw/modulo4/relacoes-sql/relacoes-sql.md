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
- a)
- b)
- c)
- d)

```sql
```

## Exercício 3
- a)
- b)

```sql
```