import connection from "../connection";

const selectAllUsers = async (): Promise<any> => {
	const users = await connection("ToDoListUser")
		.select();
	const result = users.map(user => {
		return { id: user.id, nickname: user.nickname }
	})

	return result;
}

export default selectAllUsers;