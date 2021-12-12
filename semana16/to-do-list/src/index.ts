import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getAllUsers from "./endpoints/getAllUsers";
import getTaskByCreator from "./endpoints/getTaskByCreator";
import getTaskById from "./endpoints/getTaskById";
import getUserById from "./endpoints/getUserById";
import searchUser from "./endpoints/searchUser";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/task", getTaskByCreator)

app.get("/task/:id", getTaskById)

app.get("/user", searchUser)

app.get("/user/all", getAllUsers)

app.get("/user/:id", getUserById)

app.post("/user/edit/:id", editUser)

app.put("/task", createTask)

app.put("/user", createUser)

const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost: ${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});