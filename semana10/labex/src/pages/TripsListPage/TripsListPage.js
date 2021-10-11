import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { ContainerFilters } from "./TripsListPageStyles";
import ComboBox from "../../components/ComboBox/ComboBox";
import TripCard from "../../components/TripCard/TripCard";
import axios from "axios"

function TripsListPage() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-lara-maryam/trips")
      .then(res => {
        console.log("destinations: ", destinations)
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
  return (
    <div>
      <ContainerFilters>
        <Input text={"valor mínimo"} />
        <Input text={"valor máximo"} />
        <ComboBox text={"destinos"} items={destinations} />
        <ComboBox text={"ordenar"} items={destinations} />
      </ContainerFilters>
      {tripCards}
    </div>
  );
}

export default TripsListPage;
