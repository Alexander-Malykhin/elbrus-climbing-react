import {Link} from "react-router-dom";
//styles
import styles from './PhoneButton.module.scss';

const PhoneButton = () => {
    return (
        <Link to={'tel:+74951087465'} className={`${styles.phone} ${styles.phone_link}`}>
            +7 495 108 74 65
        </Link>
    );
};

export default PhoneButton;