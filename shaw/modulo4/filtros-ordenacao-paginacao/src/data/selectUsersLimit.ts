import connection from "../connection"

export default async function selectUsersLimit(
  size: number,
  offset: number
): Promise<any> {
  const result = await connection("aula48_exercicio")
    .select("*")
    .limit(size)
    .offset(offset)

  return result;
}