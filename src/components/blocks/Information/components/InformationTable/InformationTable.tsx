//styles
import styles from './InformationTable.module.scss';
//type
import type { InformationTableRow } from '../../types/information.types.ts';

type InformationTableProps = {
    rows: InformationTableRow[]
}

const InformationTable = ({ rows }: InformationTableProps) => {
    return (
        <div className={styles.table}>
            {rows.map((row, index) => (
                <div className={styles.table__row} key={index}>
                    <div className={styles.table__price}>
                        {row.price}
                    </div>

                    <div className={styles.table__name}>
                        {row.name}
                    </div>

                    <div className={styles.table__text}>
                        {row.text}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InformationTable;