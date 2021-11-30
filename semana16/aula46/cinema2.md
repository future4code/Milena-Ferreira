# Exercício 1
**Leia os comandos abaixo e indique o que eles fazem.**

**a)**

```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Remove o campo "salary" da tabela "Actor".

**b)**

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Altera o campo "gender", mudando o nome para "sex" e o tipo para "VARCHAR" com limite de 6 caracteres.

**c)** 

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Altera o tipo campo "gender" para "VARCHAR" como limite de 255 caracteres, sem alterar o nome do campo.

**d) Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres**

```sql
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
```

# Exercício 2

**a). Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`**

```sql
UPDATE Actor
SET 
	name = "Arlindo Cruz",
	birth_date = "1955-08-09"
WHERE id = "003";
```

**b). Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.**

```sql
UPDATE Actor
SET
	name = "JULIANA PAES"
WHERE id = "005";
```

**c) Escreva uma query que atualize todas as informações do ator com o id `005`**

```sql
UPDATE Actor
SET
	name = "Wagner Moura",
    salary = 35000,
    birth_date = "1976-06-27",
    gender = "male",
    hometown = "Salvador",
    dessert = "pudim"
WHERE id = "005"
```

**d). Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.**

```sql
UPDATE Actor
SET
	name = "Wagner Moura",
    salary = 35000,
    birth_date = "1976-06-27",
    gender = "male",
    hometown = "Salvador",
    dessert = "pudim"
WHERE id = "100";
```

Resultado: ```0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0```

Não houve erros, a entrada simplesmente não existe.

# Exercício 3

**a) Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`**

```sql
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
```

**b) Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00**

```sql
DELETE FROM Actor
WHERE
	gender = "male" AND salary > 1000000;
```

# Exercício 4

**a) Escreva uma query que pegue o maior salário de todos os atores e atrizes**

```sql
SELECT MAX(salary) FROM Actor;
```

**b) Escreva uma query que pegue o menor salário das atrizes**

```sql
SELECT MAX(salary) FROM Actor
	WHERE gender = "female";
```

**c) Escreva uma query que pegue a quantidade de atrizes**

```sql
SELECT COUNT(*) FROM Actor
	WHERE gender = "female";
```

**d) Escreva uma query que pegue a soma de todos os salários**

```sql
SELECT SUM(salary) FROM Actor;
```

# Exercício 5

**a. Releia a última query. Teste-a. Explique o resultado com as suas palavras**

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

Resultado:

| COUNT(*) | gender |
|----------|--------|
| 4        | female |
| 2        | male   |

É uma tabela que agrupa a quantidade de pessoas por gênero. Neste caso, são 4 mulheres e 2 homens.

**b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética**

```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

**c. Faça uma query que retorne todos os atores ordenados pelo salário**

```sql
SELECT * FROM Actor
ORDER BY salary;
```

OU 

```sql
SELECT * FROM Actor
ORDER BY salary ASC;
```

**d. Faça uma query que retorne os atores com os três maiores salarios**

```sql
```

**e. Faça uma query que retorne a média de salário por gênero**

```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

# Exercício 6

# Exercício 7

# Exercício 8
