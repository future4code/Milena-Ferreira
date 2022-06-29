import connection from "../connection";

const insertTask = async (
  id: string,
  title: string,
  description: string,
  limitDate: Date,
  creatorUserId: string
): Promise<void> => {
  await connection("List_Tasks")
    .insert({
      id,
      title,
      description,
      limitDate,
      creatorUserId
    })
};

export default insertTask;