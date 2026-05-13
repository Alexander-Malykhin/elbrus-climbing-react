//styles
import styles from './CostBottom.module.scss'
//images
import CheckBoxGreenImage from '@images/assets/check-box-green.svg'
import CloseImage from '@images/assets/close.svg'

const CostBottom = () => {
    return (
        <div className={styles.bottom}>
            <div className={styles.bottom__item}>
                <div className={styles.bottom__title}>
                    <img src={CheckBoxGreenImage}
                         className={styles.bottom__title_icon} alt=""/>
                    <span>В стоимость включено:</span>
                </div>

                <ul className={`${styles.bottom__list} ${styles.bottom__list__included}`}>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Консультации менеджеров на этапе подготовки</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Услуги русскоговорящих гидов</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Встреча в аэропорту и трансфер обратно в аэропорт</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Оформление пермитов и TIMS`ов</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Туристическая страховка</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Все трансферы по программе, в том числе во время экскурсий</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Посещение всех достопримечательностей по программе</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Проживание в лоджиях на маршруте</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Средства безопасности: GPS, спутниковый телефон, рации, аптечка</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Фирменная футболка</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Экскурсии в Покхаре и Катманду</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>1 ночь в отеле в Покхаре, 2 ночи в отеле в Катманду</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>3 завтрака в Покхаре и Катманду</span>
                    </li>
                </ul>
            </div>

            <div className={styles.bottom__item}>
                <div className={styles.bottom__title}>
                    <img src={CloseImage} alt="" className={styles.bottom__title_icon}/>
                    <span>В стоимость не включено:</span>
                </div>

                <ul className={`${styles.bottom__list} ${styles.bottom__list__excluded}`}>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Авиаперелет</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Оформление непальской визы по прибытии в Непал — 50 $</span>
                    </li>
                    <li className={styles.bottom__line}>
                        <span className={styles.bottom__line_text}>Питание на протяжении всей программы, кроме трёх завтраков в Покхаре и Катманду — около 20–25 $ в день</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CostBottom;