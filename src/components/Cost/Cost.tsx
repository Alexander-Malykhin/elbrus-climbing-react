//styles
import styles from './Cost.module.scss'
//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
//sections
import CostTop from "@components/Cost/sections/CostTop/CostTop.tsx";
import CostBottom from "@components/Cost/sections/CostBottom/CostBottom.tsx";
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx";

const Cost = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.cost}>
                <SectionLine
                    current={5}
                    total={9}
                />

                <h1 className={`${styles.cost__title} section-heading`}>Стоимость</h1>

                <div className={styles.cost__content}>
                    <CostTop/>
                    <CostBottom/>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Cost;