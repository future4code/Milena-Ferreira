import React from "react";
import LoginForm from "./LoginForm";
import { Button } from "@mui/material";
import { ScreenContainer } from "./LoginScreenStyles";

const LoginScreen = () => {
  return (
    <ScreenContainer>
      <LoginForm />
      <Button variant="text" color="secondary">Não tem conta? Cadastre-se</Button>

    </ScreenContainer>
  );
}

export default LoginScreen;
