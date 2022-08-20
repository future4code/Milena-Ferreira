import connection from "../connection"

export default async function selecUsersByType(userType?: string): Promise<any> {
  let query = `
  SELECT id, name, email, type
  FROM aula48_exercicio`;

  if (userType !== "") {
    query += `
    WHERE type LIKE "%${userType}%"`
  }

  const result = await connection.raw(query)

  return result[0]
}