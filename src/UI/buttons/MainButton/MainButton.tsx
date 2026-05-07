//styles
import styles from './MainButton.module.scss'

const MainButton = () => {
    return (
        <button className={styles.button} type="button">
            Забронировать
        </button>
    );
};

export default MainButton;