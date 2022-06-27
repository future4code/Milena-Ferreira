import app from "./app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getUserById from "./endpoints/getUserById";

app.get("/user/:id", getUserById);

app.post("/user", createUser);

app.post("/task", createTask);

app.put("/user/edit/:id", editUser);