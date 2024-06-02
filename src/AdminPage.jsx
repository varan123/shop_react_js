import { useContext } from 'react';
import { ProductContext } from './ProductContext.jsx'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const addNewProduct = (e, products, setProducts) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const newProduct = {
        id: products.length + 1,
        name: name,
        description: description,
        price: price
    }
    setProducts([...products, newProduct]);
    e.target.name.value = '';
    e.target.description.value = '';
    e.target.price.value = '';
}

function AdminPage() {
    const navigate = useNavigate();

    const { products, setProducts } = useContext(ProductContext);
    console.log(products);
    console.log(setProducts);
    return (
        <>
            <p>Admin page</p>
            <form onSubmit={(e) => {
                if (isNaN(e.target.price.value)) {
                    alert('Price must be a number');
                    return;
                }
                addNewProduct(e, products, setProducts);
                navigate("/");
            }}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label><br />
                <label>
                    Description:
                    <input type="text" name="description" />
                </label><br />
                <label>
                    Price:
                    <input type="text" name="price" />
                </label><br />
                <button type="submit">Create</button>
            </form>
        </>
    );
}

AdminPage.propTypes = {
    products: PropTypes.array,
    setProducts: PropTypes.func
}


export default AdminPage;