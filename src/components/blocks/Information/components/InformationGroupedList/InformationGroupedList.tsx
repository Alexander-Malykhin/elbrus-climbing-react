//styles
import styles from './InformationGroupedList.module.scss';
//type
import type { InformationListGroup } from '../../types/information.types.ts';

type InformationGroupedListProps = {
    groups: InformationListGroup[]
}

const InformationGroupedList = ({ groups }: InformationGroupedListProps) => {
    return (
        <div className={styles.list}>
            {groups.map((group, index) => (
                <div className={styles.list__group} key={index}>
                    <div className={styles.list__title}>
                        {group.title}
                    </div>

                    <ul className={styles.list__items}>
                        {group.items.map((item, itemIndex) => (
                            <li className={styles.list__item} key={itemIndex}>
                                - {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default InformationGroupedList;