//styles
import styles from './ProgramTop.module.scss'

const ProgramTop = () => {
    return (
        <div className={styles.top}>
            <div className={styles.top__details}>
                <h1 className={styles.top__description_title}>О программе</h1>

                <p className={styles.top__description_text}>
                    Самая популярная и относительно легкая программа <span
                    className={styles.top__description_text__accent}>восхождения на Эльбрус</span> -
                    напрямую от местного туроператора. Проводим эту программу уже 15 лет. На ваш выбор -
                    один из 30
                    регулярных заездов с апреля по октябрь 2025. (С ноября по март мы проводим <span
                    className={styles.top__description_text__accent}>
                    Зимнее восхождение на Эльбрус</span>). В наших группах участники со всего мира, в том числе
                    Англия, США и западная Европа - инструктаж на трех языках (RU, EN, ES). В группе не
                    более 8
                    человек, на группу 2 гида. Скидка при раннем бронировании. Визовая поддержка.
                </p>
            </div>

            <div className={styles.top__details}>
                <p className={styles.top__details_text}>
                    <span className={styles.top__details__accent}>Старт:</span> Интурист, пл. Ленина,
                    13,
                    Пятигорск, Ставропольский край 357503, Россия
                </p>

                <p className={styles.top__details_text}>
                    <span className={styles.top__details__accent}>Финиш:</span> Интурист, пл. Ленина,
                    13,
                    Пятигорск, Ставропольский край 357503, Россия
                </p>
            </div>
        </div>
    );
};

export default ProgramTop;