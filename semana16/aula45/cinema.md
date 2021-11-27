# Aula 45 - SQL - exercícios 

## Exercício 1
a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
- ```id VARCHAR(255) PRIMARY KEY``` -> cria a chave primária da tabela, que é o identificador único, como uma string de até 255 caracteres.
- ```name VARCHAR (255) NOT NULL``` -> cria a coluna para o nome das atrizes e dos atores, que comporta até 255 caracteres e não pode ser vazia.
- ```birth_date DATE NOT NULL``` -> cria a coluna para a idade das atrizes e dos atores, que é uma data, e portanto, deve ser declarada no formato YYYY-MM-DD
- ```gender VARCHAR(6) NOT NULL``` -> cria a coluna para declarar o gênero das atrizes e  dos atores, que é uma string de até 6 caracteres.


b) O comando ```SHOW``` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: ```SHOW DATABASES``` e ```SHOW TABLES```. Explique os resultados.
- ```SHOW DATABASES``` -> resultados: "information_schema", "meu-banco-da-labenu" : mostra todos os bancos servidor.
- ```SHOW TABLES``` -> resultados: "Actor", "professores_labenu": mostra as tabelas não-temporárias do banco de dados em uso. No meu caso, mostrou a tabela criada no início do exercício e outra que criei durante o code-together na aula.

c) O comando ```DESCRIBE``` pode ser usado para ver estrutura de uma tabela. Utilize o comando  ```DESCRIBE Actor``` e explique os resultados.
- O comando gera uma tabela (abaixo) com o nome do campo, o tipo, se pode receber nenhum valor (null), se é algum tipo de chave (primary key ou foreign key), o valor padrão (default) e se há alguma condição extra.

| Field      | Type         | Null | Key | Default | Extra |
|------------|--------------|------|-----|---------|-------|
| name       | varchar(255) | NO   | PRI | null    |       |
| salary     | float        | NO   |     | null    |       |
| birth_date | date         | NO   |     | null    |       |
| gender     | varchar(6)   | NO   |     | null    |       |


### Exercício 2
a) Escreva uma query que crie a atriz  ```Glória Pires```, com o id ```002```, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES 
("002", "Glória Pires", 1200000, "1963-08-23", "female");
```

b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
```
- Tradução: ```Entrada duplicada para a chave primária '002' 0.156 segundos```
- Não é possível criar a entrada porque a chave primária ```002```, que deve ser única, já foi utilizada em uma outra entrada.

c) 
- Mensagem de erro:
```
Error Code: 1136. Column count doesn't match value count at row 1	0.187 sec
```
- Tradução: "A contagem de colunas não corresponde à contagem de valores na linha 1"
- Explicação: é preciso colocar a mesma quantidade de valores que a quantidade dos campos declarados (e na mesma ordem)
- Código corrigido:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
d)
- Mensagem de erro:
```
Error Code: 1364. Field 'name' doesn't have a default value
```
- Tradução: O campo "nome" não tem um valor padrão
- Explicação: O campo "nome" precisa ser preenchido obrigatoriamente, ele não tem um valor default que é usado caso o campo esteja em branco.
- Código corrigido:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```
e)
- Mensagem de erro:
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
```
- Tradução: Valor incorreto para a data: "1950" para a coluna "data de aniversário" na linha 1
- Explicação: O valor da data deve ser passado entre aspas [""], no formato "YYY-MM-DD"
- Código corrigido:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

```