import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, MenuItem, TextField, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import axios from "axios";
import { ContainerFilters } from "./TripsListPageStyles";
import { InputAdornment } from "@material-ui/core";
import { ContainerTripCards } from "./TripsListPageStyles";
import { useHistory } from "react-router";
import { url } from "../../constants/contants";
import useRequestData from "../../hooks/useRequestData";

function TripsListPage() {
  const [trips, isLoadingTrips, errorRequest] = useRequestData(`${url}/trips`);
  // const [trips, setTrips] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [destination, setDestination] = useState("")
  const [filter, setFilter] = useState("")

  const history = useHistory();

  const goToTripDetailsPage = (trip) => {
    history.push(`trips/${trip}`)
  }

  // useEffect(() => {
  //   setIsLoading(true)
  //   axios
  //     .get(`${url}/trips`)
  //     .then(res => {
  //       setTrips(res.data.trips)
  //       setIsLoading(false)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  const tripCards = trips.map((trip => {
    return (
      <Card sx={{ maxWidth: 300 }} key={trip.id} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {trip.date}
          </Typography>
          <Typography variant="h5" component="div">
            {trip.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {trip.durationInDays} dias
          </Typography>
          <Typography variant="body2">
            {trip.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            onClick={() => goToTripDetailsPage(trip.id)}
          >
            Detalhes
          </Button>
          <Button
            variant="contained"
            size="small"
          >
            Inscreva-se!
          </Button>
        </CardActions>
      </Card>
    )
  }))

  const destinationOptions = trips.map((destination) => {
    return (
      <MenuItem key={destination.id} value={destination.planet}>
        {destination.planet}
      </MenuItem>
    )
  }
  )

  const handleDestinationOnChange = (event) => {
    setDestination(event.target.value);
  }

  const filters = ["Maior valor", "Menor valor", "Destino"]
  const filterOptions = filters.map((filter) => {
    return (
      <MenuItem key={filter} value={filter}>
        {filter}
      </MenuItem>
    )
  })

  const handleFilterOnChange = (event) => {
    setFilter(event.target.value);
  }

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
          select
          label="Destino"
          sx={{ m: 1, width: '25ch' }}
          size="small"
          value={destination}
          onChange={handleDestinationOnChange}
        >
          {destinationOptions}
        </TextField>
        <TextField
          select
          label="Ordenar por"
          sx={{ m: 1, width: '25ch' }}
          size="small"
          value={filter}
          onChange={handleFilterOnChange}
        >
          {filterOptions}
        </TextField>
      </ContainerFilters>
      <ContainerTripCards>
        {isLoading && <h2>Carregando...</h2>}
        {!isLoading && trips && tripCards}
      </ContainerTripCards>
    </div>
  );
}

export default TripsListPage;
