import connection from "../connection";

const updateUser = async (
	id: string,
	name?: string,
	nickname?: string,
	email?: string
): Promise<void> => {
	if (name) {
		await connection("ToDoListUser")
			.update({ name })
			.where({ id });
	}

	if (nickname) {
		await connection("ToDoListUser")
			.update({ nickname })
			.where({ id });
	}

	if (email) {
		await connection("ToDoListUser")
			.update({ email })
			.where({ id });
	}
}

export default updateUser;