import PropTypes from 'prop-types';
import { useOutletContext } from "react-router-dom";
import './Cart.css';

function Cart() {

    const { cart, setCart } = useOutletContext();

    let returnVal = ""

    //if cart is not empty
    if (cart.length > 0) {
        returnVal = cart.map(cartLine => (
            <div key={cartLine.id}>
                <h2>{cartLine.name}</h2>
                <p>Price: {cartLine.price}</p>
                <p>Quantity:
                    <input className="quantity" type="number" min="1" value={cartLine.quantity} onChange={(e) => {
                        //clone the current cart
                        const cart2 = [...cart];
                        //find the cart line by product id
                        const cartLine2 = cart2.find(cartLine2 => cartLine2.id === cartLine.id);
                        //update the quantity
                        cartLine2.quantity = parseInt(e.target.value);
                        //update the cart
                        setCart(cart2);
                    }} /></p>

                <button onClick={() => {
                    //clone the current cart
                    const cart2 = [...cart];
                    //find the cart line by product id
                    const cartLine2 = cart2.find(cartLine2 => cartLine2.id === cartLine.id);
                    //update the quantity
                    cartLine2.quantity = 0;
                    //if quantity is zero
                    if (cartLine2.quantity === 0) {
                        //remove the cart line
                        cart2.splice(cart2.indexOf(cartLine2), 1);
                    }
                    //update the cart
                    setCart(cart2);
                }}>Remove from cart</button>
            </div>
        ));
    } else {
        returnVal = <p>Cart is empty</p>
    }

    //prrepare total line
    let total = 0;
    //if cart is not empty
    if (cart.length > 0) {
        //calculate total
        total = cart.reduce((acc, cartLine) => acc + cartLine.price * cartLine.quantity, 0);
    }

    return (
        <>
            <p>Cart</p>
            {returnVal}
            <p>Total: {total}</p>
        </>
    );
}

Cart.propTypes = {
    cart: PropTypes.array,
    setCart: PropTypes.func
};

export default Cart;