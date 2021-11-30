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
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

**e. Faça uma query que retorne a média de salário por gênero**

```sql
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

# Exercício 6

**a) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.**

```sql
ALTER TABLE Film
ADD playing_limit_date DATE NOT NULL DEFAULT (CURDATE());
```

**b) Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.**

```sql
ALTER TABLE Film
CHANGE rating rating DOUBLE NOT NULL;
```

**c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído**

```sql
UPDATE Film
SET playing_limit_date = "2021-12-15"
WHERE id = 1;

UPDATE Film
SET playing_limit_date = "2017-10-02"
WHERE id = 2;
```

**d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.**

Resultado: `0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0`

Nenhuma mensagem de erro foi enviada porque a entrada não existe, então não teve o que alterar.


# Exercício 7

**a) Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?**

```sql
SELECT COUNT(*) FROM Film
WHERE rating > 7.5;
```

- RE: 3 filmes

**b) Qual a média das avaliações dos filmes?**

```sql
SELECT AVG(rating) FROM Film;
```

- RE: 7.1

**c) Qual a quantidade de filmes em cartaz?**

```sql
SELECT COUNT(*) FROM Film
WHERE playing_limit_date <= CURDATE();
```

- RE: 4

**d) Qual a quantidade de filmes que ainda irão lançar?**

```sql
SELECT COUNT(*) FROM Film
WHERE release_date > CURDATE();
```

- RE: 1

**e) Qual a maior nota dos filmes?**

```sql
SELECT MAX(rating) FROM Film;
```

- RE: 10

**f) Qual a menor nota dos filmes?**

```sql
SELECT MIN(rating) FROM Film;
```

- RE: 0


# Exercício 8
