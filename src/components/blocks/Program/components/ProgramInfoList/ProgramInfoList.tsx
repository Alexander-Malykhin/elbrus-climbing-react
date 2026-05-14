// styles
import styles from './ProgramInfoList.module.scss';
// images
import AccommodationImage from '@images/program/accommodation.svg';
import FoodImage from '@images/program/food.svg';
// components
import RatingBars from "@components/RatingBars/RatingBars.tsx";
import ProgramInfoItem from "@components/blocks/Program/components/ProgramInfoItem/ProgramInfoItem.tsx";

// UI
import PhotoButton from "@UI/buttons/PhotoButton/PhotoButton.tsx";
import Image from "@UI/media/Image/Image.tsx";

const ProgramInfoList = () => {
    return (
        <div className={styles.list}>
            <ProgramInfoItem
                title="Уровень сложности"
                text="9 ходовых дней в среднем по 14 км. Вес рюкзака 15 кг. Есть возможность нанять портера. Доступно любому обычному человеку без медицинских противопоказаний. Допустимый возраст 12-80 лет."
                icon={<RatingBars level={3} color="gray" size="desktop" />}
            />

            <ProgramInfoItem
                title="Проживание"
                text="Отели, Лоджии (мини-отели местных жителей), по 2 человека в номере."
                icon={
                    <div className={styles.list__icon}>
                        <Image src={AccommodationImage} alt="accommodation" />
                    </div>
                }
            >
                <PhotoButton />
            </ProgramInfoItem>

            <ProgramInfoItem
                title="Питание"
                text="Не включено, питаемся в лоджиях, оплачивается отдельно, около 20-25 USD в сутки."
                icon={
                    <div className={styles.list__icon}>
                        <Image src={FoodImage} alt="food" />
                    </div>
                }
            />
        </div>
    );
};

export default ProgramInfoList;