//styles
import styles from './ProgramBottom.module.scss';
//images
import AccommodationImage from '@images/program/accommodation.svg';
import FoodImage from '@images/program/food.svg';
//components
import RatingBars from "@components/RatingBars/RatingBars.tsx";
import Details from "@components/Program/components/Details/Details.tsx";
import Map from "@components/Program/components/Map/Map.tsx";
//UI
import PhotoButton from "@UI/buttons/PhotoButton/PhotoButton.tsx";

const ProgramBottom = () => {
    return (
        <div className={styles.bottom}>
            <div className={styles.bottom__list}>
                <article className={styles.bottom__item}>
                    <div className={styles.bottom__header}>
                        <RatingBars
                            level={3}
                            color={'gray'}
                            size={'desktop'}
                        />

                        <h3 className={styles.bottom__title}>Уровень сложности</h3>
                    </div>

                    <p className={styles.bottom__text}>
                        9 ходовых дней в среднем по 14 км. Вес рюкзака 15 кг. Есть возможность нанять
                        портера.
                        Доступно любому обычному человеку без медицинских противопоказаний. Допустимый
                        возраст
                        12-80 лет.
                    </p>
                </article>

                <article className={styles.bottom__item}>
                    <div className={styles.bottom__header}>
                        <div className={styles.bottom__icon}>
                            <img src={AccommodationImage} alt="accommodation"/>
                        </div>

                        <h3 className={styles.bottom__title}>Проживание</h3>
                    </div>

                    <p className={styles.bottom__text}>
                        Отели, Лоджии (мини-отели местных жителей), по 2 человека в номере.
                    </p>

                    <PhotoButton/>
                </article>

                <article className={styles.bottom__item}>
                    <div className={styles.bottom__header}>
                        <div className={styles.bottom__icon}>
                            <img src={FoodImage} alt="food"/>
                        </div>

                        <h3 className={styles.bottom__title}>Питание</h3>
                    </div>

                    <p className={styles.bottom__header}>
                        Не включено, питаемся в лоджиях, оплачивается отдельно, около 20-25 USD в сутки.
                    </p>
                </article>
            </div>
            <div className={styles.bottom__information}>
                <Details/>
                <Map/>
            </div>
        </div>
    );
};

export default ProgramBottom;