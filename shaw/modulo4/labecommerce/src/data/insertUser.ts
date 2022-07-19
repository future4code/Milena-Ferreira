import connection from "../connection";
import { User } from "../types/User";


const insertUser = async (user: User): Promise<void> => {
  await connection("labecommerce_users")
    .insert(user);
};

export default insertUser;