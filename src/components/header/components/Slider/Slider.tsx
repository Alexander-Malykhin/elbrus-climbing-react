//styles
import styles from './Slider.module.scss'
//images
import heroBg from "@images/bg.png";

const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__track}>
                <article className={styles.slider__item}>
                    <img
                        src={heroBg}
                        alt=""
                        className={styles.slider__item_image}
                    />
                </article>
                <article className={styles.slider__item}>
                    <img
                        src={heroBg}
                        alt=""
                        className={styles.slider__item_image}
                    />
                </article>
                <article className={styles.slider__item}>
                    <img
                        src={heroBg}
                        alt=""
                        className={styles.slider__item_image}
                    />
                </article>
                <article className={styles.slider__item}>
                    <img
                        src={heroBg}
                        alt=""
                        className={styles.slider__item_image}
                    />
                </article>
            </div>
        </div>
    );
};

export default Slider;