import { Link } from 'react-router-dom';
import './MainMenu.css'
import PropTypes from 'prop-types';

function MainMenu({ cart }) {    

    //console.log('MainMenu');
    //console.log('Cart:', cart);

    //get quantity of lines in the cart
    const cartLength = cart.length;

    return (
        <>
            <nav id="main_menu">
                <Link to="/admin">Admin</Link>
                <Link to="/cart">Cart ({cartLength})</Link>
            </nav>
        </>
    );
}

MainMenu.propTypes = {
    cart: PropTypes.array
};

export default MainMenu;