import React from "react";
import LoginForm from "./LoginForm";
import { Button } from "@mui/material";
import { ScreenContainer } from "./LoginScreenStyles";
import { goToSignUp } from "../../router/coordinator";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginScreen = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useHistory();
  return (
    <ScreenContainer>
      <LoginForm setRightButtonText={setRightButtonText} />
      <Button
        variant="text"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={() => goToSignUp(history)}
      >
        Não tem conta? Cadastre-se
      </Button>
    </ScreenContainer>
  );
}

export default LoginScreen;
