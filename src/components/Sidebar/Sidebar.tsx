import React from 'react';
import styles from './style.module.css';
import human from '../../images/human.jpg'
import human1 from '../../images/human-1.jpg'

// Ваш код компонента Header
const Sidebar: React.FC = () => {
    return (
        <div className='container'>
            <div className={`${styles.sidebar} flex`}>
                <aside className={styles.sidebar__categories}>
                    <button className={styles.sidebar__category}>Усі</button>
                    <button className={styles.sidebar__category}>М'ясні джерки</button>
                    <button className={styles.sidebar__category}>Свинячі джерки</button>
                    <button className={styles.sidebar__category}>Ковбаски</button>
                    <button className={styles.sidebar__category}>Набори</button>
                </aside>

                <main>
                    <img src={human} alt=""/>
                    <img src={human1} alt=""/>
                </main>
            </div>
        </div>
    );
};

export default Sidebar;
