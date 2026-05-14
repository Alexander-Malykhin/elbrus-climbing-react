//styles
import styles from './FeaturesMap.module.scss'
//image
import MapImage from "@images/features/map.png";
//UI
import Image from "@UI/media/Image/Image.tsx";

const FeaturesMap = () => {
    return (
        <div className={styles.map}>
            <Image src={MapImage} alt={'Маршрут тура'} className={styles.map__image}/>
        </div>
    );
};

export default FeaturesMap;