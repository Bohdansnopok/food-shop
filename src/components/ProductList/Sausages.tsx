import React from 'react';
import styles from './style.module.css';
import foodPhoto from "../../images/foodPhoto2.jpg";

// Ваш код компонента Header
const Sausages: React.FC = () => {
    return (
        <div className={styles.productsWrapper}>
            <h2 className={styles.productList__title}>
                Ковбаски
            </h2>

            <div className={styles.productList__cards}>
                <div className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sausages;