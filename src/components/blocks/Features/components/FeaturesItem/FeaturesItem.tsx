//styles
import styles from './FeaturesItem.module.scss'
//images
import ArrowTopRightImage from "@images/assets/arrow-top-right.svg";

type FeaturesItemProps = {
    text: string
}

const FeaturesItem = ({text}: FeaturesItemProps) => {
    return (
        <li className={styles.features__item}>
            <img src={ArrowTopRightImage} alt="arrow-top-right"/> {text}
        </li>
    );
};

export default FeaturesItem;