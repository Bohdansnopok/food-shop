import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
