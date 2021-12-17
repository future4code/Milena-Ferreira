import connection from "../connection";

const selectUsers = async (id?: string): Promise<any> => {

	if (id) {
		const result = await connection("labecommerce_users")
			.where({ id })

		return result;
	}

	const result = await connection("labecommerce_users")
		.select()

	return result;
}

export default selectUsers;