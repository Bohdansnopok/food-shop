import React from 'react';
import styles from './style.module.css';
import setsPhoto from "../../images/setsPhoto.jpg";

// Ваш код компонента Header
const Sets: React.FC = () => {
    return (
        <div className={styles.productsWrapper}>
            <h2 className={styles.productList__title}>
                Набори
            </h2>

            <div className={styles.productList__cards}>
                <div className={styles.productList__card}>
                    <img src={setsPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={setsPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={setsPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={setsPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={setsPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>
                </div>

                <div className={styles.productList__card}>
                    <img src={setsPhoto} alt=""/>
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

export default Sets;