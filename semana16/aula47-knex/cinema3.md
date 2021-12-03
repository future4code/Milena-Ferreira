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
		SELECT COUNT(*), gender FROM Actor
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




```js

```
```js

```