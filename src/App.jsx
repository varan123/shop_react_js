import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './AdminPage.jsx'
import CartPage from './CartPage.jsx'
import MainPage from './MainPage.jsx'
import ProductsForSalePage from './ProductsForSalePage.jsx'
import ProductPage from './ProductPage.jsx';
import { ProductsContext } from './context/ProductsContext.jsx'
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
                <ProductsContext.Provider value={{ products, setProducts }}>
                    <Routes>
                        <Route path="/" element={<MainPage />}>
                            <Route index element={<ProductsForSalePage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/product" element={<ProductPage />} />
                            <Route other element={<h1>404 - Not Found</h1>} />
                        </Route>
                    </Routes>
                </ProductsContext.Provider >
            </CartContext.Provider>
        </CurrentProductContext.Provider>
    )
}

export default App
