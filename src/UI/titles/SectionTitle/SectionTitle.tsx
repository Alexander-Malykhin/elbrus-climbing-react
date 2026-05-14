import type {ReactNode} from 'react'
//styles
import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
    children: ReactNode
}

const SectionTitle = ({children}: SectionTitleProps) => {
    return (
        <h2 className={styles.title}>{children}</h2>
    );
};

export default SectionTitle;