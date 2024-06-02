import Logo from './Logo';
import MainMenu from './MainMenu';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


function MainPage() {

    const { cart, setCart } = useContext(CartContext);
    
    return (
        <>
            <header><Logo />Demo Shop v1 (React, JS)</header>
            <MainMenu cart = {cart} />
            <Outlet />
            <footer>&copy; 2024 Mike Pavlov</footer>            
        </>

    );
}

export default MainPage;