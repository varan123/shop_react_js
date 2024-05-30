import logo from "./images/logo.png"
import { Link } from 'react-router-dom';


function Logo() {
    return (
        <Link to='/'>
            <img src={logo} alt= 'Logo' />
        </Link >
  );
}

export default Logo;