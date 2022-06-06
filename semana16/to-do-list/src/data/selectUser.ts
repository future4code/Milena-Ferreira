import connection from "../connection";

const searchUser = async (query: string): Promise<any> => {
	const users = await connection("ToDoListUser")
		.where("name", "LIKE", `%${query}%`)
		.orWhere("nickname", "LIKE", `%${query}%`);

	const result = users.map(user => {
		return { id: user.id, nickname: user.nickname }
	})

	return result;
}

export default searchUser;