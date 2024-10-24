import React, {useEffect, useState} from 'react';
import dashboard from '../../images/dashboaard.png';
import albums from '../../images/albums.png';
import documentText from '../../images/document-text.png';
import search from '../../images/adminSearchIcon.svg';
import notifications from '../../images/notifications.svg';
import addCircle from '../../images/AddCircle.svg';
import battery from '../../images/battery.jpg';
import styles from './style.module.css';
import useSearch from "../../hooks/useSearch";
import {Link} from 'react-router-dom';

type ButtonType = 'dashboard' | 'allProducts' | 'orderList';

function AdminPanel() {
    const [activeButton, setActiveButton] = useState<ButtonType | null>(null);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Добавлено состояние для открытия категорий

    const handleButtonClick = (buttonName: ButtonType) => {
        setActiveButton(prev => prev === buttonName ? null : buttonName);
    };

    const toggleCategories = () => {
        setIsCategoriesOpen(prev => !prev); // Переключение состояния категорий
    };

    const [isActive, setIsActive] = useState(false);

    const toggleSearch = () => {
        setIsActive(!isActive); // змінюємо стан
    };

    const {searchTerm, handleSearchChange, handleSearchSubmit} = useSearch((term) => {
        console.log('Searching for:', term);
    });

    const toggleSearchInput = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <section className={styles.sidebar}>
            <aside className={styles.leftContent}>
                <div className={styles.logoText}>
                    MAKAJERKY
                </div>

                <div className={styles.globalCategories}>
                    <button
                        className={`${styles.globalCategory} ${activeButton === 'dashboard' ? styles.active : ''}`}
                        onClick={() => handleButtonClick('dashboard')}
                    >
                        <img src={dashboard} alt="Dashboard"/>
                        Dashboard
                    </button>

                    <button
                        className={`${styles.globalCategory} ${activeButton === 'allProducts' ? styles.active : ''}`}
                        onClick={() => handleButtonClick('allProducts')}
                    >
                        <img src={albums} alt="All Products"/>
                        All products
                    </button>

                    <button
                        className={`${styles.globalCategory} ${activeButton === 'orderList' ? styles.active : ''}`}
                        onClick={() => handleButtonClick('orderList')}
                    >
                        <img src={documentText} alt="Order List"/>
                        Order list
                    </button>
                </div>

                <div className={styles.meatCategories}>
                    <div className={styles.openCategories} onClick={toggleCategories}>
                        Categories
                        <span className={`${styles.arrow} ${isCategoriesOpen ? styles.up : ''}`}>
                        </span>
                    </div>

                    {isCategoriesOpen && (
                        <>
                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>
                        </>
                    )}
                </div>
            </aside>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <img
                        src={search}
                        alt="search icon"
                        id="inputIcon"
                        onClick={toggleSearch} // додаємо обробник кліку
                    />
                    <input
                        type="text"
                        placeholder="search"
                        className={`${styles.headerSearch} ${isActive ? styles.active : ''}`} // додаємо клас active, якщо isActive true
                        id="headerSearch"
                        value={searchTerm} // контролюємо значення
                        onChange={handleSearchChange} // обробник зміни
                        onKeyDown={handleSearchSubmit} // обробник натискання клавіші
                    />

                    <button className={styles.notificationsIcon}>
                        <img src={notifications} alt=""/>
                    </button>

                    <div className={`${styles.adminBtn} btn`}>
                        Admin
                        <span className={`${styles.arrow} ${isCategoriesOpen ? styles.up : ''}`}>
                    </span>
                    </div>
                </header>
                <div className={styles.content}>
                    <div className={styles.topContent}>
                        <div>
                            <div className={styles.title}>
                                All Products
                            </div>

                            <div className='flex'>
                                <Link to="/" className={styles.page}>
                                    Home
                                </Link>
                                <span className={styles.minus}>-</span>
                                <Link to="/AdminPanel" className={styles.page}>
                                    All Products
                                </Link>
                            </div>
                        </div>

                        <button className={`${styles.addNewBtn} btn`}>
                            <img src={addCircle} alt=""/>
                            ADD NEW PRODUCT
                        </button>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.flex}>
                                <img src={battery} alt=""/>
                                <div className={styles.cardInfo}>
                                    <div>Lorem Ipsum</div>
                                    <div className={styles.product}>Battery</div>
                                    <div className={styles.price}>₹110.40</div>
                                </div>
                                <button className={styles.dots}>
                                    ...
                                </button>
                            </div>

                            <div className={styles.description}>
                                <div className={styles.title}>Summary</div>
                                Lorem ipsum is placeholder text commonly used <br/>
                                in the graphic. <br/>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.flex}>
                                <img src={battery} alt=""/>
                                <div className={styles.cardInfo}>
                                    <div>Lorem Ipsum</div>
                                    <div className={styles.product}>Battery</div>
                                    <div className={styles.price}>₹110.40</div>
                                </div>
                                <button className={styles.dots}>
                                    ...
                                </button>
                            </div>

                            <div className={styles.description}>
                                <div className={styles.title}>Summary</div>
                                Lorem ipsum is placeholder text commonly used <br/>
                                in the graphic. <br/>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.flex}>
                                <img src={battery} alt=""/>
                                <div className={styles.cardInfo}>
                                    <div>Lorem Ipsum</div>
                                    <div className={styles.product}>Battery</div>
                                    <div className={styles.price}>₹110.40</div>
                                </div>
                                <button className={styles.dots}>
                                    ...
                                </button>
                            </div>

                            <div className={styles.description}>
                                <div className={styles.title}>Summary</div>
                                Lorem ipsum is placeholder text commonly used <br/>
                                in the graphic. <br/>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.flex}>
                                <img src={battery} alt=""/>
                                <div className={styles.cardInfo}>
                                    <div>Lorem Ipsum</div>
                                    <div className={styles.product}>Battery</div>
                                    <div className={styles.price}>₹110.40</div>
                                </div>
                                <button className={styles.dots}>
                                    ...
                                </button>
                            </div>

                            <div className={styles.description}>
                                <div className={styles.title}>Summary</div>
                                Lorem ipsum is placeholder text commonly used <br/>
                                in the graphic. <br/>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.flex}>
                                <img src={battery} alt=""/>
                                <div className={styles.cardInfo}>
                                    <div>Lorem Ipsum</div>
                                    <div className={styles.product}>Battery</div>
                                    <div className={styles.price}>₹110.40</div>
                                </div>
                                <button className={styles.dots}>
                                    ...
                                </button>
                            </div>

                            <div className={styles.description}>
                                <div className={styles.title}>Summary</div>
                                Lorem ipsum is placeholder text commonly used <br/>
                                in the graphic. <br/>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.flex}>
                                <img src={battery} alt=""/>
                                <div className={styles.cardInfo}>
                                    <div>Lorem Ipsum</div>
                                    <div className={styles.product}>Battery</div>
                                    <div className={styles.price}>₹110.40</div>
                                </div>
                                <button className={styles.dots}>
                                    ...
                                </button>
                            </div>

                            <div className={styles.description}>
                                <div className={styles.title}>Summary</div>
                                Lorem ipsum is placeholder text commonly used <br/>
                                in the graphic. <br/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sliderButtons}>
                        <button className={styles.sliderButton}>Prev</button>
                        <button className={styles.sliderButton}>1</button>
                        <button className={styles.sliderButton}>2</button>
                        <button className={styles.sliderButton}>3</button>
                        <button className={styles.sliderButton}>4</button>
                        <button className={styles.sliderButton}>5</button>
                        <button className={styles.sliderButton}>Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminPanel;
