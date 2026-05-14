//styles
import styles from './FeaturesList.module.scss'
//components
import FeaturesItem from "@components/blocks/Features/components/FeaturesItem/FeaturesItem.tsx";

type FeaturesListItem = {
    id: number;
    text: string;
};

type FeaturesListProps = {
    list: FeaturesListItem[];
};

const FeaturesList = ({list}: FeaturesListProps) => {

    return (
        <ul className={styles.list}>
            {list.map(item => <FeaturesItem key={item.id} text={item.text}/>)}
        </ul>
    );
};

export default FeaturesList;