import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { InputsContainer } from "./LoginScreenStyles";
import useForm from "../../hooks/useForm";
import { login } from "../../services/users";
import { useHistory } from "react-router";

const LoginForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setRightButtonText);
  }

  return (
    <form onSubmit={onSubmitForm}>
      <InputsContainer>
        <TextField
          name="email"
          value={form.email}
          onChange={onChange}
          label="Email"
          type="email"
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <TextField
          name="password"
          value={form.password}
          onChange={onChange}
          label="Senha"
          type="password"
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          type="submit"
        >Login</Button>
      </InputsContainer>
    </form>
  );
}

export default LoginForm;
