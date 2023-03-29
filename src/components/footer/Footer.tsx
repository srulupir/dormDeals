import React from 'react'
import styles from './footer.module.sass'

export const Footer = () => {
    return(
        <div className={styles.footer}>
            <h6>Помощь</h6>
            <h6>Правила</h6>
            <h6>Пользовательское соглашение</h6>
        </div>
    )
}