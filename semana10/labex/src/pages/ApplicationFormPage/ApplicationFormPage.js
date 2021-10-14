import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

function ApplicationFormPage() {
  const [countries, setCountries] = useState()

  const importCountries = () => {
    axios
      .get(`https://restcountries.com/v2/all?fields=name`)
      .then(response => setCountries(response.data))
      .catch(error => console.log(error))
  }

  //FAZER FOR LOOP DENTRO DAS LISTAS PARA PEGAR O NOME DOS PAÍSES

  useEffect(() => {
    importCountries();
  }, [])

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
        id="outlined-select-currency"
        select
        label="Destino"
        sx={{ m: 1, width: '25ch' }}
        size="small"
        value={"xxx"}
      // onChange={handleChange}
      >
        <MenuItem>
          xxxxxx
        </MenuItem>
      </TextField>
    </div>
  );
}

export default ApplicationFormPage;
