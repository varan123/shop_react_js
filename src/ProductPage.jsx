import { useContext } from 'react';
import { CartContext } from './context/CartContext.jsx';
import { CurrentProductContext } from './context/CurrentProductContext.jsx';
import './ProductPage.css';
import { useNavigate } from 'react-router-dom';

function ProductPage() {
    const { product } = useContext(CurrentProductContext);
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();
    const img_src = (img) => { return new URL(img, import.meta.url).href; };

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <div className='productPage' key={product.id}>
            <img src={img_src(product.img)} alt={product.name} />
            <h2>{product.name}</h2>
            <p className='productDescription' >{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
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
                navigate('/cart');

                console.log('Add to cart:', product);
                console.log('Cart:', cart);
            }}>Add to cart</button>
        </div>
    );
}

export default ProductPage;