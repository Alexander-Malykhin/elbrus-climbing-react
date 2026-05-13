//styles
import styles from './InformationTop.module.scss'

const InformationTop = () => {
    return (
        <div className={styles.top}>
            <article className={`${styles.top__item} ${styles.top__item__active}`}>
                <div className={styles.top__head}>
                    <h3 className={styles.top__title}>Авиабилеты</h3>
                    <button className={styles.top__arrow} type="button"></button>
                </div>

                <div className={styles.top__body}>
                    <p className={styles.top__text}>
                        Вам необходимо прилететь в аэропорт Минеральные Воды (MRV), Тбилиси
                        (TBS) или Кутаиси (KUT).
                        Трансфер из Грузии занимает не менее 8 часов и оплачивается
                        дополнительно.
                        Минеральные Воды - это ближайший к Эльбрусу аэропорт.
                        Прямой рейс из Тбилиси занимает 1 час. Прямые рейсы также доступны из
                        Актау, Алматы,
                        Анталья, Баку, Дубай, Ереван, Стамбул, Тель-Авив, Хургада,
                        Шарм-эль-Шейх,
                        Москвы и многих Российских городов.
                        Наш менеджер поможет вам подобрать оптимальный вариант перелета.
                    </p>
                </div>
            </article>

            <article className={styles.top__item}>
                <div className={styles.top__head}>
                    <h3 className={styles.top__title}>Правила въезда в страну</h3>
                    <button className={styles.top__arrow} type="button"></button>
                </div>
            </article>

            <article className={styles.top__item}>
                <div className={styles.top__head}>
                    <h3 className={styles.top__title}>Страховка</h3>
                    <button className={styles.top__arrow} type="button"></button>
                </div>
            </article>

            <article className={`${styles.top__item} ${styles.top__item__active}`}>
            <div className={styles.top__head}>
                    <h3 className={styles.top__title}>Обязательная одежда</h3>
                    <button className={styles.top__arrow} type="button"></button>
                </div>

                <div className={styles.top__body}>
                    <p className={styles.top__text}>
                        Доступно для аренды:<br/>
                        - Горные ботинки<br/>
                        - Пуховик для альпинизма на -10<br/>
                        - Пуховые рукавицы<br/>
                        - Куртка мембранная<br/>
                        - Штаны софтшелл<br/>
                        - Компрессионный мешок<br/>
                        - Флисовая шапка-подшлемник<br/>
                        - Трекинговые носки<br/>
                        - Шерстяные носки<br/>
                        - Перчатки поларовые<br/>
                        - Кепка<br/>
                        - Балаклава (тонкая)<br/>
                        - Синтетическая майка
                    </p>
                </div>
            </article>

            <article className={styles.top__item}>
                <div className={styles.top__head}>
                    <h3 className={styles.top__title}>Обязательное снаряжение</h3>
                    <button className={styles.top__arrow} type="button"></button>
                </div>
            </article>

            <article className={`${styles.top__item} ${styles.top__item__active}`}>
                <div className={styles.top__head}>
                    <h3 className={styles.top__title}>Дополнительные услуги</h3>
                    <button className={styles.top__arrow} type="button"></button>
                </div>

                <div className={styles.top__body}>
                    <div className={styles.top__services}>
                        <div className={styles.top__service}>
                            <div className={styles.top__service_price}>€500</div>
                            <div className={styles.top__service_name}>Аренда снаряжения и
                                одежды
                            </div>
                            <div className={styles.top__service_text}>
                                Аренда полного комплекта необходимого снаряжения и одежды -
                                включено все,
                                кроме самых личных вещей, которые не сдаются напрокат (см.
                                списки).
                            </div>
                        </div>

                        <div className={styles.top__service}>
                            <div className={styles.top__service_price}>€270</div>
                            <div className={styles.top__service_name}>Кислородное
                                оборудование
                            </div>
                            <div className={styles.top__service_text}>
                                Аренда комплекта кислородного оборудования для использования во
                                время восхождения
                                (не обязательно)
                            </div>
                        </div>

                        <div className={styles.top__service}>
                            <div className={styles.top__service_price}>€150</div>
                            <div className={styles.top__service_name}>Трансфер из Тбилиси
                            </div>
                            <div className={styles.top__service_text}>
                                Групповой трансфер из аэропорта Тбилиси до Эльбруса и обратно.
                                Цена - на одного человека, в одну сторону.
                            </div>
                        </div>

                        <div className={styles.top__service}>
                            <div className={styles.top__service_price}>€120</div>
                            <div className={styles.top__service_name}>Альпинистская
                                страховка
                            </div>
                            <div className={styles.top__service_text}>
                                Страховка на все дни тура, сумма покрытия 50 000 USD, включено
                                покрытие
                                вертолетной эвакуации и поисково-спасательных работ.
                            </div>
                        </div>

                        <div className={styles.top__service}>
                            <div className={styles.top__service_price}>€310</div>
                            <div className={styles.top__service_name}>Ратрак</div>
                            <div className={styles.top__service_text}>
                                Подъем и спуск на ратраке в день восхождения
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default InformationTop;