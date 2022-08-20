# Aula Knex.js

## Exercício 1

a) *Explique como é a resposta que temos quando usamos o `raw`.* 
O raw retornar um array cujo primeiro item é o resultado da query e os demais itens são informações referentes ao banco de dados.

b) *Faça uma função que busque um ator pelo nome;*
```ts
const getActorByName = async (name: string): Promise<object[]> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}";
  `);

  return result[0];
}
```

c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

```ts
const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT gender, COUNT(*) as count FROM Actor WHERE gender = "${gender}";
  `)

  return result[0];
};
```

## Exercício 2
- a) 
```ts
const updateSalaryById = async (
  id: string,
  salary: number
): Promise<void> => {
  await connection("Actor")
    .update({ salary })
    .where({ id });
}
```
- b)
```ts
const deleteActorById = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where({ id });
};
```

- c)
```ts
const getAverageSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg(`salary as average_salary`)
    .where({ gender });

  return result;
};
```

## Exercício 3
- b)
```ts

```

## Exercício 4
```ts

```