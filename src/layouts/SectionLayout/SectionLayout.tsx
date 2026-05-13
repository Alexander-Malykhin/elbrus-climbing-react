//styles
import styles from './SectionLayout.module.scss'
import type {ReactNode} from "react";

type SectionLayoutProps = {
    children: ReactNode,
    className?: string
}

const SectionLayout = ({children, className}: SectionLayoutProps) => {
    return (
        <section className={`${styles.section} ${className}`}>
            <div className={styles.section__layout}>
                {children}
            </div>
        </section>
    );
};


export default SectionLayout;