//styles
import styles from './Information.module.scss'
//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
//sections
import InformationTop from "@components/Information/sections/InformationTop/InformationTop.tsx";
import InformationBottom from "@components/Information/sections/InformationBottom/InformationBottom.tsx";
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx";

const Information = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.information}>
                <SectionLine
                    current={7}
                    total={9}
                />

                <h2 className={`${styles.information__title} section-heading`}>Информация</h2>

                <div className={styles.information__content}>
                    <InformationTop/>
                    <InformationBottom/>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Information;