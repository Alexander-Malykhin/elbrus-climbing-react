// styles
import styles from './ProgramInfoItem.module.scss';
import Text from "@UI/typography/Text/Text.tsx";
import ListTitle from "@UI/titles/ListTitle/ListTitle.tsx";

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

                <div className={styles.item__wrapper}>
                    <ListTitle color={'gray'}>
                        {title}
                    </ListTitle>
                </div>
            </div>

            <Text typography={'base'}>{text}</Text>

            {children}
        </article>
    );
};

export default ProgramInfoItem;