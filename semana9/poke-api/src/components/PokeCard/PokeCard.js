import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    getPokemon(props.pokeName);
  }, [props.pokeName])

  const getPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setPokemon(response.data);
        console.log(pokemon)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // const pokemonTypesList = pokemon.types.map(
  //   (type, index) => {
  //     return <li key={index}>{type.name}</li>
  //   })

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {/* {pokemon.types && { pokemonTypesList }} */}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;
