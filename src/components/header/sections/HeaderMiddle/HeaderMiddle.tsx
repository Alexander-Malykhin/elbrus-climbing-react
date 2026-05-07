//styles
import styles from './HeaderMiddle.module.scss'
//components
import Slider from "@components/header/components/Slider/Slider.tsx";
import Tags from "@components/header/components/Tags/Tags.tsx";
import Messengers from "@components/header/components/Messengers/Messengers.tsx";
//buttons
import PlayButton from "@UI/buttons/PlayButton/PlayButton.tsx";

const HeaderMiddle = () => {
    return (
        <div className={styles.middle}>
            <div className={styles.middle__banner}>
               <Tags/>
                <h1 className={styles.middle__title}>
                    Тур в Непал: трек вокруг Аннапурны и озеро Тиличо, Гималаи
                </h1>
                <PlayButton/>
                <Slider/>
            </div>
            <Messengers/>
        </div>
    )
}

export default HeaderMiddle