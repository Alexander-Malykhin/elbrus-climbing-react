// styles
import styles from './Map.module.scss';
// images
import MapImage from "@images/features/map.png";

const Map = () => {
    return (
        <div className={styles.map}>
            <img src={MapImage} alt="Маршрут тура" className={styles.map__image} />
        </div>
    );
};

export default Map;