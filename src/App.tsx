import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OrderStatus from "./pages/OrderStatus/OrderStatus";
import PlacingOrder from "./pages/PlacingOrder/PlacingOrder";
import ContactsPage from "./pages/Contacts/ContactsPage";
import OneItemPage from "./pages/OneItemPage/OneItemPage";
import Admin from "./pages/Admin/Admin";
import AdminProductDetails from "./pages/AdminProductDetails/AdminProductDetails";

const App = () => {
    return (
        <Router>
            <div className="siteWrapper">
                <Header/>
                <div className="siteContent">
                <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/orderStatus" element={<OrderStatus/>}/>
                        <Route path="/placingOrder" element={<PlacingOrder/>}/>
                        <Route path="/contactsPage" element={<ContactsPage/>}/>
                        <Route path="/oneItemPage" element={<OneItemPage/>}/>
                        <Route path="/adminPanel" element={<Admin/>}/>
                        <Route path="/adminPanelProductDetails" element={<AdminProductDetails/>}/>
                </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
