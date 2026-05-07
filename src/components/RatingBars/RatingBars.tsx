import styles from './RatingBars.module.scss'

type RatingBarsProps = {
    level: 1 | 2 | 3
}

const RatingBars = ({ level }: RatingBarsProps) => {
    return (
        <div className={`${styles.rating} ${styles[`rating_level_${level}`]}`}>
            <span className={styles.rating__item} />
            <span className={styles.rating__item} />
            <span className={styles.rating__item} />
        </div>
    )
}

export default RatingBars