import PropTypes from 'prop-types';
import { useContext, Image } from 'react';
import { ProductsContext } from './context/ProductsContext.jsx';
import { CartContext } from './context/CartContext.jsx';
import { CurrentProductContext } from './context/CurrentProductContext.jsx';
import './ProductsForSalePage.css';
import { useNavigate } from 'react-router-dom';




function ProductsForSalePage() {
    console.log('ProductsForSale');    
    const { products, setProducts } = useContext(ProductsContext);
    const { cart, setCart } = useContext(CartContext);
    const { product, setProduct } = useContext(CurrentProductContext);
    const navigate = useNavigate();
    const img_src = (img) => { return new URL(img, import.meta.url).href; };

    return (
        <div className='products'>
            {products.map(product => (
               
                <div className='product' key={product.id}>
                    <img src={img_src(product.img)} alt={product.name} onClick={() => {
                        setProduct(product);
                        console.log('Navigate to product page:', product);
                        navigate('/product');                        
                    }} />
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

                        console.log('Add to cart:', product);
                        console.log('Cart:', cart);
                    }}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

ProductsForSalePage.propTypes = {
    currentCart: PropTypes.array,
    setCurrentCart: PropTypes.func,
    products: PropTypes.array,
    setProducts: PropTypes.func
};

export default ProductsForSalePage;