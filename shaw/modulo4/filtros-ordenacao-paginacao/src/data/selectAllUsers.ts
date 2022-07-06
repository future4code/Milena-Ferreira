import connection from "../connection"

export default async function selectAllUsers(name?: string): Promise<any> {
  let query = `
  SELECT id, name, email, type
  FROM aula48_exercicio`;

  if (name !== "") {
    query += `
    WHERE name LIKE "%${name}%"`
  }

  const result = await connection.raw(query)

  return result[0]
}