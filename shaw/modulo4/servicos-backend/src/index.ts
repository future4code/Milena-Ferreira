import app from "./app";
import createAddress from "./endpoints/createAddress";

app.post("/:cep", createAddress);