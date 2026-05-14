//styles
import styles from './ItineraryItem.module.scss';

type ItineraryItemProps = {
    day: number
    title: string
    description: string
    isOpen: boolean
    onToggle: () => void
}

const ItineraryItem = ({ day, title, description, isOpen, onToggle }: ItineraryItemProps) => {
    return (
        <article className={`${styles.item} ${isOpen ? styles.item__active : ''}`}>
            <div className={styles.item__day}>{day} день</div>

            <div className={styles.item__body}>
                <h3 className={styles.item__title}>{title}</h3>

                <div className={styles.item__descriptionWrapper}>
                    <p className={styles.item__description}>
                        {description}
                    </p>
                </div>
            </div>

            <button
                className={styles.item__button}
                type="button"
                onClick={onToggle}
                aria-label={isOpen ? 'Скрыть день' : 'Раскрыть день'}
            />
        </article>
    );
};

export default ItineraryItem;