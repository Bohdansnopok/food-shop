import React from 'react';
import styles from './style.module.css';
import '../../App.css';
import searchIcon from '../../images/searchIcon.svg';
import useSearch from "../../hooks/useSearch";
import basketIcon from '../../images/basketIcon.svg';
import { Link } from 'react-router-dom';

// Ваш код компонента Header
const Header: React.FC = () => {
    const onSearch = (term: string) => {
        console.log(`Виконати пошук для: ${term}`); // Залиште це, або додайте свій код для пошуку
    };

    // Зміни: Додано використання useSearch для отримання значення та обробників
    const {
        searchTerm,
        handleSearchChange,
        handleSearchSubmit,
    } = useSearch(onSearch);

    return (
        <div>
            <div className={styles.headerTitle}>
                Найкращий смак тільки у нас
            </div>

            <header className={styles.headerContent}>
                <div className="container flex">

                    <div className={`${styles.adaptive} flex`}>
                        <label htmlFor="header__search"
                               className={`${styles.header__label} flex`}>
                            {/*`${styles.header__label} цей клас не має стилів а заданий для того щоб працювала функ. з появою інпуту*/}

                            <img src={searchIcon}
                                 alt="Що ви шукаєте?"/>
                            <div className={styles.searchText}>
                                Пошук
                            </div>
                        </label>
                        <input
                            type="text"
                            className={`${styles.header__search} header__search`}
                            id={styles.header__search}
                            placeholder='Що ви шукаєте?'
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onKeyDown={handleSearchSubmit}
                        />
                    </div>

                    <Link to="/Cart" className={styles.basket}>
                        <img src={basketIcon} alt=""/>
                        <div className="basketText">Кошик (0)</div>
                    </Link>

                    <Link to="/OrderStatus" className={styles.design}>
                        <div className="basketText">Оформлення</div>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
