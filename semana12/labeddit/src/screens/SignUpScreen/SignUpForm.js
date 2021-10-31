import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { InputsContainer } from "./SignUpStyles";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/users"
import { useHistory } from "react-router";


const SignUpForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history, setRightButtonText);
  }

  return (
    <form onSubmit={onSubmitForm}>
      <InputsContainer>
        <TextField
          name="username"
          value={form.username}
          onChange={onChange}
          label="Nome"
          type="text"
          sx={{ mb: 2 }}
          fullWidth
          required
        />
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

export default SignUpForm;
