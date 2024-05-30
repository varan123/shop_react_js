import { useState } from 'react';
import Logo from './Logo';
import MainMenu from './MainMenu';
import { Outlet } from 'react-router-dom';


function MainPage() {
    const [cart, setCart] = useState([]);
    return (
        <>
            <header><Logo />Demo Shop v1 (React, JS)</header>
            <MainMenu cart = {cart} />
            <Outlet context={{ cart, setCart }} />
            <footer>&copy; 2024 Mike Pavlov</footer>            
        </>

    );
}

export default MainPage;