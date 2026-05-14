//styles
import styles from './CostBlock.module.scss';
//UI
import ListTitle from "@UI/titles/ListTitle/ListTitle.tsx";
import Image from "@UI/media/Image/Image.tsx";

type CostBlockVariant = 'green' | 'red';

type CostBlockProps = {
    image: string
    title: string
    variant: CostBlockVariant
    items: string[]
}

const CostBlock = ({ image, title, variant, items }: CostBlockProps) => {
    return (
        <div className={styles.block}>
            <div className={styles.block__header}>
                <Image
                    src={image}
                    className={styles.block__icon}
                    alt=""
                />
                <ListTitle color="gray">
                    {title}
                </ListTitle>
            </div>

            <ul className={`${styles.block__list} ${styles[`block__list_${variant}`]}`}>
                {items.map((item, index) => (
                    <li className={styles.block__line} key={index}>
                        <span className={styles.block__lineText}>
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CostBlock;