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
# Exercício 4
# Exercício 5
# Exercício 6

```sql
```