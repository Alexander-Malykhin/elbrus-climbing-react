import styles from './RatingBars.module.scss'

type RatingBarsProps = {
    level: 1 | 2 | 3
    color?: 'white' | 'gray'
    size?: 'desktop' | 'mobile'
}

const RatingBars = ({level, color = 'white', size = 'desktop',}: RatingBarsProps) => {
    return (
        <div
            className={[
                styles.rating,
                styles[`rating_level_${level}`],
                styles[`rating_color_${color}`],
                styles[`rating_size_${size}`],
            ].join(' ')}
        >
            <span className={styles.rating__item}/>
            <span className={styles.rating__item}/>
            <span className={styles.rating__item}/>
        </div>
    )
}

export default RatingBars