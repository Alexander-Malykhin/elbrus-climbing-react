//styles
import styles from './Features.module.scss'
//layouts
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx"
import MainLayout from "@layouts/MainLayout/MainLayout.tsx"
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx"
//components
import FeaturesList from "@components/blocks/Features/components/FeaturesList/FeaturesList.tsx";
//UI
import SectionTitle from "@UI/titles/SectionTitle/SectionTitle.tsx";
import FeaturesMap from "@components/blocks/Features/components/FeaturesMap/FeaturesMap.tsx";

type FeaturesListType = {
    id: number,
    text: string
}

const Features = () => {

    const list: FeaturesListType[] = [
        {
            id: 1,
            text: "Увидим Гималаи и пройдём через все их климатические зоны: от тропиков до вечных льдов."
        },
        {
            id: 2,
            text: "Поднимемся к одному из самых высокогорных озёр в мире — Тиличо. И, возможно, даже искупаемся в нем."
        },
        {
            id: 3,
            text: "Поднимемся на перевал Торонг Ла, высота 5416 м."
        },
        {
            id: 4,
            text: "Познакомимся со столицей Непала Катманду, её главными достопримечательностями и, конечно, с непальской кухней."
        }
    ]

    return (
        <MainLayout>
            <SectionLayout className={styles.features}>
                <SectionLine
                    current={2}
                    total={9}
                />
                <div className={styles.features__content}>
                    <SectionTitle>
                        Что будем делать?
                    </SectionTitle>

                    <div className={styles.features__grid}>
                        <FeaturesList list={list}/>
                        <FeaturesMap/>
                    </div>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Features;