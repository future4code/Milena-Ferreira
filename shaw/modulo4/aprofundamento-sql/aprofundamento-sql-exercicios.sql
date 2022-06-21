SET SQL_SAFE_UPDATES = 0;

SELECT * FROM `shaw-milena-lara`.Actor;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor SET name = "Fernanda Torres", birth_date = "1976-12-25" WHERE id = "003";

UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

UPDATE Actor
SET
	name = "Larissa Manoela",
	salary = 60000,
    birth_date = "2002-05-23",
    gender = "female"
WHERE id = "005";

UPDATE Actor SET sex = "male" WHERE id = "001";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

INSERT INTO Actor VALUES ("006", "Tom Hanks", 2000000, "1953-09-27", "male");
INSERT INTO Actor VALUES ("007", "Selton Melo", 70000, "1973-09-27", "male");

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor ORDER BY name DESC;

SELECT * FROM Actor ORDER BY salary;

SELECT * FROM Actor WHERE gender = "male" ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

SELECT * FROM Movie;
DESCRIBE Movie;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie SET playing_limit_date = "2022-06-30" WHERE id = "001";
UPDATE Movie SET playing_limit_date = "2022-06-19" WHERE id = "002";

DELETE FROM Movie WHERE id = "003";
UPDATE Movie SET synopsis = "lorem ipsum" WHERE id = "003";