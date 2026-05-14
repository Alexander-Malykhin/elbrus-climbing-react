//styles
import styles from './Cost.module.scss'
//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
//sections
import CostTop from "@components/blocks/Cost/sections/CostTop/CostTop.tsx";
import CostBottom from "@components/blocks/Cost/sections/CostBottom/CostBottom.tsx";
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx";
//UI
import SectionTitle from "@UI/titles/SectionTitle/SectionTitle.tsx";

const Cost = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.cost}>
                <SectionLine
                    current={5}
                    total={9}
                />
                <SectionTitle>
                    Стоимость
                </SectionTitle>
                <div className={styles.cost__content}>
                    <CostTop/>
                    <CostBottom/>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Cost;