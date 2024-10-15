import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductList from "../../components/ProductList/ProductList"; // Якщо ви використовуєте React

// Ваш код компонента Main
const Main: React.FC = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <ProductList/>
        </div>
    );
};

export default Main; // або інший експорт, якщо потрібно