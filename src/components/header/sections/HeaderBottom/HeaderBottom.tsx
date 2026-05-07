import styles from './HeaderBottom.module.scss'
import MainButton from "@UI/buttons/MainButton/MainButton.tsx";
import Stats from "@components/Stats/Stats.tsx";

const HeaderBottom = () => {
    return (
        <div className={styles.bottom}>
            <Stats />

            <div className={styles.bottom__information}>
                <p className={styles.bottom__text}>18.08.2022,{' '}<span className={styles.bottom__text_accent}>каждую пятницу</span>{' '}и{' '}<span className={styles.bottom__text_accent}>под заказ</span>{' '}— от 78 000 ₽</p>
                <MainButton/>
            </div>
        </div>
    )
}

export default HeaderBottom