import connection from "../connection";
import { User } from "../types";

const insertUser = async (user: User): Promise<any> => {
	await connection("labecommerce_users")
		.insert(user)
}

export default insertUser;