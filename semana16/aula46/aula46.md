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

# Exercício 3

# Exercício 4

# Exercício 5

# Exercício 6

# Exercício 7

# Exercício 8
