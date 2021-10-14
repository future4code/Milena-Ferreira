import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

function ApplicationFormPage() {
  const [countriesList, setCountriesList] = useState([])
  const [country, setCountry] = useState()

  const importCountries = () => {
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/paises`)
      .then(response => {
        setCountriesList(response.data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    importCountries();
  }, [])


  const countryOptions = countriesList.map((country, index) => {
    return (
      <MenuItem key={index} value={country.nome}>
        {country.nome}
      </MenuItem>
    )
  })

  return (
    <div>
      <Typography variant="h4" gutterBottom component="div">
        Inscrição para Colônias marcianas
      </Typography>
      <TextField
        label="Nome"
        size="small"
        sx={{ m: 1, width: '25ch' }}
      />
      <TextField
        label="Idade"
        size="small"
        sx={{ m: 1, width: '25ch' }}
      />
      <TextField
        label="Profissão"
        size="small"
        sx={{ m: 1, width: '25ch' }}
      />
      <TextField
        select
        label="País"
        sx={{ m: 1, width: '25ch' }}
        size="small"
        value={"xxx"}
      // onChange={handleChange}
      >
        {countryOptions}
      </TextField>
    </div>
  );
}

export default ApplicationFormPage;
