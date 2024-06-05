import PropTypes from 'prop-types';
import './CartPage.css';
import { CartContext } from './context/CartContext.jsx';
import { useContext } from 'react';


function CartPage() {

    const { cart, setCart } = useContext(CartContext);
    const img_src = (img) => { return new URL(img, import.meta.url).href; };

    let returnVal = ""

    //if cart is not empty
    if (cart.length > 0) {
        returnVal = cart.map(cartLine => (
            <div className="cartLine" key={cartLine.id}>
                <img src={img_src(cartLine.img)} alt={cartLine.name} />
                <h2>{cartLine.name}</h2>
                <p>Price: ${cartLine.price.toFixed(2)}</p>
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
        //round to 2 decimal places
        total = Math.round(total * 100) / 100;
        //convert to string with 2 decimal places
        total = total.toFixed(2);
    }

    return (
        <>
            <p>Cart</p>
            {returnVal}
            <p>Total: ${total}</p>
        </>
    );
}

CartPage.propTypes = {
    cart: PropTypes.array,
    setCart: PropTypes.func
};

export default CartPage;