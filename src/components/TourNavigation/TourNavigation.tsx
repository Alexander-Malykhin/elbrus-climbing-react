import {Link} from "react-router-dom";
//styles
import styles from './TourNavigation.module.scss';
//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";

const TourNavigation = () => {
    return (
        <nav className={styles.navigation}>
            <MainLayout>
                <ul className={styles.navigation__list}>
                    <li className={styles.navigation__item}>
                        <Link to="#" className={styles.navigation__link}>
                            Описание
                        </Link>
                    </li>
                    <li className={styles.navigation__item}>
                        <Link to="#" className={styles.navigation__link}>
                            Фото
                        </Link>
                    </li>
                    <li className={styles.navigation__item}>
                        <Link to="#" className={styles.navigation__link}>
                            Программа
                        </Link>
                    </li>
                    <li className={styles.navigation__item}>
                        <Link to="#" className={styles.navigation__link}>
                            Стоимость
                        </Link>
                    </li>
                    <li className={styles.navigation__item}>
                        <Link to="#" className={styles.navigation__link}>
                            Заезды
                        </Link>
                    </li>
                    <li className={styles.navigation__item}>
                        <Link to="#" className={styles.navigation__link}>
                            Информация
                        </Link>
                    </li>
                </ul>
            </MainLayout>
        </nav>
    );
};

export default TourNavigation;