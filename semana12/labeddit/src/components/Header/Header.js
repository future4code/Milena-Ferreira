import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import logo from "../../assets/logo.png"
import { ImgWrapper, HeaderContainer } from './HeaderStyles';
import { goToFeed, goToLogin } from '../../router/coordinator';
import { useHistory } from 'react-router';
import { useState } from 'react';

const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  }

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  }

  return (
    <AppBar position="static">
      <HeaderContainer>
        <Button onClick={() => goToFeed(history)}>
          <ImgWrapper src={logo} alt="logo" />
        </Button>
        <Button color="inherit" onClick={rightButtonAction}>{rightButtonText}</Button>
      </HeaderContainer>
    </AppBar >
  );
}

export default Header;