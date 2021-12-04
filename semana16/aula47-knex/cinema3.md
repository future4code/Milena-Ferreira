# Exercício 1

**a. Explique como é a resposta que temos quando usamos o `raw`.**

Recemos um array que contem várias informações do banco e cujo item do index 0 é um outro array contento um objeto com as informações daquele item no BD, configurado no formato chave : valor, sendo a chave o campo no BD.

**b. Faça uma função que busque um ator pelo nome;**

```js
const getActorByName = async (name: string): Promise<any> => {
	const result = await connection.raw(`
		SELECT * FROM Actor WHERE name = "${name}";
	`);

	return result[0][0];
}
```

Endpoint usando a função:

```js
app.get("/users/:name", async (req: Request, res: Response) => {
	try {
		const name = req.params.name;

		console.log(await getActorByName("Juliana Paes"));
	} catch (error: any) {
		res.status(500).send("Unexpected error")
	}
})
```


**c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.**

```js
const groupByGender = async (): Promise<any> => {
	const result = await connection.raw(`
		SELECT COUNT(*) AS count, gender FROM Actor
		GROUP BY gender;
	`);

	return result[0];
}
```

Endpoint usando a função:
```js
app.get("/genders", async (req: Request, res: Response) => {
	try {
		console.log(await groupByGender())
	} catch {
		res.status(500).send("Unexpected error");
	}
})
```
# Exercício 2

**Utilize os *query builders* para criar funções de Typescript que realizem as operações abaixo. Tente prestar atenção nos tipos das variáveis de entrada e de saída.**

**a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão**

```js
const updateSalary = async (
	id: string,
	salary: number
): Promise<void> => {
	await connection("Actor")
		.update({
			salary: salary
		})
		.where("id", id)
}
```

Endpoint:

```js
app.put("/salary", async (req: Request, res: Response) => {
	try {
		const { id, salary } = req.body;
		await updateSalary(id, salary);
		res.status(200).send("Salary updated successfully");
	} catch (error: any) {
		res.status(500).send(error.sqlMessage || error.message);
	}
})

```


**b. Uma função que receba um id e delete um ator da tabela**
**c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`**


```js

```

```js

```