//styles
import styles from './FeaturesItem.module.scss'
//images
import ArrowTopRightImage from "@images/assets/arrow-top-right.svg";
//UI
import Image from "@UI/media/Image/Image.tsx";
import Text from "@UI/typography/Text/Text.tsx";

type FeaturesItemProps = {
    text: string
}

const FeaturesItem = ({text}: FeaturesItemProps) => {
    return (
        <li className={styles.item}>
            <Image src={ArrowTopRightImage} alt={'arrow-top-right'}/> <Text typography={'base'}>{text}</Text>
        </li>
    );
};

export default FeaturesItem;