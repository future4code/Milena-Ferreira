# Aula 45 - SQL - exercícios 

## Exercício 1

**a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.**
- ```id VARCHAR(255) PRIMARY KEY``` -> cria a chave primária da tabela, que é o identificador único, como uma string de até 255 caracteres.
- ```name VARCHAR (255) NOT NULL``` -> cria a coluna para o nome das atrizes e dos atores, que comporta até 255 caracteres e não pode ser vazia.
- ```birth_date DATE NOT NULL``` -> cria a coluna para a idade das atrizes e dos atores, que é uma data, e portanto, deve ser declarada no formato YYYY-MM-DD
- ```gender VARCHAR(6) NOT NULL``` -> cria a coluna para declarar o gênero das atrizes e  dos atores, que é uma string de até 6 caracteres.


**b) O comando ```SHOW``` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: ```SHOW DATABASES``` e ```SHOW TABLES```. Explique os resultados.**
- ```SHOW DATABASES``` -> resultados: "information_schema", "meu-banco-da-labenu" : mostra todos os bancos servidor.
- ```SHOW TABLES``` -> resultados: "Actor", "professores_labenu": mostra as tabelas não-temporárias do banco de dados em uso. No meu caso, mostrou a tabela criada no início do exercício e outra que criei durante o code-together na aula.

**c) O comando ```DESCRIBE``` pode ser usado para ver estrutura de uma tabela. Utilize o comando  ```DESCRIBE Actor``` e explique os resultados.**
- O comando gera uma tabela (abaixo) com o nome do campo, o tipo, se pode receber nenhum valor (null), se é algum tipo de chave (primary key ou foreign key), o valor padrão (default) e se há alguma condição extra.

| Field      | Type         | Null | Key | Default | Extra |
|------------|--------------|------|-----|---------|-------|
| name       | varchar(255) | NO   | PRI | null    |       |
| salary     | float        | NO   |     | null    |       |
| birth_date | date         | NO   |     | null    |       |
| gender     | varchar(6)   | NO   |     | null    |       |


## Exercício 2

**a) Escreva uma query que crie a atriz  ```Glória Pires```, com o id ```002```, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963**

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES 
("002", "Glória Pires", 1200000, "1963-08-23", "female");
```

**b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.**

```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
```
- Tradução: ```Entrada duplicada para a chave primária '002' 0.156 segundos```
- Não é possível criar a entrada porque a chave primária ```002```, que deve ser única, já foi utilizada em uma outra entrada.

**c)** 
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
**d)**
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
**e)**
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
**f) Crie mais um ator e mais uma atriz**

```
INSERT INTO Actor
VALUES (
	"006",
	"Camila Queiroz",
    50000,
    "1993-06-27",
    "female"
);

INSERT INTO Actor
VALUES (
	"007",
    "Klebber Toledo",
    50000,
    "1986-06-14",
    "male"
);
```

## Exercício 3

**a) Escreva uma query que retorne todas as informações das atrizes**
```
SELECT * FROM Actor
WHERE gender = "female";
```

**b) Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`**
```
SELECT salary FROM Actor
WHERE name = "Tony Ramos";
```

**c) Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.**
Retorna uma tabela vazia. Nenhuma entrada da tabela possui esse valor para "gender".

**d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000**
```
SELECT id, name, salary FROM Actor
WHERE salary <= 500000;
```

**e)**
- Mensagem de erro: ```Error Code: 1054. Unknown column 'nome' in 'field list'```
- Tradução: ```Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' ```
- Explicação: durante a criação da tabela, não criamos uma coluna "nome" e sim "name"
- Correção: 
```
SELECT id, name from Actor
  WHERE id = "002";
```

## Exercício 4

```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

**a) Explique com as suas palavras a query acima**

A query seleciona todas as colunas da tabela Actor cujos valores no campo "name" comecem com as letras A ou J e que, ao mesmo tempo, recebam salário maior do que R$300.000,00

**b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00**

```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

**c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.**

```
SELECT * FROM Actor
WHERE name LIKE "%G%";
```

**d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00**

```
SELECT * FROM Actor
WHERE (name LIKE "%A%" or name LIKE "%G%") AND salary BETWEEN 350000 and 900000;
```

## Exercício 5

**a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.**

```
CREATE TABLE Film (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
summary TEXT NOT NULL,
release_date DATE NOT NULL,
review INT NOT NULL
  check(review >= 0 AND review <= 10)
);

```
- `id`: chave primária que deve ter valor único para cada entrada
- `name`: coluna que aceita strings com até 255 caracteres
- `summary`: coluna que aceita strings de até 2G, para armazenar textos maiores, como o da sinopse do filme
- `release_date`: coluna para receber a data de lançamento do filme no formato `YYYY-MM-DD`
- `review`: coluna para receber a nota do filme, que deve ser entre 0 e 10.

**Crie 4 filmes com as seguintes informações:**

```
INSERT INTO Film
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006-01-06",
7
);

INSERT INTO Film (id, name, summary, release_date, review)
VALUES(
"002", 
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Film (id, name, summary, release_date, review)
VALUES(
"003", 
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2012-12-27",
8
);

INSERT INTO Film (id, name, summary, release_date, review)
VALUES(
"004", 
"Bacurau",
"Num futuro próximo, Bacurau, uma pequena cidade brasileira no oeste de Pernambuco, lamenta a perda de sua matriarca, Carmelita (Lia de Itamaracá), que viveu até os 94 anos. Dias depois, seus habitantes aos poucos percebem algo estranho acontecer na região: enquanto drones passeiam pelos céus, estrangeiros chegam pela primeira vez na cidade com planos de exterminar toda a população ali residente, carros são atingidos por tiros e cadáveres começam a aparecer. Os habitantes chegam à conclusão de que estão sendo atacados. Resta identificar o inimigo e criar coletivamente um meio de defesa. ",
"2019-05-15",
10
);
```

## Exercício 6
**Escreva uma query que:**

**a. Retorne o id, título e avaliação a partir de um id específico;**
```
SELECT id, name, review FROM Film
	WHERE id = "001";
```
**b. Retorne um filme a partir de um nome específico;**
```
SELECT * FROM Film
	WHERE name LIKE "Bacurau";
```

**c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`**
```
SELECT id, name, summary FROM Film
	WHERE review >= 7;
```

## Exercício 7

**a. Retorna um filme cujo título contenha a palavra `vida`**
```
SELECT * FROM Film
	WHERE name LIKE "%vida%";
```

**b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.**
```
SELECT * FROM Film
	WHERE name LIKE "%anos%"
	OR summary LIKE "%anos%";
```

**c. Procure por todos os filmes que já tenham lançado**
```
SELECT * FROM Film
	WHERE release_date < "2021-11-29";
```

**d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.**
```
SELECT * FROM Film
	WHERE release_date < CURDATE()
    AND review > 7
    AND (name LIKE "%você" OR summary LIKE "%você");
```
