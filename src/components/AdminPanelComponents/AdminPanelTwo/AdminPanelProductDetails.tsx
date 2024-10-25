import React, {useState} from 'react';
import dashboard from '../../../images/dashboaard.png';
import albums from '../../../images/albums.png';
import styles from './style.module.css'
import search from "../../../images/adminSearchIcon.svg";
import notifications from "../../../images/notifications.svg";
import galleryIcon from "../../../images/galleryIcon.svg";
import useSearch from "../../../hooks/useSearch";
import currentPhoto from "../../../images/currentPhoto.png"
import {Link} from "react-router-dom";

type ButtonType = 'dashboard' | 'allProducts';

function AdminPanelProductDetails() {

    const [activeButton, setActiveButton] = useState<ButtonType | null>(null);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Добавлено состояние для открытия категорий

    const handleButtonClick = (buttonName: ButtonType) => {
        setActiveButton(prev => prev === buttonName ? null : buttonName);
    };

    const toggleCategories = () => {
        setIsCategoriesOpen(prev => !prev);
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
        <section className={styles.productDetails}>
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
                        onClick={toggleSearch}
                    />
                    <input
                        type="text"
                        placeholder="search"
                        className={`${styles.headerSearch} ${isActive ? styles.active : ''}`} // додаємо клас active, якщо isActive true
                        id="headerSearch"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={handleSearchSubmit}
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
                            <span className={styles.minus}>-</span>
                            <Link to="/AdminPanelProductDetails" className={styles.page}>
                                Product Details
                            </Link>
                        </div>
                        <div className={styles.addProduct}>
                            <div>
                                <div className={styles.inputWrapper}>
                                    <label htmlFor="productName">Product Name</label>
                                    <input
                                        type="text"
                                        id={styles.productName}
                                        placeholder="Lorem Ipsum"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        onKeyDown={handleSearchSubmit}
                                    />
                                </div>

                                <div className={styles.inputWrapper}>
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description"
                                              placeholder="Lorem Ipsum Is A Dummy Text">
                                    </textarea>
                                    <div className={styles.inputWrapper}>
                                        <label htmlFor="category">Category</label>
                                        <input
                                            type="text"
                                            id={styles.category}
                                            placeholder="Sneaker"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            onKeyDown={handleSearchSubmit}
                                        />
                                    </div>

                                    <div className={styles.inputWrapper}>
                                        <label htmlFor="category">Brand Name</label>
                                        <input
                                            type="text"
                                            id={styles.category}
                                            placeholder="Addidas"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            onKeyDown={handleSearchSubmit}
                                        />
                                    </div>

                                    <div className={styles.inputWrapper}>
                                        <label htmlFor="category">Stock Quantity</label>
                                        <input
                                            type="text"
                                            id={styles.category}
                                            placeholder="Stock Quantity"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            onKeyDown={handleSearchSubmit}
                                        />
                                    </div>

                                    <div className={styles.inputWrapper}>
                                        <label htmlFor="category">Sale Price</label>
                                        <input
                                            type="text"
                                            id={styles.category}
                                            placeholder="₹450"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                            onKeyDown={handleSearchSubmit}
                                        />
                                    </div>
                                </div>

                                <div className={styles.inputWrapper}>
                                    <div className={styles.inputTitle}>
                                        Tag
                                    </div>

                                    <div className={styles.tags}>
                                        <div className={styles.tag}>
                                            Lorem
                                        </div>

                                        <div className={styles.tag}>
                                            Lorem
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.addProduct__rightContent}>
                                <div className={styles.currentPhoto}>
                                    <img src={currentPhoto} alt=""/>
                                </div>
                                <div className={styles.dropImage}>
                                    <div className={styles.title}>
                                        Product Gallery
                                    </div>
                                    <div className={styles.border}>
                                        <img src={galleryIcon} alt=""/>
                                        <div className={styles.textContent}>
                                            Drop your imager here, or browse <br/>
                                            Jpeg, png are allowed <br/>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.buttons} flex`}>
                                    <button className={`${styles.btn} btn`}>
                                        Update
                                    </button>

                                    <button className={`${styles.btn} btn`}>
                                        Delete
                                    </button>

                                    <button className={`${styles.btn} btn`}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminPanelProductDetails;
