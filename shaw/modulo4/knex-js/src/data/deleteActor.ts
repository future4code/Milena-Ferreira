import connection from "../connection";

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where({ id });
};

export default deleteActor;