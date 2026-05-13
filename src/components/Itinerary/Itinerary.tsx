//styles
import styles from './Itinerary.module.scss';
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
import SectionLine from "@components/SectionLine/SectionLine.tsx";

const Itinerary = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.itinerary}>
                <SectionLine current={4} total={9}/>

                <h2 className={`${styles.itinerary__title} section-heading`}>Описание по дням</h2>

                <div className={styles.itinerary__content}>
                    <div className={styles.itinerary__head}>
                        <button className={styles.itinerary__toggle} type="button">
                            Раскрыть все дни
                        </button>
                    </div>

                    <div className={styles.itinerary__list}>
                        <article className={`${styles.itinerary__item} ${styles.itinerary__item__active}`}>
                            <div className={styles.itinerary__day}>1 день</div>

                            <div className={styles.itinerary__body}>
                                <h3 className={styles.itinerary__item_title}>
                                    Переезд к точке начала трека - Чамдже
                                </h3>

                                <p className={styles.itinerary__text}>
                                    Вам необходимо прилететь в Катманду не позднее, чем в 9:00 накануне
                                    начала нашего
                                    тура, чтобы успеть оформить TIMS и пермит. Это необходимо делать в вашем
                                    присутствии. Но ещё лучше — прилететь за 2 дня до начала тура. Так вы
                                    сможете
                                    отдохнуть после дороги и начать осмотр города. В любом случае мы
                                    встретим вас в
                                    назначенное время на выходе из аэропорта Катманду (KTM) и отвезём в
                                    отель.
                                </p>
                            </div>

                            <button className={styles.itinerary__arrow} type="button"></button>
                        </article>

                        <article className={styles.itinerary__item}>
                            <div className={styles.itinerary__day}>2 день</div>

                            <div className={styles.itinerary__body}>
                                <h3 className={styles.itinerary__item_title}>
                                    Первый ходовой день: из Чамдже в Дхарапани
                                </h3>
                            </div>

                            <button className={styles.itinerary__arrow} type="button"></button>
                        </article>

                        <article className={styles.itinerary__item}>
                            <div className={styles.itinerary__day}>3 день</div>

                            <div className={styles.itinerary__body}>
                                <h3 className={styles.sitinerary__item_title}>
                                    Первый ходовой день: из Чамдже в Дхарапани
                                </h3>
                            </div>

                            <button className={styles.itinerary__arrow} type="button"></button>
                        </article>
                    </div>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Itinerary;