import connection from "../connection";

const searchUser = async (search: string): Promise<any> => {
	const users = await connection("ToDoListUser")
		.select()
	// .where({ search }); // sqlMsg: Unknown column 'search' in 'where clause'
	// .where({ `${search}`: `${search}` }); // erro ao compilar

	const result = users.map(user => {
		return { id: user.id, nickname: user.nickname }
	})

	return result;
}

export default searchUser;