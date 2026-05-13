//styles
import styles from './Features.module.scss'
//images
import ArrowTopRightImage from '@images/assets/arrow-top-right.svg'
import MapImage from "@images/features/map.png"
//layouts
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx"
import MainLayout from "@layouts/MainLayout/MainLayout.tsx"
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx"

const Features = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.features}>
                <SectionLine current={2} total={9}/>

                <div className={styles.features__content}>
                    <h2 className={styles.features__title}>Что будем делать?</h2>

                    <div className={styles.features__grid}>
                        <ul className={styles.features__list}>
                            <li className={styles.features__item}>
                                <img src={ArrowTopRightImage} alt="arrow-top-right"/> Увидим Гималаи и
                                пройдём через все их климатические зоны: от тропиков до вечных льдов.
                            </li>
                            <li className={styles.features__item}>
                                <img src={ArrowTopRightImage} alt="arrow-top-right"/> Поднимемся к одному
                                из самых высокогорных озёр в мире — Тиличо. И, возможно, даже искупаемся в нем.
                            </li>
                            <li className={styles.features__item}>
                                <img src={ArrowTopRightImage} alt="arrow-top-right"/> Поднимемся на
                                перевал Торонг Ла, высота 5416 м.
                            </li>
                            <li className={styles.features__item}>
                                <img src={ArrowTopRightImage} alt="arrow-top-right"/> Познакомимся со
                                столицей Непала Катманду, её главными достопримечательностями и, конечно, с
                                непальской кухней.
                            </li>
                        </ul>

                        <div className={`${styles.features__media} ${styles.features__media__active}`}>
                            <img src={MapImage} alt="Маршрут тура" className="features__media-image"/>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Features;