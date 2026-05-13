//styles
import styles from './More.module.scss'
//images
import TourImage from '@images/tours/tour-1.png'
//sections
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx";
//components
import RatingBars from "@components/RatingBars/RatingBars.tsx";

const More = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.more}>
                <SectionLine 
                    current={9}
                    total={9}
                />

                <h2 className={`${styles.more__title} section-heading`}>Еще туры:</h2>

                <div className={styles.more__content}>
                    <button className={`${styles.more__arrow} ${styles.more__arrow__prev}`} type="button"></button>

                    <div className={styles.more__slider}>
                        <article className={styles.card}>
                            <div className={styles.card__image}>
                                <img src={TourImage} alt="" className={styles.card__image_media}/>
                                <div className={styles.card__tags}>
                                    <span className={styles.card__tag}>Россия</span>
                                    <span className={styles.card__tag}>Восхождение</span>
                                </div>
                                <h3 className={styles.card__title}>Эльбрус с юга</h3>
                            </div>

                            <div className={styles.card__body}>
                                <div className={styles.card__stats}>
                                    <div className={styles.card__stat}><b
                                        className={styles.card__stat_value}>9</b><span
                                        className={styles.card__stat_label}>дней</span></div>
                                    <div className={styles.card__stat}><b
                                        className={styles.card__stat_value}>25</b><span
                                        className={styles.card__stat_label}>km</span></div>
                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>сложность</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>комфорт</span>
                                    </div>
                                </div>

                                <div className={styles.card__info}>
                                    <p className={styles.card__info_text}>10.05.2026,<br/>ещё 29 туров<br/>и под
                                        заказ</p>
                                    <p className={`${styles.card__info_text} ${styles.card__info_text__align_right}`}>до
                                        08.05.2026<br/><span className={styles.card__price_old}>€1 650</span><br/>от <b
                                            className={styles.card__price_current}>€1 130</b></p>
                                </div>

                                <div className={styles.card__actions}>
                                    <a href="#" className={styles.card__link}>Подробнее</a>
                                    <button className="button" type="button">Забронировать</button>
                                </div>
                            </div>
                        </article>

                        <article className={styles.card}>
                            <div className={styles.card__image}>
                                <img src={TourImage} alt="" className={styles.card__image_media}/>
                                <div className={styles.card__tags}>
                                    <span className={styles.card__tag}>Россия</span>
                                    <span className={styles.card__tag}>Восхождение</span>
                                </div>
                                <h3 className={styles.card__title}>Траверс Эльбруса с севера на юг</h3>
                            </div>

                            <div className={styles.card__body}>
                                <div className={styles.card__stats}>
                                    <div className={styles.card__stat}><b
                                        className={styles.card__stat_value}>9</b><span
                                        className={styles.card__stat_label}>дней</span></div>
                                    <div className={styles.card__stat}><b
                                        className={styles.card__stat_value}>34</b><span
                                        className={styles.card__stat_label}>km</span></div>
                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>сложность</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>комфорт</span>
                                    </div>
                                </div>

                                <div className={styles.card__info}>
                                    <p className={styles.card__inf_text}>30.05.2026,<br/>ещё 4 тура<br/>и под
                                        заказ</p>
                                    <p className={`${styles.card__info_text} ${styles.card__info_text__align_right}`}>до
                                        08.05.2026<br/><span
                                            className={styles.card__price_old}>€3 390</span><br/>от <b
                                            className={styles.card__price_current}>€2 100</b></p>
                                </div>

                                <div className={styles.card__actions}>
                                    <a href="#" className={styles.card__link}>Подробнее</a>
                                    <button className="button" type="button">Забронировать</button>
                                </div>
                            </div>
                        </article>

                        <article className={styles.card}>
                            <div className={styles.card__image}>
                                <img src={TourImage} alt="" className={styles.card__image_media}/>
                                <div className={styles.card__tags}>
                                    <span className={styles.card__tag}>Россия</span>
                                    <span className={styles.card__tag}>Восхождение</span>
                                </div>
                                <h3 className={styles.card__title}>Эльбрус с кислородом за 1 день</h3>
                            </div>

                            <div className={styles.card__body}>
                                <div className={styles.card__stats}>
                                    <div className={styles.card__stat}>
                                        <b className={styles.card__stat_value}>3</b>
                                        <span className={styles.card__stat_label}>дня</span>
                                    </div>

                                    <div className={styles.card__stat}>
                                        <b className={styles.card__stat_value}>5</b>
                                        <span className={styles.card__stat_label}>km</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>сложность</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>комфорт</span>
                                    </div>
                                </div>

                                <div className={styles.card__info}>
                                    <p className={styles.card__info_text}>Только под заказ</p>
                                    <p className={`${styles.card__info_text} ${styles.card__info_text__align_right}`}><b
                                        className={styles.card__price_current}>€1 900</b></p>
                                </div>

                                <div className={styles.card__actions}>
                                    <a href="#" className={styles.card__link}>Подробнее</a>
                                    <button className="button" type="button">Забронировать</button>
                                </div>
                            </div>
                        </article>

                        <article className={styles.card}>
                            <div className={styles.card__image}>
                                <img src={TourImage} alt="" className={styles.card__image_media}/>
                                <div className={styles.card__tags}>
                                    <span className={styles.card__tag}>Россия</span>
                                    <span className={styles.card__tag}>Восхождение</span>
                                </div>
                                <h3 className={styles.card__title}>Эльбрус с кислородом за 1 день</h3>
                            </div>

                            <div className={styles.card__body}>
                                <div className={styles.card__stats}>
                                    <div className={styles.card__stat}>
                                        <b className={styles.card__stat_value}>3</b>
                                        <span className={styles.card__stat_label}>дня</span>
                                    </div>

                                    <div className={styles.card__stat}>
                                        <b className={styles.card__stat_value}>5</b>
                                        <span className={styles.card__stat_label}>km</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>сложность</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>комфорт</span>
                                    </div>
                                </div>

                                <div className={styles.card__info}>
                                    <p className={styles.card__info_text}>Только под заказ</p>
                                    <p className={`${styles.card__info_text} ${styles.card__info_text__align_right}`}><b
                                        className={styles.card__price_current}>€1 900</b></p>
                                </div>

                                <div className={styles.card__actions}>
                                    <a href="#" className={styles.card__link}>Подробнее</a>
                                    <button className="button" type="button">Забронировать</button>
                                </div>
                            </div>
                        </article>

                        <article className={styles.card}>
                            <div className={styles.card__image}>
                                <img src={TourImage} alt="" className={styles.card__image_media}/>
                                <div className={styles.card__tags}>
                                    <span className={styles.card__tag}>Россия</span>
                                    <span className={styles.card__tag}>Восхождение</span>
                                </div>
                                <h3 className={styles.card__title}>Эльбрус с кислородом за 1 день</h3>
                            </div>

                            <div className={styles.card__body}>
                                <div className={styles.card__stats}>
                                    <div className={styles.card__stat}>
                                        <b className={styles.card__stat_value}>3</b>
                                        <span className={styles.card__stat_label}>дня</span>
                                    </div>

                                    <div className={styles.card__stat}>
                                        <b className={styles.card__stat_value}>5</b>
                                        <span className={styles.card__stat_label}>km</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>сложность</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>комфорт</span>
                                    </div>
                                </div>

                                <div className={styles.card__info}>
                                    <p className={styles.card__info_text}>Только под заказ</p>
                                    <p className={`${styles.card__info_text} ${styles.card__info_text__align_right}`}><b
                                        className={styles.card__price_current}>€1 900</b></p>
                                </div>

                                <div className={styles.card__actions}>
                                    <a href="#" className={styles.card__link}>Подробнее</a>
                                    <button className="button" type="button">Забронировать</button>
                                </div>
                            </div>
                        </article>

                        <article className={styles.card}>
                            <div className={styles.card__image}>
                                <img src={TourImage} alt="" className={styles.card__image_media}/>
                                <div className={styles.card__tags}>
                                    <span className={styles.card__tag}>Россия</span>
                                    <span className={styles.card__tag}>Восхождение</span>
                                </div>
                                <h3 className={styles.card__title}>Эльбрус с кислородом за 1 день</h3>
                            </div>

                            <div className={styles.card__body}>
                                <div className={styles.card__stats}>
                                    <div className={styles.card__stat}>
                                        <b className={styles.card__stat_value}>3</b>
                                        <span className={styles.card__stat_label}>дня</span>
                                    </div>

                                    <div className={styles.card__stat}>
                                        <b className={styles.card__stat_value}>5</b>
                                        <span className={styles.card__stat_label}>km</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>сложность</span>
                                    </div>

                                    <div className={styles.card__rating}>
                                        <RatingBars
                                            level={3}
                                            color={'gray'}
                                            size={'mobile'}
                                        />
                                        <span className={styles.card__rating_label}>комфорт</span>
                                    </div>
                                </div>

                                <div className={styles.card__info}>
                                    <p className={styles.card__info_text}>Только под заказ</p>
                                    <p className={`${styles.card__info_text} ${styles.card__info_text__align_right}`}><b
                                        className={styles.card__price_current}>€1 900</b></p>
                                </div>

                                <div className={styles.card__actions}>
                                    <a href="#" className={styles.card__link}>Подробнее</a>
                                    <button className="button" type="button">Забронировать</button>
                                </div>
                            </div>
                        </article>
                    </div>

                    <button className={`${styles.more__arrow} ${styles.more__arrow__next}`} type="button"></button>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default More;