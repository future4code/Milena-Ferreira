import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    getAllPokemons();
  }, [])

  const getAllPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(error => {
        console.log(error)
      })
  }

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  }

  const pokemonOptions = pokeList
    .map((pokemon, index) => {
      return (
        <option key={index} value={pokemon.name}>
          {pokemon.name}
        </option>
      )
    })

  return (
    <div>
      <select onChange={changePokeName}>
        {pokemonOptions}
      </select>
      {pokeName && <PokeCard pokeName={pokeName} />}
    </div>
  );
}

export default App;
