import React from 'react';
import Sidebar from "../../components/MainPageComponents/Sidebar/Sidebar";
import ProductList from "../../components/MainPageComponents/ProductList/ProductList";

const Main: React.FC = () => {
    return (
        <div>
            <Sidebar/>
            <ProductList/>
        </div>
    );
};

export default Main;