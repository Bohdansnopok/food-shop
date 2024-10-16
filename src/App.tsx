import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OrderStatus from "./pages/OrderStatus/OrderStatus";

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/orderStatus" element={<OrderStatus/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
