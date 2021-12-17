import connection from "../connection";

const insertUser = async (
	id: string,
	name: string,
	email: string,
	password: string
): Promise<any> => {
	await connection("labecommerce_users")
		.insert({
			id,
			name,
			email,
			password,
		})
}

export default insertUser;