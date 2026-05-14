//styles
import styles from './ItineraryButtonList.module.scss';

type ItineraryButtonListProps = {
    isAllOpen: boolean
    onClick: () => void
}

const ItineraryButtonList = ({ isAllOpen, onClick }: ItineraryButtonListProps) => {
    return (
        <button
            className={styles.button}
            type="button"
            onClick={onClick}
        >
            {isAllOpen ? 'Скрыть все дни' : 'Раскрыть все дни'}
        </button>
    );
};

export default ItineraryButtonList;