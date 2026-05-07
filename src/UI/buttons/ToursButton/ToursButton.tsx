import styles from './ToursButton.module.scss'

type ToursButtonProps = {
    isOpen: boolean
    onClick: () => void
}

const ToursButton = ({ isOpen, onClick }: ToursButtonProps) => {
    return (
        <button
            className={styles.button}
            type="button"
            onClick={onClick}
            aria-expanded={isOpen}
        >
            Все туры
        </button>
    )
}

export default ToursButton