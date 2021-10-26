import React from "react";
import LoginForm from "./LoginForm";
import { Button } from "@mui/material";
import { ScreenContainer } from "./LoginScreenStyles";
import { goToSignUp } from "../../router/coordinator";
import { useHistory } from "react-router";

const LoginScreen = () => {
  const history = useHistory();
  return (
    <ScreenContainer>
      <LoginForm />
      <Button
        variant="text"
        color="secondary" sx={{ mt: 1 }}
        onClick={() => goToSignUp(history)}
      >
        Não tem conta? Cadastre-se
      </Button  >
    </ScreenContainer>
  );
}

export default LoginScreen;
