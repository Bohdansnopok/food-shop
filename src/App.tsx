import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OrderStatus from "./pages/OrderStatus/OrderStatus";
import PlacingOrder from "./pages/PlacingOrder/PlacingOrder";
import Contacts from "./pages/Contacts/ContactsPage";
import ContactsPage from "./pages/Contacts/ContactsPage";

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/orderStatus" element={<OrderStatus/>}/>
                <Route path="/placingOrder" element={<PlacingOrder/>}/>
                <Route path="/contactsPage" element={<ContactsPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
