import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import createProduct from './endpoints/createProduct';
import getProduct from './endpoints/getProduct';
import getUsers from './endpoints/getUsers';
import createPurchase from './endpoints/createPurchase';
import getUsersPurchase from './endpoints/getUsersPurchase';


const app: Express = express();

app.use(express.json());
app.use(cors());


app.get("/products", getProduct)

app.get("/users", getUsers)

app.get("/users/:user_id/purchases", getUsersPurchase);

app.post("/products", createProduct);

app.post("/purchases", createPurchase);

app.post("/users", createUser);

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost: ${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});