import React from 'react'
import styles from './header.module.sass'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.rightSide}>
                <div className={styles.logo}>
                    <div>logo</div>
                    <nav>
                        <h1>
                            <NavLink to="/home">DormDeals</NavLink>
                        </h1>
                    </nav>

                </div>
                <div className={styles.search}>
                    <button>Категории</button>
                    <input className={styles.inputHeader} type="text"/>
                </div>
            </div>

            <ul className={styles.options}>
                <nav className={styles.navList}>
                    <li><h6>Войти</h6></li>
                    <li><h6>Регистрация</h6></li>
                    <li><NavLink to='/orders'><h6>Заказы</h6></NavLink>
                    </li>
                    <li><NavLink to='/cart'><h6>Корзина</h6></NavLink>
                    </li>
                    <li><h6>Выбрать дом</h6></li>
                    <li><NavLink to='/becomeseller'><h6>Стать продавцом</h6></NavLink>
                    </li>
                </nav>


            </ul>
        </div>
    )
}