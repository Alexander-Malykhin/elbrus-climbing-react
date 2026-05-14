//styles
import styles from './Tags.module.scss';

const tags = ['Непал', 'Аннапурна', 'Треккинг']

const Tags = () => {
    return (
        <ul className={styles.tags}>
            {tags.map((tag) => (
                <li className={styles.tags__item} key={tag}>
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export default Tags;