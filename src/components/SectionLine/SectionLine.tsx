import * as React from "react";
//styles
import styles from './SectionLine.module.scss'

type SectionLineProps = {
    current: number,
    total: number
}

const SectionLine = ({current = 1, total = 9}: SectionLineProps) => {
    return (
        <div className={styles.line} style={{"--current": current, "--total": total} as React.CSSProperties}/>
    );
};

export default SectionLine;