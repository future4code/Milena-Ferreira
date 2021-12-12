import connection from "../connection";

const selectUserById = async (id: string): Promise<any> => {
	const result = await connection("ToDoListUser")
		.select()
		.where({ id });

	return result[0];
}

export default selectUserById;