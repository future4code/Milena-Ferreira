# Aula 45 - SQL - exercícios 

## Exercício 1
a) Explicando os comandos da query:
- ```id VARCHAR(255) PRIMARY KEY``` -> cria a chave primária da tabela, que é o identificador único, como uma string de até 255 caracteres.
- ```name VARCHAR (255) NOT NULL``` -> cria a coluna para o nome das atrizes e dos atores, que comporta até 255 caracteres e não pode ser vazia.
- ```birth_date DATE NOT NULL``` -> cria a coluna para a idade das atrizes e dos atores, que é uma data, e portanto, deve ser declarada no formato YYYY-MM-DD
- ```gender VARCHAR(6) NOT NULL``` -> cria a coluna para declarar o gênero das atrizes e  dos atores, que é uma string de até 6 caracteres.


b) Explicando os resultados dos comandos ```SHOW DATABASES``` e ```SHOW TABLES```:
- ```SHOW DATABASES``` -> resultados: "information_schema", "meu-banco-da-labenu" : mostra todos os bancos servidor.
- ```SHOW TABLES``` -> resultados: "actor", "professores_labenu": mostra as tabelas não-temporárias do banco de dados em uso. No meu caso, mostrou a tabela criada no início do exercício e outra que criei durante o code-together na aula.

c) Explicando os resultados do comando ```DESCRIBE Actor```:
- O comando gera uma tabela (abaixo) com o nome do campo, o tipo, se pode receber nenhum valor (null), se é algum tipo de chave (primary key ou foreign key), o valor padrão (default) e se há alguma condição extra.

| Field      | Type         | Null | Key | Default | Extra |
|------------|--------------|------|-----|---------|-------|
| name       | varchar(255) | NO   | PRI | null    |       |
| salary     | float        | NO   |     | null    |       |
| birth_date | date         | NO   |     | null    |       |
| gender     | varchar(6)   | NO   |     | null    |       |


### Exercício 2
a) A resposta é: Blablabla, porque:
1. Bleus
2. Blius
3. Blos