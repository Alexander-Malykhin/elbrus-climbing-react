//styles
import styles from './PlayButton.module.scss'

const PlayButton = () => {
    return (
        <button className={styles.button} type="button">
            <span className={styles.button__icon} />
        </button>
    );
};

export default PlayButton;