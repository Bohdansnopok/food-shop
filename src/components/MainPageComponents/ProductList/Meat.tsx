import React from 'react';
import styles from './style.module.css';
import foodPhoto from "../../../images/foodPhoto.jpg";
import { Link } from 'react-router-dom';

// Ваш код компонента Header
const Meat: React.FC = () => {
    return (
        <div>
            <h2 className={styles.productList__title}>
                М'ясні джерки
            </h2>

            <section className={styles.productList__cards}>
                <Link to="/OneItemPage" className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Кунжут
                    </div>
                    <div className={styles.productPrice}>
                        240₴
                    </div>
                    <div className={styles.productDescription}>
                        *Пориньте у світ насиченого смаку <br/>
                        з нашим натуральним <br/>
                        сушеним м’ясом з відбірної курки <br/>
                        та свинини. Ми ретельно <br/>
                        відбираємо лише найкращі <br/>
                        шматки м’яса, щоб гарантувати <br/>
                        найвищу якість і насиченість <br/>
                        кожного кусочка. <br/>
                        <br/>
                        Натисніть щоб дізнатися більше <br/>
                        або зробити замовлення <br/>
                    </div>
                </Link>

                <a href="#" className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Спайсі
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>

                    <div className={styles.productDescription}>
                        *Пориньте у світ насиченого смаку <br/>
                        з нашим натуральним <br/>
                        сушеним м’ясом з відбірної курки <br/>
                        та свинини. Ми ретельно <br/>
                        відбираємо лише найкращі <br/>
                        шматки м’яса, щоб гарантувати <br/>
                        найвищу якість і насиченість <br/>
                        кожного кусочка. <br/>
                        <br/>
                        Натисніть щоб дізнатися більше <br/>
                        або зробити замовлення <br/>
                    </div>
                </a>

                <a href="#" className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Часник
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>

                    <div className={styles.productDescription}>
                        *Пориньте у світ насиченого смаку <br/>
                        з нашим натуральним <br/>
                        сушеним м’ясом з відбірної курки <br/>
                        та свинини. Ми ретельно <br/>
                        відбираємо лише найкращі <br/>
                        шматки м’яса, щоб гарантувати <br/>
                        найвищу якість і насиченість <br/>
                        кожного кусочка. <br/>
                        <br/>
                        Натисніть щоб дізнатися більше <br/>
                        або зробити замовлення <br/>
                    </div>
                </a>

                <a href="#" className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Fur Bumer
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>

                    <div className={styles.productDescription}>
                        *Пориньте у світ насиченого смаку <br/>
                        з нашим натуральним <br/>
                        сушеним м’ясом з відбірної курки <br/>
                        та свинини. Ми ретельно <br/>
                        відбираємо лише найкращі <br/>
                        шматки м’яса, щоб гарантувати <br/>
                        найвищу якість і насиченість <br/>
                        кожного кусочка. <br/>
                        <br/>
                        Натисніть щоб дізнатися більше <br/>
                        або зробити замовлення <br/>
                    </div>
                </a>

                <a href="#" className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Fur Bumer
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>

                    <div className={styles.productDescription}>
                        *Пориньте у світ насиченого смаку <br/>
                        з нашим натуральним <br/>
                        сушеним м’ясом з відбірної курки <br/>
                        та свинини. Ми ретельно <br/>
                        відбираємо лише найкращі <br/>
                        шматки м’яса, щоб гарантувати <br/>
                        найвищу якість і насиченість <br/>
                        кожного кусочка. <br/>
                        <br/>
                        Натисніть щоб дізнатися більше <br/>
                        або зробити замовлення <br/>
                    </div>
                </a>

                <a href="#" className={styles.productList__card}>
                    <img src={foodPhoto} alt=""/>
                    <div className={styles.productName}>
                        Fur Bumer
                    </div>

                    <div className={styles.productPrice}>
                        240₴
                    </div>

                    <div className={styles.productDescription}>
                        *Пориньте у світ насиченого смаку <br/>
                        з нашим натуральним <br/>
                        сушеним м’ясом з відбірної курки <br/>
                        та свинини. Ми ретельно <br/>
                        відбираємо лише найкращі <br/>
                        шматки м’яса, щоб гарантувати <br/>
                        найвищу якість і насиченість <br/>
                        кожного кусочка. <br/>
                        <br/>
                        Натисніть щоб дізнатися більше <br/>
                        або зробити замовлення <br/>
                    </div>
                </a>
            </section>
        </div>
    );
};

export default Meat;