import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import getUsers from './endpoints/getUsers';
import getAllUsers from './endpoints/getAllUsers';
import getUsersByName from './endpoints/getUsersByName';
import getUsersByType from './endpoints/getUsersByType';
import getSortedUsers from './endpoints/getSortedUsers';
import getSortedUsersByPage from './endpoints/getSortedUsersByPage';
const app: Express = express();

app.use(express.json());
app.use(cors());

// app.get("/users", getAllUsers);
// app.get("/users", getUsersByName);
// app.get("/users", getUsersByType);
// app.get("/users", getSortedUsers);
// app.get("/users", getSortedUsersByPage);
app.get("/users", getUsers);

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost: ${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});