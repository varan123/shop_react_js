import './App.css'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './AdminPage.jsx'
import Cart from './Cart.jsx'
import MainPage from './MainPage.jsx'
import ProductsForSale from './ProductsForSale.jsx'


function App() {

    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route index element={<ProductsForSale />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route other element={<h1>404 - Not Found</h1>} />
            </Route>
        </Routes>
    )
}

export default App
