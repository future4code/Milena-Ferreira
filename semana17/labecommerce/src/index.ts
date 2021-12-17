import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import createUser from './endpoints/createUser';
import createProduct from './endpoints/createProduct';
import getProducts from './endpoints/getProducts';
import getUsers from './endpoints/getUsers';


const app: Express = express();

app.use(express.json());
app.use(cors());

// COMEÇAR EM "Registro de compra"

app.get("/products", getProducts)

app.get("/users", getUsers)

app.post("/products", createProduct);

app.post("/users", createUser);

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost: ${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});