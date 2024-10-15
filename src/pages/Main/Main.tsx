import React from 'react';
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar"; // Якщо ви використовуєте React

// Ваш код компонента Main
const Main: React.FC = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
        </div>
    );
};

export default Main; // або інший експорт, якщо потрібно