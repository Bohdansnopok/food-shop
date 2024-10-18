import React from 'react';
import {Link} from 'react-router-dom';
import styles from './style.module.css'
import brooke from '../../images/brooke-cagle.png'
import useSearch from "../../hooks/useSearch";

function CartContent() {
    const {
        searchTerm,
        handleSearchChange,
        handleSearchSubmit
    } = useSearch((term) => {

    });

    return (
        <section className={styles.cart}>
            <h1>
                Кошик
            </h1>
            <div className={styles.pageNavigation}>
                <Link to="/" className={styles.page}>Головна</Link>
                <div className={styles.minus}>
                    –
                </div>
                <Link to="/Cart" className={styles.page}>Кошик</Link>
            </div>

            <div className={styles.content}>
                <div className={styles.topContent}>
                    <div className={styles.item}>Товар</div>
                    <div className={styles.item}>Ціна</div>
                    <div className={styles.item}>Кількість</div>
                    <div className={styles.item}>Всього</div>
                </div>
            </div>

            <div className={styles.productInCart}>
                <button className={styles.dagger}>

                </button>

                <img src={brooke} alt="" height="210px" className={styles.productPhoto}/>

                <div className={styles.adaptiveWrapper}>
                    <div className={styles.productName}>
                        <div className={styles.item}>Товар</div>
                        М'ясні джерки <span>500</span>г
                    </div>

                    <div className={styles.price}>
                        <div className={styles.item}>Ціна</div>
                        ₴129
                    </div>

                    <div className={styles.item}>Кількість</div>

                    <div className={styles.quantity}>
                        1
                    </div>

                    <div className={styles.summaryPrice}>
                        ₴129
                    </div>
                </div>
            </div>

            <div className={styles.coupon}>
                <input
                    placeholder="Введіть купон"
                    type="text"
                    className={styles.couponInput}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchSubmit}
                />

                <a href="#" className={`${styles.btn} btn`}>
                    Застосувати  <span>купон</span> {/*спан для адаптива*/}
                </a>

                <a href="#" className={`${styles.btn} btn`}>
                    Оновити кошик
                </a>
            </div>

            <div className={styles.summary}>
                <div className={styles.priceSum}>
                    Підсумок: <span>₴129</span>
                </div>

                <div className="flex">
                    <div className={styles.sum}>
                        Всього: <span>₴129</span>
                    </div>
                    <button className="btn">
                        Оформити <span>замовлення</span> {/*спан для адаптива*/}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CartContent;
