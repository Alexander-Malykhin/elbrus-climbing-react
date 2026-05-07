import styles from './MainSelect.module.scss'

const MainSelect = () => {
    return (
        <div className={styles.container}>
            <select className={styles.select}>
                <option value="usd" className={styles.select__item}>USD</option>
                <option value="eur" className={styles.select__item}>EUR</option>
                <option value="rub" className={styles.select__item}>RUB</option>
            </select>
        </div>
    )
}

export default MainSelect