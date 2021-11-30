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

# Exercício 4

# Exercício 5

# Exercício 6

# Exercício 7

# Exercício 8
