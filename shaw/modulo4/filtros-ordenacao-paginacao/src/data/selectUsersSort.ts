import connection from "../connection"

export default async function selectAllUsers(
  name: string,
  order: string,
  sort: string
): Promise<any> {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${name}%`)
    .orderBy(sort, order)

  return result
}