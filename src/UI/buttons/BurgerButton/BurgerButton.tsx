//styles
import styles from './BurgerButton.module.scss';

const BurgerButton = () => {
    return (
        <button className={styles.button} type="button">
            <span className={styles.button__line}/>
            <span className={styles.button__line}/>
            <span className={styles.button__line}/>
        </button>
    );
};

export default BurgerButton;