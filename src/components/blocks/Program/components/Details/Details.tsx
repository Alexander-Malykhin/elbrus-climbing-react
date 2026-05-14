// styles
import styles from './Details.module.scss';

const Details = () => {
    return (
        <div className={styles.details}>
            <p className={styles.details__text}>
                <span className={styles.details__accent}>Старт:</span> Интурист, пл.
                Ленина, 13, Пятигорск, Ставропольский край 357503, Россия
            </p>

            <p className={styles.details__text}>
                <span className={styles.details__accent}>Финиш:</span> Интурист, пл.
                Ленина, 13, Пятигорск, Ставропольский край 357503, Россия
            </p>
        </div>
    );
};

export default Details;