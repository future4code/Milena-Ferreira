import connection from "../connection";

const selectTaskById = async (id: string): Promise<any> => {
	const result = await connection("Task")
		.select()
		.where({ id });

	return result[0];
}

export default selectTaskById;