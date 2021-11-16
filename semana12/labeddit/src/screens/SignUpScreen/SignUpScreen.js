import React from "react";
import SignUpForm from "./SignUpForm";
import { Button } from "@mui/material";
import { ScreenContainer } from "./SignUpStyles";
import { goToLogin } from "../../router/coordinator";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpScreen = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const history = useHistory();
  return (
    <ScreenContainer>
      <SignUpForm setRightButtonText={setRightButtonText} />
      <Button
        variant="text"
        color="secondary" sx={{ mt: 1 }}
        onClick={() => goToLogin(history)}
      >
        Já tem uma conta? Faça login
      </Button>
    </ScreenContainer>
  );
}

export default SignUpScreen;
