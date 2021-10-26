import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { InputsContainer } from "./LoginScreenStyles";


const LoginForm = () => {
  return (
    <form>
      <InputsContainer>
        <TextField
          name={"email"}
          label={"Email"}
          type={"email"}
          margin={"normal"}
          fullWidth
          required
        />
        <TextField
          name={"password"}
          label={"Senha"}
          type={"password"}
          margin={"normal"}
          fullWidth
          required
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 1 }}
        >Login</Button>
      </InputsContainer>
    </form>
  );
}

export default LoginForm;
