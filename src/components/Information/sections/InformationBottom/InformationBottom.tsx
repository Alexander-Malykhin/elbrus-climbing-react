//styles
import styles from './InformationBottom.module.scss'

const InformationBottom = () => {
    return (
        <div className={styles.bottom}>
            <div className={styles.bottom__form}>
                <h2 className={styles.bottom__title}>
                    Как принять участие?
                </h2>

                <p className={styles.bottom__text}>
                    Вы можете <span className={styles.bottom__text__accent}>забронировать этот тур</span> прямо сейчас самостоятельно. Это займет 5 минут. Если у
                    вас остались вопросы, <span className={styles.bottom__text__accent}>свяжитесь с нами</span> удобным для вас способом.
                </p>
            </div>
        </div>
    );
};

export default InformationBottom;