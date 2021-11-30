# Exercício 1

**Leia os comandos abaixo e indique o que eles fazem.**

**a)**

```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Remove a coluna "salary" da tabela.

**b)**

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Muda o nome da coluna "gender" para "sex", com limite de 6 caracteres

**c)** 

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Altera o tipo da coluna "gender" para VARCHAR, com limite de 255 caracteres

**d) Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres**

```sql
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
```

# Exercício 2

**a Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`**

```sql
UPDATE Actor
SET 
	name = "Arlindo Cruz",
	birth_date = "1955-08-09"
WHERE id = "003";
```

**b Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.**

```sql
UPDATE Actor
SET
	name = "JULIANA PAES"
WHERE id = "005";
```

**c Escreva uma query que atualize todas as informações do ator com o id `005`**

```sql

```

**d Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.**

```sql

```