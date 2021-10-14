import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ContainerForm, ContainerButtons } from "./ApplicationFormPageStyles";

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
    <ContainerForm>
      <Typography variant="h4" gutterBottom component="div">
        Inscrição para Colônias marcianas
      </Typography>
      <TextField
        label="Nome"
        size="small"
        sx={{ m: 1, width: '50ch' }}
      />
      <TextField
        label="Idade"
        size="small"
        sx={{ m: 1, width: '50ch' }}
      />
      <TextField
        label="Profissão"
        size="small"
        sx={{ m: 1, width: '50ch' }}
      />
      <TextField
        select
        label="País"
        sx={{ m: 1, width: '50ch' }}
        size="small"
        value={"xxx"}
      // onChange={handleChange}
      >
        {countryOptions}
      </TextField>
      <TextField
        id="outlined-multiline-static"
        label="Texto de candidatura"
        sx={{ m: 1, width: '50ch' }}
        multiline
        rows={4}
        placeholder="Por que você merece fazer uma viagem espacial com a gente?0"
      />
      <ContainerButtons>
        <Button variant="outlined">Voltar</Button>
        <Button variant="contained">Enviar</Button>
      </ContainerButtons>
    </ContainerForm>
  );
}

export default ApplicationFormPage;
