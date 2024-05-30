import { useContext } from 'react';
import { ProductContext } from './ProductContext.jsx'
import PropTypes from 'prop-types';

function AdminPage() {

    const { products, setProducts } = useContext(ProductContext);
    console.log(products);
    console.log(setProducts);
    return (
        <p>Admin page</p>
    );
}

AdminPage.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func
}


export default AdminPage;