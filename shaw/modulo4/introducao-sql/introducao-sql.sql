USE `shaw-milena-lara`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT 
    *
FROM
    Actor;

SELECT 
    id, salary
FROM
    Actor;

SELECT 
    id, name
FROM
    Actor
WHERE
    gender = 'male';

SELECT 
    id, name
FROM
    Actor
WHERE
    gender = 'female';

SELECT 
    salary
FROM
    Actor
WHERE
    name = 'Tony Ramos';

SELECT 
    *
FROM
    Actor
WHERE
    gender = 'invalid';

SELECT 
    id, name, salary
FROM
    Actor
WHERE
    salary <= 500000;

SELECT 
    id, nome
FROM
    Actor
WHERE
    id = '002';
    
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"; 

SELECT * FROM Actor
WHERE
(name LIKE "%a%" 
OR name LIKE "%A%" 
OR name LIKE "%g%"
OR name LIKE "%G%")
AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating FLOAT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES (
"001", 
"Se Eu Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Movie(id, title, synopsis, release_date, rating)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Movie
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

INSERT INTO Movie
VALUES (
"004",
"Bacurau",
"Num futuro próximo, Bacurau, uma pequena cidade brasileira no oeste de Pernambuco, lamenta a perda de sua matriarca, Carmelita (Lia de Itamaracá), que viveu até os 94 anos. Dias depois, seus habitantes aos poucos percebem algo estranho acontecer na região: enquanto drones passeiam pelos céus, estrangeiros chegam pela primeira vez na cidade com planos de exterminar toda a população ali residente, carros são atingidos por tiros e cadáveres começam a aparecer. Os habitantes chegam à conclusão de que estão sendo atacados. Resta identificar o inimigo e criar coletivamente um meio de defesa.",
"2019-05-15",
10
);

SELECT id, title, rating FROM Movie
WHERE id = "004";

SELECT * FROM Movie
WHERE title = "Bacurau";

SELECT id, title, synopsis FROM Movie
WHERE rating >= 7;


SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE (title LIKE "%mãe%"
OR synopsis LIKE "%mãe");

SELECT * FROM Movie
WHERE release_date < curdate()
OR (title LIKE "%mãe%"
OR synopsis LIKE "%mãe"
AND rating > 7);

SELECT * FROM Movie
WHERE release_date < curdate();