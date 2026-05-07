//styles
import styles from './OrderButton.module.scss';

const OrderButton = () => {
    return (
        <button className={styles.button} type="button">
            Заказать звонок
        </button>
    );
};

export default OrderButton;