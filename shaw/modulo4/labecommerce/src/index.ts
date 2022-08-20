import app from "./app";
import createProduct from "./endpoints/createProduct";
import createPurchase from "./endpoints/createPurchase";
import createUser from "./endpoints/createUser";
import getAllProducts from "./endpoints/getAllProducts";
import getProductById from "./endpoints/getProductById";
import getPurchase from "./endpoints/getPurchase";
import getUser from "./endpoints/getUser";

app.get("/products", getAllProducts);

app.get("/products/:productId", getProductById);

app.get("/purchases/:userId", getPurchase);

app.get("/users", getUser);

app.post("/purchases", createPurchase);

app.post("/products", createProduct);

app.post("/users", createUser);

