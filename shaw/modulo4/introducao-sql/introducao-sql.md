# Banco de Dados e Introdução a SQL

## Exercício 1
- a) `id VARCHAR(255) PRIMARY KEY,` cria a chave primária, uma string de 255 caracteres
`name VARCHAR (255) NOT NULL,` cria o campo nome, string de 255 caracteres que não pode ser vazia.
`birth_date DATE NOT NULL,` cria o campo da data de nascimento, uma data não vazia.
`gender VARCHAR(6) NOT NULL` campo gênero, string de 255 caracteres não vazia.

- b) `SHOW DATABASES` mostrou os bancos de dados aos quais o workbench está conectado - no meu caso, apenas o da labenu. `SHOW TABLES` mostrou todas as tabelas dentro do schema atual.
- c) `DESCRIBE Actor` mostrou uma tabela em que `Field` representa os campos que criamos, `Type` o tipo de dados de cada campo, `Null`se o campo pode ser deixado vazio ou não, `KEY` se o campo é primary key ou foreign key, `Default` o valor que deve ser preenchido no campo caso nenhum seja passado (opcional).

## Exercício 2
- a) 
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");
```
- b) `Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'` - o campo id é primary key e não pode ter valores repetidos.

- c) `Error Code: 1136. Column count doesn't match value count at row 1` - foram informados 3 campos para inserir mas foram passados 6 valores.
- d) `Error Code: 1364. Field 'name' doesn't have a default value` - o campo 'name' precisa ser preenchido pois não tem um valor padrão.
- e) `Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1` - a data foi passada em formato incorreto, deve ser uma string no formato YYYY-MM-DD.