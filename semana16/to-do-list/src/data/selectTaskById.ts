import connection from "../connection";

const selectTaskById = async (id: string): Promise<any> => {
	const result = await connection("Task")
		.select({
			task_id: "Task.id",
			title: "Task.title",
			description: "Task.description",
			status: "Task.status",
			deadline: "Task.deadline",
			creator_id: "Task.creator_id",
			creator_nickname: "ToDoListUser.nickname"
		})
		.join("ToDoListUser", "Task.creator_id", "=", "ToDoListUser.id")
		.where("Task.id", id);

	return result[0];
}

export default selectTaskById;