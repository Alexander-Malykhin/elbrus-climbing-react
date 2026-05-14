//styles
import styles from './InformationList.module.scss';
//components
import InformationItem from "@components/blocks/Information/components/InformationItem/InformationItem.tsx";
//type
import type { InformationItemType } from '../../types/information.types.ts';

type InformationListProps = {
    list: InformationItemType[]
}

const InformationList = ({ list }: InformationListProps) => {
    return (
        <div className={styles.list}>
            {list.map(item => (
                <InformationItem
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    );
};

export default InformationList;