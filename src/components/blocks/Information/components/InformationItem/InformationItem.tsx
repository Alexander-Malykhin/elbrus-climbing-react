import { useState } from 'react';
//styles
import styles from './InformationItem.module.scss';
//components
import InformationText from "@components/blocks/Information/components/InformationText/InformationText.tsx";
import InformationGroupedList from "@components/blocks/Information/components/InformationGroupedList/InformationGroupedList.tsx";
import InformationTable from "@components/blocks/Information/components/InformationTable/InformationTable.tsx";
//UI
import ListTitle from '@UI/titles/ListTitle/ListTitle.tsx';
//type
import type { InformationItemType } from '../../types/information.types.ts';

type InformationItemProps = {
    item: InformationItemType
}

const InformationItem = ({ item }: InformationItemProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <article className={`${styles.item} ${isOpen ? styles.item_active : ''}`}>
            <div className={styles.item__head}>
                <ListTitle color="gray">
                    {item.title}
                </ListTitle>

                <button
                    className={styles.item__arrow}
                    type="button"
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label={isOpen ? 'Скрыть информацию' : 'Раскрыть информацию'}
                />
            </div>

            <div className={styles.item__body}>
                {item.type === 'text' && (
                    <InformationText text={item.text} />
                )}

                {item.type === 'list' && (
                    <InformationGroupedList groups={item.groups} />
                )}

                {item.type === 'table' && (
                    <InformationTable rows={item.rows} />
                )}
            </div>
        </article>
    );
};

export default InformationItem;