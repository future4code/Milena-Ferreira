// apenas para referências de estudo

import connection from "./connection";

const countActorsByGender = async (gender: string): Promise<any> => {
	const result = await connection.raw(`
	SELECT gender, COUNT(*) AS count
	FROM Actor
	WHERE gender = "${gender}";
	`);

	return result[0][0];
};

const getActorById = async (id: string): Promise<any> => {
	const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
};

const getActorByName = async (name: string): Promise<any> => {
	const result = await connection.raw(`
		SELECT * FROM Actor WHERE name = "${name}";
	`);

	return result[0][0];
};