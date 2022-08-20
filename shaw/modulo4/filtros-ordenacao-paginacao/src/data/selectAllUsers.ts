import connection from "../connection"

export default async function selectAllUsers(
  name: string,
  type: string,
  sort: string,
  order: string,
  size: number,
  offset: number
): Promise<any> {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${name}%`)
    .orWhere("type", "like", `%${type}%`)
    .orderBy(`${sort}`, `${order}`)
    .limit(size)
    .offset(offset);

  return result;
}