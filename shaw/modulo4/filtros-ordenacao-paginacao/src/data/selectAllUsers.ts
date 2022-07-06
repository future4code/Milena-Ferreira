import connection from "../connection"

export default async function selectAllUsers(name?: string, userType?: string): Promise<any> {
  let result;

  let query = `
  SELECT id, name, email, type
  FROM aula48_exercicio
  `

  if (name) {
    result = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)
  }

  if (userType) {
    result = await connection("aula48_exercicio")
      .where("type", "like", `%${userType}%`)
  }

  return result;
}