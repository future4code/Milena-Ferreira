import connection from "../connection";

const selectUser = async (id: string): Promise<any> => {
  const user = await connection("List_Users")
    .select("*")
    .where({ id });

  return user;
};

export default selectUser;