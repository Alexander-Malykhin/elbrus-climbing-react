import styles from './Stats.module.scss'
import RatingBars from '../RatingBars/RatingBars'

type NumberStat = {
    type: 'number'
    value: string
    desktopUnit: string
    desktopLabel: string
    mobileValue: string
    mobileLabel: string
}

type RatingStat = {
    type: 'rating'
    level: 1 | 2 | 3
    desktopLabel: string
    mobileValue: string
    mobileLabel: string
}

type StatItem = NumberStat | RatingStat

const stats: StatItem[] = [
    {
        type: 'number',
        value: '120',
        desktopUnit: 'км',
        desktopLabel: 'Протяженность',
        mobileValue: '120',
        mobileLabel: 'км',
    },
    {
        type: 'number',
        value: '15',
        desktopUnit: 'дней',
        desktopLabel: 'Продолжительность',
        mobileValue: '15',
        mobileLabel: 'дней',
    },
    {
        type: 'rating',
        level: 1,
        desktopLabel: 'Сложность',
        mobileValue: '1/3',
        mobileLabel: 'сложность',
    },
    {
        type: 'rating',
        level: 2,
        desktopLabel: 'Комфорт',
        mobileValue: '1/4',
        mobileLabel: 'комфорт',
    },
]

const Stats = () => {
    return (
        <div className={styles.stats}>
            {stats.map((item) => (
                <div className={styles.stats__item} key={item.desktopLabel}>
                    {item.type === 'number' ? (
                        <div className={styles.stats__value_desktop}>
                            {item.value}{' '}
                            <span className={styles.stats__value_desktop_text}>
                                {item.desktopUnit}
                            </span>
                        </div>
                    ) : (
                        <RatingBars level={item.level} />
                    )}

                    <div className={styles.stats__label_desktop}>
                        {item.desktopLabel}
                    </div>

                    <div className={styles.stats__value_mobile}>
                        {item.mobileValue}
                    </div>

                    <div className={styles.stats__label_mobile}>
                        {item.mobileLabel}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Stats