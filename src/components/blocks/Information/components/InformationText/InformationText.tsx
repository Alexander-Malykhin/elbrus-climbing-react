//styles
import styles from './InformationText.module.scss';

type InformationTextProps = {
    text: string
}

const InformationText = ({ text }: InformationTextProps) => {
    return (
        <p className={styles.text}>
            {text}
        </p>
    );
};

export default InformationText;