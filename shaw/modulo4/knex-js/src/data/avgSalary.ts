import connection from "../connection";

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg(`salary as average_salary`)
    .where({ gender });

  return result;
};

export default avgSalary;