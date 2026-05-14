//styles
import styles from './Departures.module.scss'
//images
import GuideImage from '@images/departures/guide.png'
import FlagImage from '@images/flags/ad.svg'

//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx";
import SectionTitle from "@UI/titles/SectionTitle/SectionTitle.tsx";

const Departures = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.departures}>
                <SectionLine
                    current={6}
                    total={9}
                />
                <SectionTitle>
                    Выберите заезд
                </SectionTitle>
                <div className={styles.departures__content}>
                    <div className={styles.departures__table}>
                        <div className={styles.departures__head}>
                            <span className={styles.departures__head_title}>Дата заезда</span>
                            <span className={styles.departures__head_title}>Гид</span>
                            <span className={styles.departures__head_title}>Осталось</span>
                            <span className={styles.departures__head_title}>Цена</span>
                            <span className={styles.departures__head_title}></span>
                        </div>

                        <article className={styles.departures__item}>
                            <div className={styles.departures__date}>
                                01.05.2026 -<br/>
                                09.05.2026
                            </div>

                            <div className={styles.departures__guide}>
                                <img className={styles.departures__avatar} src={GuideImage} alt="Игорь Бинас"/>

                                <div className={styles.departures__guide_info}>
                                    <h3 className={styles.departures__guide_name}>Игорь Бинас</h3>
                                    <p className={styles.departures__guide_position}>
                                        Инструктор альпинизма, инструктор по<br/>
                                        горным лыжам
                                    </p>
                                </div>

                                <div className={styles.departures__countries}>
                                    <span>Участники<br/>из:</span>
                                    <img src={FlagImage} alt=""/>
                                    <img src={FlagImage} alt=""/>
                                </div>
                            </div>

                            <div className={styles.departures__places}>
                                Группа сейчас на<br/>
                                маршруте
                            </div>

                            <div className={styles.departures__price}>—</div>

                            <div className={styles.departures__action}></div>
                        </article>

                        <article className={styles.departures__item}>
                            <div className={styles.departures__date}>
                                10.05.2026 -<br/>
                                18.05.2026
                            </div>


                            <div className={styles.departures__guide}>
                                <img className={styles.departures__avatar} src={GuideImage} alt="Игорь Бинас"/>

                                <div className={styles.departures__guide_info}>
                                    <h3 className={styles.departures__guide_name}>Игорь Бинас</h3>
                                    <p className={styles.departures__guide_position}>
                                        Инструктор альпинизма, инструктор по<br/>
                                        горным лыжам
                                    </p>
                                </div>

                                <div className={styles.departures__countries}>
                                    <span>Участники<br/>из:</span>
                                    <img src={FlagImage} alt=""/>
                                    <img src={FlagImage} alt=""/>
                                </div>
                            </div>

                            <div className={styles.departures__places}>8 мест</div>

                            <div className={styles.departures__price}>
                                <div className={styles.departures__price_old}>€1 650</div>
                                <div className={styles.departures__price_current}>€1 250</div>
                                <div className={styles.departures__price_date}>до 08.05.2026</div>
                            </div>

                            <div className={styles.departures__action}>
                                <button className="button" type="button">Забронировать</button>
                            </div>
                        </article>

                        <div className={styles.departures__more}>
                            <button className={styles.departures__more_button} type="button">
                                Показать ещё заезды
                                <span className={styles.departures__more_arrow}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Departures;