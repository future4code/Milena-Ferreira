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