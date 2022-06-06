import connection from "../connection";

const selectTaskByCreator = async (creator_id: string): Promise<any> => {
	const result = await connection("Task")
		.select({
			task_id: "Task.id",
			title: "Task.title",
			description: "Task.description",
			status: "Task.status",
			deadline: "Task.deadline",
			creator_id: "Task.id",
			nickname: "ToDoListUser.nickname"
		})
		.join("ToDoListUser", "Task.creator_id", "=", "ToDoListUser.id")
		.where({ creator_id })

	return result;
}

export default selectTaskByCreator;