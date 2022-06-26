import connection from "../connection";

const updateSalary = async (id: string, salary: number): Promise<void> => {
  await connection("Actor")
    .update({ salary })
    .where({ id });
};

export default updateSalary;