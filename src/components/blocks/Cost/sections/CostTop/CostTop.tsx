//styles
import styles from './CostTop.module.scss'
//images
import InfoAltImage from '@images/assets/info-alt.svg'

const CostTop = () => {
    return (
        <div className={styles.top}>
            <article className={`${styles.top__card} ${styles.top__card__active}`}>
                <button className={`${styles.top__arrow} ${styles.top__arrow__next}`} type="button"></button>

                <h3 className={styles.top__title}>Групповой тур</h3>

                <div className={styles.top__subtitle}>
                    <span className={styles.top__subtitle_line}>Место в одном</span>
                    <span className={styles.top__subtitle_line}>из запланированных <span className={styles.top__subtitle_green}>заездов</span></span>
                </div>

                <div className={styles.top__price_box}>
                    <div className={styles.top__old_price}>110 000 ₽</div>

                    <div className={styles.top__price}>
                        <span className={styles.top__price_prefix}>от</span> 78 000 ₽
                    </div>

                    <div className={styles.top__note}>
                        Цена за 1 человека,<br/>
                        скидка до 22.07.2022
                    </div>
                </div>

                <div className={styles.top__divider}></div>

                <div className={styles.top__bottom}>
                    <div className={styles.top__booking}>
                        Для <span className={styles.top__booking_accent}>бронирования</span> достаточно<br/>
                        <b className={styles.top__booking_strong}>25 000 ₽</b>
                    </div>

                    <a href="#" className={styles.top__cancel}>
                        <img src={InfoAltImage} alt="" className={styles.top__cancel_icon}/>
                        <span className={styles.top__cancel_text}>Условия отмены</span>
                    </a>
                </div>
            </article>

            <article className={styles.top__card}>
                <button className={`${styles.top__arrow} ${styles.top__arrow__prev}`} type="button"></button>
                <h3 className={styles.top__title}>Частный тур</h3>

                <div className={styles.top__subtitle}>
                    <span className={styles.top__subtitle_line}>Для одного участника или для частной</span>
                    <span className={styles.top__subtitle_line}>группы в любые согласованные даты</span>
                </div>

                <div className={styles.top__price_box}>
                    <div className={`${styles.top__old_price} ${styles.top__old_price__empty}`}>&nbsp;</div>

                    <div className={styles.top__price}>140 000 ₽</div>

                    <div className={styles.top__note}>
                        Цена за 1 человека
                    </div>

                    <div className={styles.top__extra}>+90 000 ₽</div>

                    <div className={styles.top__note}>
                        Цена за каждого следующего<br/>
                        участника
                    </div>
                </div>

                <div className={styles.top__divider}></div>

                <div className={styles.top__bottom}>
                    <div className={styles.top__booking}>
                        Для заказа<br/>
                        <span className={styles.top__booking_accent}>свяжитесь с менеджером</span>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default CostTop;