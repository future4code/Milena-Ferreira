import app from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import getUser

app.get("/users", getAllUsers);

app.get("/users/:type", getUsersByType)