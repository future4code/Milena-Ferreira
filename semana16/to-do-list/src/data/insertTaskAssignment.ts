import connection from "../connection";

const insertTaskAssignment = async (taskId: string, userId: string): Promise<void> => {
	await connection("TaskAssignment")
		.insert({
			task_id: taskId,
			assigned_user_if: userId
		})
}

export default insertTaskAssignment;