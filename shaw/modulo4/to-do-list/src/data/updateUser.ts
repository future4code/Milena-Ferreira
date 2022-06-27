import connection from "../connection";

const updateUser = async (
  id: string,
  name?: string,
  nickname?: string,
  email?: string
): Promise<void> => {
  let updatedUser: object;

  if (name && nickname && email) updatedUser = { name, nickname, email };
  else if (name && nickname) updatedUser = { name, nickname };
  else if (name && email) updatedUser = { name, email };
  else if (nickname && email) updatedUser = { nickname, email };
  else if (name) updatedUser = { name };
  else if (nickname) updatedUser = { nickname };
  else if (email) updatedUser = { email };
  else updatedUser = {};

  await connection("List_Users")
    .update(updatedUser)
    .where({ id })
};

export default updateUser;