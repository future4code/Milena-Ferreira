import connection from "../connection";
import { User } from "../types/User";


const selectUser = async (): Promise<User[]> => {
  const users: User[] = await connection("labecommerce_users")
    .select("*");

  return users;
};

export default selectUser;