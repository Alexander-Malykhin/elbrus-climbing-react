import styles from './Stats.module.scss'
import RatingBars from '../RatingBars/RatingBars'

type StatsVariant = 'hero' | 'card'

type StatsProps = {
    distance?: string
    duration?: string
    difficulty?: 1 | 2 | 3
    comfort?: 1 | 2 | 3
    variant?: StatsVariant
}

const Stats = ({distance = '25', duration = '9', difficulty = 3, comfort = 2, variant = 'hero',}: StatsProps) => {
    const isCard = variant === 'card'

    return (
        <div className={`${styles.stats} ${styles[`stats_${variant}`]}`}>
            <div className={styles.stats__item}>
                <div className={styles.stats__value}>
                    {distance}
                    <span className={styles.stats__unit}>км</span>
                </div>

                <div className={styles.stats__mobile_value}>
                    {distance}
                </div>

                <div className={styles.stats__label}>Протяженность</div>
                <div className={styles.stats__mobile_label}>км</div>
            </div>

            <div className={styles.stats__item}>
                <div className={styles.stats__value}>
                    {duration}
                    <span className={styles.stats__unit}>дней</span>
                </div>

                <div className={styles.stats__mobile_value}>
                    {duration}
                </div>

                <div className={styles.stats__label}>Продолжительность</div>
                <div className={styles.stats__mobile_label}>дней</div>
            </div>

            <div className={styles.stats__item}>
                <div className={styles.stats__rating}>
                    <RatingBars
                        level={difficulty}
                        color={isCard ? 'gray' : 'white'}
                        size={isCard ? 'mobile' : 'desktop'}
                    />
                </div>

                <div className={styles.stats__mobile_value}>
                    {difficulty}/3
                </div>

                <div className={styles.stats__label}>Сложность</div>
                <div className={styles.stats__mobile_label}>сложность</div>
            </div>

            <div className={styles.stats__item}>
                <div className={styles.stats__rating}>
                    <RatingBars
                        level={comfort}
                        color={isCard ? 'gray' : 'white'}
                        size={isCard ? 'mobile' : 'desktop'}
                    />
                </div>

                <div className={styles.stats__mobile_value}>
                    {comfort}/3
                </div>

                <div className={styles.stats__label}>Комфорт</div>
                <div className={styles.stats__mobile_label}>комфорт</div>
            </div>
        </div>
    )
}

export default Stats