import connection from "../connection";

const selectUsers = async (
	name?: string,
	type?: string,
	sort?: string,
	order?: string,
	size?: number,
	offset?: number
): Promise<any> => {

	let query = `SELECT id, name, email, type
	FROM aula49_exercicio
	WHERE name LIKE "%${name}%"
	AND type LIKE "%${type}%"
	ORDER BY ${sort} ${order}
	`;

	if (size !== 0) {
		query += `
		LIMIT ${size}
		OFFSET ${offset}
`	}

	const result = await connection.raw(query)
	return result[0]

}

export default selectUsers;