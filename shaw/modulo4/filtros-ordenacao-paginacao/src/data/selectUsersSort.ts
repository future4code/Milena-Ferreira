import connection from "../connection"

export default async function selectAllUsers(
  order: string,
  sort: string
): Promise<any> {
  const result = await connection("aula48_exercicio")
    .select("*")
    .orderBy(sort, order)

  return result
}