import styles from './Card.module.scss'

import RatingBars from "@components/RatingBars/RatingBars.tsx";

export interface CardProps {
    image: string
    title: string
    tags: string[]
    days: number
    distance: number
    difficulty: 1 | 2 | 3
    comfort: 1 | 2 | 3
    date?: string
    toursInfo?: string
    oldPrice?: string
    price: string
}

const Card = ({
                  image,
                  title,
                  tags,
                  days,
                  distance,
                  difficulty,
                  comfort,
                  date,
                  toursInfo,
                  oldPrice,
                  price
              }: CardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.card__image}>
                <img
                    src={image}
                    alt={title}
                    className={styles.card__image_media}
                />

                <div className={styles.card__tags}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={styles.card__tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className={styles.card__title}>
                    {title}
                </h3>
            </div>

            <div className={styles.card__body}>
                <div className={styles.card__stats}>
                    <div className={styles.card__stat}>
                        <b className={styles.card__stat_value}>
                            {days}
                        </b>

                        <span className={styles.card__stat_label}>
                            дней
                        </span>
                    </div>

                    <div className={styles.card__stat}>
                        <b className={styles.card__stat_value}>
                            {distance}
                        </b>

                        <span className={styles.card__stat_label}>
                            km
                        </span>
                    </div>

                    <div className={styles.card__rating}>
                        <RatingBars
                            level={difficulty}
                            color="gray"
                            size="mobile"
                        />

                        <span className={styles.card__rating_label}>
                            сложность
                        </span>
                    </div>

                    <div className={styles.card__rating}>
                        <RatingBars
                            level={comfort}
                            color="gray"
                            size="mobile"
                        />

                        <span className={styles.card__rating_label}>
                            комфорт
                        </span>
                    </div>
                </div>

                <div className={styles.card__info}>
                    <p className={styles.card__info_text}>
                        {date && (
                            <>
                                {date},
                                <br />
                            </>
                        )}

                        {toursInfo}
                    </p>

                    <p className={`${styles.card__info_text} ${styles.card__info_text__align_right}`}>
                        {oldPrice && (
                            <>
                                до 08.05.2026
                                <br />

                                <span className={styles.card__price_old}>
                                    {oldPrice}
                                </span>

                                <br />
                            </>
                        )}

                        от{' '}

                        <b className={styles.card__price_current}>
                            {price}
                        </b>
                    </p>
                </div>

                <div className={styles.card__actions}>
                    <a
                        href="#"
                        className={styles.card__link}
                    >
                        Подробнее
                    </a>

                    <button
                        className="button"
                        type="button"
                    >
                        Забронировать
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Card;