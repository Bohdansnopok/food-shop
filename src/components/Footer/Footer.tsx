import React from 'react';
import styles from './style.module.css';
import logo from '../../images/logo.png'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'

// Ваш код компонента Header
const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container flex">
                <div className={styles.leftContent}>
                    <div className="flex">
                        <img src={logo} alt=""/>
                        <ul className={styles.pageNavs}>
                            <li><a href="#" className={styles.nav}>Головна</a></li>
                            <li><a href="#" className={styles.nav}>Магазин</a></li>
                            <li><a href="#" className={styles.nav}>Контакти</a></li>
                        </ul>
                    </div>

                    <div className="flex">
                        <a href='#' className={styles.protected}>
                            © Усі права захищені <br/>
                            Політика конфіденційності <br/>
                        </a>

                        <ul className={styles.foodNavs}>
                            <li><a href="#" className={styles.nav}>М'ясні джерки</a></li>
                            <li><a href="#" className={styles.nav}>Свинячі джерки</a></li>
                            <li><a href="#" className={styles.nav}>Ковбаски</a></li>
                            <li><a href="#" className={styles.nav}>Набори</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.contactWithUs}>
                    <a href="#" className={styles.number}>+380636278899</a>
                    <a href="#" className={styles.gmail}>makajerky.com</a>
                    <div className={styles.ourSocials}>
                        <a href="#" className={styles.ourSocial}>
                            <img src={facebook} alt=""/>
                        </a>
                        <a href="#" className={styles.ourSocial}>
                            <img src={instagram} alt=""/>
                        </a>
                        <a href="#" className={styles.ourSocial}>
                            <img src={twitter} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
