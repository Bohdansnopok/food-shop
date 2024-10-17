import React from 'react';
import Sidebar from "../../components/MainPageComponents/Sidebar/Sidebar";
import ProductList from "../../components/MainPageComponents/ProductList/ProductList";

// Ваш код компонента Main
const Main: React.FC = () => {
    return (
        <div>
            <Sidebar/>
            <ProductList/>
        </div>
    );
};

export default Main; // або інший експорт, якщо потрібно