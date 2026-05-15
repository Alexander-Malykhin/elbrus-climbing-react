//styles
import styles from './HeaderBottom.module.scss'
//components
import Stats from '@components/Stats/Stats.tsx'
//UI
import MainButton from '@UI/buttons/MainButton/MainButton.tsx';
import Text from "@UI/typography/Text/Text.tsx";
import TextAccent from "@UI/typography/TextAccent/TextAccent.tsx";

const HeaderBottom = () => {
    return (
        <div className={styles.bottom}>
            <Stats
                distance="25"
                duration="9"
                difficulty={3}
                comfort={2}
            />

            <div className={styles.bottom__information}>
                <div className={styles.bottom__text}>
                    <Text typography={'base'} color={'white'}>
                        18.08.2022, <TextAccent color={'green'}>каждую пятницу</TextAccent> и под заказ — от 78 000 ₽
                    </Text>
                </div>

                <MainButton />
            </div>
        </div>
    )
}

export default HeaderBottom