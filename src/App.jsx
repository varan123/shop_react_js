import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './AdminPage.jsx'
import Cart from './Cart.jsx'
import MainPage from './MainPage.jsx'
import ProductsForSale from './ProductsForSale.jsx'
import { ProductContext } from './ProductContext.jsx'
import { CartContext } from './CartContext.jsx'
import { useState } from 'react'
import product_list from './data/product_list';


function App() {

    const [products, setProducts] = useState(product_list);
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <ProductContext.Provider value={{ products, setProducts }}>
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route index element={<ProductsForSale />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route other element={<h1>404 - Not Found</h1>} />
                    </Route>
                </Routes>
            </ProductContext.Provider >
        </CartContext.Provider>
    )
}

export default App
