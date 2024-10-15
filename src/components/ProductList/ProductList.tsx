import React from 'react';
import styles from './style.module.css';
import Meat from "./Meat";
import Pork from "./Pork";
import Sausages from "./Sausages";
import Sets from "./Sets";

// Ваш код компонента Header
const ProductList: React.FC = () => {
    return (
        <div className='container'>
            <div className={styles.productList}>
                <Meat/>
                <Pork/>
                <Sausages/>
                <Sets/>
            </div>
        </div>
    );
};

export default ProductList;
