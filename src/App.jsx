import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './AdminPage.jsx'
import Cart from './Cart.jsx'
import MainPage from './MainPage.jsx'
import ProductsForSale from './ProductsForSale.jsx'
import ProductPage from './ProductPage.jsx';
import { ProductContext } from './context/ProductContext.jsx'
import { CartContext } from './context/CartContext.jsx'
import { CurrentProductContext } from './context/CurrentProductContext.jsx'
import { useState } from 'react';
import product_list from './data/product_list';


function App() {

    const [products, setProducts] = useState(product_list);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState(null);

    return (
        <CurrentProductContext.Provider value={{ product, setProduct }}>
            <CartContext.Provider value={{ cart, setCart }}>
                <ProductContext.Provider value={{ products, setProducts }}>
                    <Routes>
                        <Route path="/" element={<MainPage />}>
                            <Route index element={<ProductsForSale />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/product" element={<ProductPage />} />
                            <Route other element={<h1>404 - Not Found</h1>} />
                        </Route>
                    </Routes>
                </ProductContext.Provider >
            </CartContext.Provider>
        </CurrentProductContext.Provider>
    )
}

export default App
