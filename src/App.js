import React from 'react';
import { ReactComponent as ShoppingCart } from './assets/winkelmandje.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import ProductPage from "./pages/ProductPage";



function App() {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Ons verhaal</li>
                    <li>Blog</li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/ProductPage/:productId" element={ <ProductPage/> }/>
            </Routes>
        </>
    );
}

export default App;