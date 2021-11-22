import express, { Express, Request, Response } from "express";
import cors from "cors";
import { countries } from "./data";
import { country } from "./types";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor funcionando");
})

// endpoint 1
app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map((country: country) => {
        return {
            id: country.id,
            name: country.name
        }
    })
    res.status(200).send(result);
})

// endpoint 3
app.get("countries/search", (req: Request, res: Response) => {
    let result: country[] = countries;
    const countryName: string = req.query.name as string;
    const countryCapital : string = req.query.capital as string;
    const countryContinent : string = req.query.continent as string;

    if (countryName) {
        result = result.filter((country) => {
            country.name === countryName;
        })
    }

    if (countryCapital) {
        result = result.filter((country)=> {
            country.capital === countryCapital;
        })
    }

    if (countryContinent) {
        result.filter((country)=> {
            country.continent === countryContinent;
        })
    }
}
)


// endpoint 2
app.get("countries/:id", (req: Request, res: Response) => {
    const result: country[] = countries
        .filter((country) => country.id === Number(req.params.id));

    if (result.length > 0) {
        res.status(200).send(result);
    } else {
        res.status(404).send("País não encontrado");
    }
})