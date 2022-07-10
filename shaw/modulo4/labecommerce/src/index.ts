import app from "./app";
import createProduct from "./endpoints/createProduct";
import createUser from "./endpoints/createUser";
import getProducts from "./endpoints/getProducts";
import getUsers from "./endpoints/getUsers";

app.get("/products", getProducts);

app.get("/users", getUsers);

app.post("/products", createProduct)

app.post("/users", createUser);

