import express, { Request, Response } from "express";
import cors from "cors";
import { produto, produtos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Funcionou!");
});

// Exercício 3
// app.post("/produtos/novo", (req: Request, res: Response) => {
//   try {
//     const { name, price } = req.body
//     const id = Date.now().toString();

//     if (!name || !price) {
//       res.status(400);
//       throw new Error("Campo(s) não informado(s)");
//     }

//     const novoProduto: produto = { id, name, price };
//     produtos.push(novoProduto);

//     res.status(201).send(produtos);
//   } catch (error: any) {
//     res.send(error.message);
//   }
// });

// Exercício 4
app.get("/produtos", (req: Request, res: Response) => {
  res.status(200).send(produtos);
});

// Exercício 5
// app.put("/produtos/:id", (req: Request, res: Response) => {
//   try {
//     const id: string = req.params.id;
//     const novoPreco: number = req.body.price;

//     if (!id) {
//       res.status(400);
//       throw new Error("ID não informado");
//     }

//     if (!novoPreco) {
//       res.status(400);
//       throw new Error("Novo preço não informado");
//     }

//     const produtosFiltrados: produto[] = produtos.filter((produto) => {
//       return produto.id === id
//     });

//     if (produtosFiltrados.length === 0) {
//       res.status(400);
//       throw new Error("ID do produto inexistente");
//     }

//     const produtosAtualizados: produto[] = produtos.map((produto) => {
//       if (produto.id === id) {
//         return { ...produto, price: novoPreco };
//       } else {
//         return produto;
//       }
//     });

//     res.status(200).send(produtosAtualizados);
//   } catch (error: any) {
//     res.send(error.message);
//   }
// });

// Exercício 6
// app.delete("/produtos/:id", (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     const produtosFiltrados = produtos.filter((produto) => {
//       if (produto.id !== id) {
//         return produto
//       }
//     })

//     if (produtosFiltrados.length === produtos.length) {
//       res.status(400);
//       throw new Error("ID informado não corresponde a nenhum produto");
//     }

//     res.status(200).send(produtosFiltrados);
//   } catch (error: any) {
//     res.send(error.message);
//   }
// });

// Exercício 7
app.post("/produtos/novo", (req: Request, res: Response) => {
  try {
    const { name, price } = req.body
    const id = Date.now().toString();

    if (!name || !price) {
      res.status(400);
      throw new Error("Campo(s) não informado(s)");
    }

    if (typeof (name) !== "string") {
      res.status(400);
      throw new Error("O campo 'name' deve ser uma string");
    }

    if (typeof (price) !== "number") {
      res.status(400);
      throw new Error("O campo 'price' deve ser um number");
    }

    if (price <= 0) {
      res.status(400);
      throw new Error("O campo 'price' deve ser um valor não nulo maior que zero");
    }

    const novoProduto: produto = { id, name, price };
    produtos.push(novoProduto);

    res.status(201).send(produtos);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).end()
    }
    res.send(error.message);
  }
});

// Exercício 8
app.put("/produtos/:id", (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const novoPreco: number = req.body.price;

    if (!id) {
      res.status(400);
      throw new Error("ID não informado");
    }

    if (!novoPreco) {
      res.status(400);
      throw new Error("Novo preço não informado");
    }

    if (typeof (novoPreco) !== "number") {
      res.status(400);
      throw new Error("Preço deve ser um number");
    }

    if (novoPreco <= 0) {
      res.status(400);
      throw new Error("Preço deve ser um valor positivo não nulo");
    }

    const produtosFiltrados: produto[] = produtos.filter((produto) => {
      return produto.id === id
    });

    if (produtosFiltrados.length === 0) {
      res.status(400);
      throw new Error("ID do produto inexistente");
    }

    const produtosAtualizados: produto[] = produtos.map((produto) => {
      if (produto.id === id) {
        return { ...produto, price: novoPreco };
      } else {
        return produto;
      }
    });

    res.status(200).send(produtosAtualizados);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).end();
    }
    res.send(error.message);
  }
});

// Exercício 9
app.delete("/produtos/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const produtosFiltrados = produtos.filter((produto) => {
      if (produto.id !== id) {
        return produto
      }
    })

    if (produtosFiltrados.length === produtos.length) {
      res.status(400);
      throw new Error("ID informado não corresponde a nenhum produto");
    }

    res.status(200).send(produtosFiltrados);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).end();
    }
    res.send(error.message);
  }
});

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});