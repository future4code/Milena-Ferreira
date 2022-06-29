import connection from "../connection";

const selectCountActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT gender, COUNT(*) as count FROM Actor WHERE gender = "${gender}";
  `)

  return result[0];
};

export default selectCountActors;