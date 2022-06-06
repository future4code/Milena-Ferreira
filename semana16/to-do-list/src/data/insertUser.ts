import connection from "../connection";

const insertUser = async (
	id: string,
	name: string,
	nickname: string,
	email: string
): Promise<void> => {
	await connection("ToDoListUser")
		.insert(
			{
				id,
				name,
				nickname,
				email
			}
		);
};

export default insertUser;