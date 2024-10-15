import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer"; // Якщо ви використовуєте React

// Ваш код компонента Main
const Main: React.FC = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <ProductList/>
            <Footer/>
        </div>
    );
};

export default Main; // або інший експорт, якщо потрібно