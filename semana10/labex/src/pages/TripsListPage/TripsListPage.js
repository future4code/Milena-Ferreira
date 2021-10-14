import React, { useEffect, useState } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import TripCard from "../../components/TripCard/TripCard";
import axios from "axios";

function TripsListPage() {
  const [destinations, setDestinations] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [planet, setPlanet] = useState("");

  const handlePlanet = (event) => {
    setPlanet(event.target.value);
  }

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-lara-maryam/trips")
      .then(res => {
        setDestinations(res.data.trips)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const tripCards = destinations.map((destination => {
    return (
      <TripCard key={destination.id}
        name={destination.name}
        date={destination.date}
        duration={destination.durationInDays}
        description={destination.description} />
    )
  }))

  const filtrosOrdenacao = ["maior preço", "menor preço", "destino"];
  return (
    <div>
      <div>
        <TextField
          id="standard-helperText"
          label="Valor mínimo"
          placeholder="R$"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Valor máximo"
          placeholder="R$"
          variant="standard"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Destino"
          value={planet}
          onChange={handlePlanet}
          helperText="Selecione o planeta destino"
          variant="standard"
        >
          {destinations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {isLoading && <h2>Carregando...</h2>}
      {!isLoading && destinations && tripCards}
    </div>
  );
}

export default TripsListPage;
