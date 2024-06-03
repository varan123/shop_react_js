import './Logo.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';


function Logo() {
    return (
        <Link className='logo' to='/'>
            <img src={logo} alt= 'Logo' />
        </Link >
  );
}

export default Logo;