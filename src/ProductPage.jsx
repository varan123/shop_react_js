import { useContext, Image } from 'react';
import { CartContext } from './context/CartContext.jsx';
import { CurrentProductContext } from './context/CurrentProductContext.jsx';
const img_src = (img) => { return new URL(img, import.meta.url).href; };

function ProductPage() {
    const { product, setProduct } = useContext(CurrentProductContext);

    return (
        <div className='product' key={product.id}>
            <img src={img_src(product.img)} alt={product.name} />
            <h2>{product.name}</h2>
            <p className='productDescription' >{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>

        </div>
    );
}

export default ProductPage;