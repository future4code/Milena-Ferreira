import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import logo from "../../assets/logo.png"
import { ImgWrapper, HeaderContainer } from './HeaderStyles';
import { goToFeed, goToLogin } from '../../router/coordinator';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();

  return (
    <AppBar position="static">
      <HeaderContainer>
        <Button onClick={() => goToFeed(history)}>
          <ImgWrapper src={logo} alt="logo" />
        </Button>
        <Button color="inherit" onClick={() => goToLogin(history)}> Login</Button>
      </HeaderContainer>
    </AppBar >
  );
}

export default Header;