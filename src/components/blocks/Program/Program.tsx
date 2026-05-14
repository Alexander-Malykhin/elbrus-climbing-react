//styles
import styles from './Program.module.scss';
//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";
//assets
import SectionLine from "@components/SectionLine/SectionLine.tsx";
//sections
import ProgramTop from "@components/blocks/Program/sections/ProgramTop/ProgramTop.tsx";
import ProgramBottom from "@components/blocks/Program/sections/ProgramBottom/ProgramBottom.tsx";

const Program = () => {
    return (
        <MainLayout>
            <SectionLayout className={styles.program}>
                <SectionLine
                    current={1}
                    total={9}
                />
                <div className={styles.program__content}>
                    <ProgramTop/>
                    <ProgramBottom/>
                </div>
            </SectionLayout>
        </MainLayout>
    );
};

export default Program;