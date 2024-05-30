import product_list from './data/product_list';
import PropTypes from 'prop-types';
import { useOutletContext } from "react-router-dom";


function ProductsForSale() {
    console.log('ProductsForSale');
    const { cart, setCart } = useOutletContext();
    return (
        <>
            {product_list.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <button onClick={() => {
                        //prepare cart line
                        //cart line is project plus quantity

                        //get cart line by product id
                        const cartLine = cart.find(cartLine => cartLine.id === product.id);
                        //if cart line exists
                        if (cartLine) {
                            //clone the current cart
                            const cart2 = [...cart];
                            //find the cart line by product id
                            const cartLine2 = cart2.find(cartLine => cartLine.id === product.id);
                            //update the quantity
                            cartLine2.quantity++;
                            //update the cart
                            setCart(cart2);
                        } else {
                            //clone the current cart
                            const cart2 = [...cart];
                            //add the product to the cart
                            cart2.push({ ...product, quantity: 1 });
                            //update the cart
                            setCart(cart2);
                            console.log('Cart:', cart);
                        }

                        console.log('Add to cart:', product);
                        console.log('Cart:', cart);
                    }}>Add to cart</button>
                </div>
            ))}
        </>
    );
}

ProductsForSale.propTypes = {
    currentCart: PropTypes.array,
    setCurrentCart: PropTypes.func
};

export default ProductsForSale;