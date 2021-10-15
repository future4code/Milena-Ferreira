import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData"
import { useHistory, useParams } from "react-router";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ContainerForm, ContainerButtons } from "./ApplicationFormPageStyles";

function ApplicationFormPage() {
  const history = useHistory();
  const params = useParams();
  const countries = useRequestData("https://servicodados.ibge.gov.br/api/v1/paises", [])

  const countryOptions = countries.map((country, index) => {
    return (
      <MenuItem key={index} value={country.nome.abreviado}>
        {country.nome.abreviado}
      </MenuItem>
    )
  })

  const goBack = () => {
    history.goBack()
  }
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
        value={""}
      // onChange={handleChange}
      >
        {countries && countryOptions}
      </TextField>
      <TextField
        id="outlined-multiline-static"
        label="Texto de candidatura"
        sx={{ m: 1, width: '50ch' }}
        multiline
        rows={4}
        placeholder="Por que você merece fazer uma viagem espacial com a gente?"
      />
      <ContainerButtons>
        <Button variant="outlined" onClick={() => goBack()}>Voltar</Button>
        <Button variant="contained">Enviar</Button>
      </ContainerButtons>
    </ContainerForm>
  );
}

export default ApplicationFormPage;
