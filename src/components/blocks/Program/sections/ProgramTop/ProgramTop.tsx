//styles
import styles from './ProgramTop.module.scss'
//UI
import SectionTitle from "@UI/titles/SectionTitle/SectionTitle.tsx";
import Text from "@UI/typography/Text/Text.tsx";
import TextAccent from "@UI/typography/TextAccent/TextAccent.tsx";

const ProgramTop = () => {
    return (
        <div className={styles.top}>
            <div className={styles.top__details}>
                <SectionTitle>О программе</SectionTitle>


                <Text typography={'base'}>
                    Самая популярная и относительно легкая программа <TextAccent color={'green'}>восхождения на
                    Эльбрус</TextAccent> -
                    напрямую от местного туроператора. Проводим эту программу уже 15 лет. На ваш выбор -
                    один из 30 регулярных заездов с апреля по октябрь 2025. (С ноября по март мы проводим <TextAccent
                    color={'green'}>Зимнее восхождение на Эльбрус</TextAccent>.
                    В наших группах участники со всего мира, в том числе Англия, США и западная Европа - инструктаж на
                    трех языках (RU, EN, ES). В группе не более 8
                    человек, на группу 2 гида. Скидка при раннем бронировании. Визовая поддержка.
                </Text>
            </div>

            <div className={styles.top__actions}>
                <Text typography={'base'}>
                    <TextAccent color={'gray'}>Старт:</TextAccent> Аэропорт Минеральные Воды (MRV), Тбилиси (TBS) или Кутаиси (KUT)
                </Text>

                <Text typography={'base'}>
                    <TextAccent color={'gray'}>Финиш:</TextAccent> Аэропорт Минеральные Воды (MRV), Тбилиси (TBS) или Кутаиси (KUT)
                </Text>
            </div>
        </div>
    );
};

export default ProgramTop;