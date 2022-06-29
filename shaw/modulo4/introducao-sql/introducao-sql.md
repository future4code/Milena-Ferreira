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

## Exercício 3
- a) 
```sql
SELECT id, name from Actor WHERE gender = "female";
```
- b)
```sql
SELECT salary from Actor WHERE name = "Tony Ramos";
```
- c) Não retorna nenhum valor pois não existem registros com o valor "invalid" para o campo "gender".

```sql
SELECT * FROM Actor WHERE gender = "invalid";
```
- d) 
```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

- e) `Error Code: 1054. Unknown column 'nome' in 'field list'` significa que não existe o campo 'nome', e sim 'name'.

## Exercício 4
- a) Seleciona entradas cujo valor para o campo 'name' comecem com A ou J e cujo campo salário seja maior que 300000.
- b)

```sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```
- c)
```sql
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"; 
```

- d)
```sql
SELECT * FROM Actor
WHERE
(name LIKE "%a%" 
OR name LIKE "%A%" 
OR name LIKE "%g%"
OR name LIKE "%G%")
AND salary BETWEEN 350000 AND 900000;
```


## Exercício 5
- a) 
```sql
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating FLOAT NOT NULL
);-
```

- b) 
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES (
"001", 
"Se Eu Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
```

- c) 
```sql
INSERT INTO Movie(id, title, synopsis, release_date, rating)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

```

- d)
```sql
INSERT INTO Movie
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
```

- e)
```sql
INSERT INTO Movie
VALUES (
"004",
"Bacurau",
"Num futuro próximo, Bacurau, uma pequena cidade brasileira no oeste de Pernambuco, lamenta a perda de sua matriarca, Carmelita (Lia de Itamaracá), que viveu até os 94 anos. Dias depois, seus habitantes aos poucos percebem algo estranho acontecer na região: enquanto drones passeiam pelos céus, estrangeiros chegam pela primeira vez na cidade com planos de exterminar toda a população ali residente, carros são atingidos por tiros e cadáveres começam a aparecer. Os habitantes chegam à conclusão de que estão sendo atacados. Resta identificar o inimigo e criar coletivamente um meio de defesa.",
"2019-05-15",
10
);
```

## Exercício 6
- a)
```sql
SELECT id, title, rating FROM Movie
WHERE id = "004";
```
- b)
```sql
SELECT * FROM Movie
WHERE title = "Bacurau";
```
- c)
```sql
SELECT id, title, synopsis FROM Movie
WHERE rating >= 7;
```

## Exercício 7
- a)
```sql
SELECT * FROM Movie
WHERE title LIKE "%vida%";
```

- b)
```sql
SELECT * FROM Movie
WHERE (title LIKE "%mãe%"
OR synopsis LIKE "%mãe");
```

- c)
```sql
SELECT * FROM Movie
WHERE release_date < curdate();
```

- d)
```sql
SELECT * FROM Movie
WHERE release_date < curdate()
AND (title LIKE "%mãe%"
OR synopsis LIKE "%mãe")
AND rating > 7;
```