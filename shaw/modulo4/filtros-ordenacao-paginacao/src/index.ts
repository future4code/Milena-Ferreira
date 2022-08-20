import app from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersLimit } from "./endpoints/getUsersLimit";
import { getUsersSort } from "./endpoints/getUsersSort";

app.get("/users", getAllUsers);

app.get("/users/:type", getUsersByType);

app.get("/users/sort", getUsersSort);

app.get("/users/limit", getUsersLimit);
