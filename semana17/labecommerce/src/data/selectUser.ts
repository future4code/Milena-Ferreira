import connection from "../connection";

const selectUser = async (id?: string): Promise<any> => {

	if (id) {
		const result = await connection("labecommerce_users")
			.where({ id })
		return result;
	}

	const result = await connection("labecommerce_users")
	return result;
}

export default selectUser;