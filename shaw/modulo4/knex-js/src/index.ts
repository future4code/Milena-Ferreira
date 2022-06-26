import app from "./app";
import changeSalary from "./endpoints/changeSalary";
import countActorsByGender from "./endpoints/countActorsByGender";
import createActor from "./endpoints/createActor";
import getActorById from "./endpoints/getActorById";
import getActorByName from "./endpoints/getActorByName";
import removeActor from "./endpoints/removeActor";

app.get("/actor", getActorByName);

app.get("/actor/count", countActorsByGender);

app.get("/actor/salary",);

app.get("/actor/:id", getActorById);

app.post("/actor", createActor)

app.put("/actor", changeSalary);

app.delete("/actor/:id", removeActor);