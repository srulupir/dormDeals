import React from 'react'
import {Header} from "../header/Header";
import {Footer} from '../footer/Footer'
import {Outlet} from "react-router-dom";
import styles from './layout.module.sass'

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            {/*<div className={styles.header}><Header></Header></div>*/}
            {/*<div className={styles.main}>*/}
            {/*    <main>*/}
            {/*        <Outlet/>*/}
            {/*    </main>*/}
            {/*</div>*/}
            {/*<div className={styles.footer}><Footer></Footer></div>*/}
            <Header></Header>
            <main>
                <Outlet/>
            </main>
            <Footer></Footer>
        </div>
    )
}