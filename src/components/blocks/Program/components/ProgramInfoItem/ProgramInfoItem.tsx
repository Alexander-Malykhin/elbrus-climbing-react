// styles
import styles from './ProgramInfoItem.module.scss';

type ProgramInfoItemProps = {
    title: string;
    text: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
};

const ProgramInfoItem = ({ title, text, icon, children }: ProgramInfoItemProps) => {
    return (
        <article className={styles.item}>
            <div className={styles.item__header}>
                {icon}

                <h3 className={styles.item__title}>{title}</h3>
            </div>

            <p className={styles.item__text}>{text}</p>

            {children}
        </article>
    );
};

export default ProgramInfoItem;