import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, MenuItem, TextField, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import axios from "axios";
import { ContainerFilters } from "./TripsListPageStyles";
import { InputAdornment } from "@material-ui/core";

function TripsListPage() {
  const [destinations, setDestinations] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [planets, setPlanets] = useState([
    "Marte", "Jupiter", "Saturno"
  ])

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
      <Card sx={{ maxWidth: 300 }} key={destination.id} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {destination.date}
          </Typography>
          <Typography variant="h5" component="div">
            {destination.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {destination.durationInDays} dias
          </Typography>
          <Typography variant="body2">
            {destination.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Inscreva-se!</Button>
        </CardActions>
      </Card>
    )
  }))

  return (
    <div>
      <ContainerFilters>
        <TextField
          label="valor mínimo"
          size="small"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
        />
        <TextField
          label="valor máximo"
          size="small"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Destino"
          sx={{ m: 1, width: '25ch' }}
          size="small"
          value={"xxx"}
        // onChange={handleChange}
        >
          {planets.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Ordenar"
          sx={{ m: 1, width: '25ch' }}
          size="small"
          value={"xxx"}
        // onChange={handleChange}
        >
          {planets.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </ContainerFilters>
      {isLoading && <h2>Carregando...</h2>}
      {!isLoading && destinations && tripCards}
    </div>
  );
}

export default TripsListPage;
