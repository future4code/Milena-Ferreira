# Exercício 1

- a) deleta a coluna 'salary' da tabela Actor
- b) muda o nome da coluna 'gender' para 'sex' e o tipo dela para string de 6 caracteres
- c) muda o tipo da coluna 'gender' para string de 255 caracteres.
- d)

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

# Exercício 2
- a)
```sql
UPDATE Actor SET name = "Fernanda Torres", birth_date = "1976-12-25" WHERE id = "003";
```
- b)
```sql
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
```

- c)
```sql
UPDATE Actor
SET
	name = "Larissa Manoela",
	salary = 60000,
    birth_date = "2002-05-23",
    gender = "female"
WHERE id = "005";
```

- d) 

```sql
UPDATE Actor SET name = "Tom Hanks" WHERE id = "100";
```
Não houve mensagem de erro, a query foi executada como se a entrada existisse.

```sql
UPDATE Actor SET sex = "male" WHERE id = "001";
```
`Error Code: 1054. Unknown column 'sex' in 'field list'` - o nome do campo é desconhecido.

# Exercício 3
- a)

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

- b)

```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

# Exercício 4

- a)
```sql
SELECT MAX(salary) FROM Actor;
```

- b)
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

- c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

- d)
```sql
SELECT SUM(salary) FROM Actor;
```

# Exercício 5
- a) A query conta a quantidade de atores/atrizes em cada categoria de gênero.

- b) 
```sql
SELECT id, name FROM Actor ORDER BY name DESC;
```
- c)
```sql
SELECT * FROM Actor ORDER BY salary;
```

- d)
```sql
SELECT * FROM Actor
WHERE gender = "male" 
ORDER BY salary DESC 
LIMIT 3;
```

- e)
```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

# Exercício 6
- a) 
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

- b) 
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

- c) 
```sql
UPDATE Movie SET playing_limit_date = "2022-06-30" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2022-06-19" WHERE id = "002";
```

- d) `0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0` - Nenhuma linha foi afetada, já que o id passado não corresponde a nenhum dado.