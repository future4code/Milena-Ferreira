import connection from "../connection";
import { user } from "../types";

const insertUser = async (user: user): Promise<any> => {
	await connection("labecommerce_users")
		.insert(user)
}

export default insertUser;