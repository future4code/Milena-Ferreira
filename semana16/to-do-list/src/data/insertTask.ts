import connection from "../connection";

const insertTask = async (
	id: string,
	title: string,
	description: string,
	status: string,
	deadline: Date,
	creator_id: string
): Promise<any> => {
	await connection("Task")
		.insert({
			id,
			title,
			description,
			status,
			deadline,
			creator_id
		})
}

export default insertTask;