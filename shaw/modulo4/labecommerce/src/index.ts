import app from "./app";
import createProduct from "./endpoints/createProduct";
import createPurchase from "./endpoints/createPurchase";
import createUser from "./endpoints/createUser";
import getProduct from "./endpoints/getProduct";
import getUser from "./endpoints/getUser";

app.get("/products", getProduct);

app.get("/users", getUser);

app.post("/purchases", createPurchase);

app.post("/products", createProduct);

app.post("/users", createUser);

