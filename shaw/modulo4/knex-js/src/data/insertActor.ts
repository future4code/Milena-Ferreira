import connection from "../connection";

const insertActor = async (
  id: string,
  name: string,
  salary: number,
  birth_date: Date,
  gender: string
): Promise<void> => {
  await connection("Actor")
    .insert({
      id,
      name,
      salary,
      birth_date,
      gender
    })
};

export default insertActor;