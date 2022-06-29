import connection from "../connection";

const selectActorById = async (id: string): Promise<any> => {
  const result = await connection("Actor")
    .select("*")
    .where({ id });

  return result;
};

export default selectActorById;