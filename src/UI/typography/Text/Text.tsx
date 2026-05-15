import type {ReactNode} from "react";
//styles
import styles from './Text.module.scss';

type Typography = 'base' | 'sm';
type Color = 'white' | 'black' | 'gray'  | 'green';

type TextProps = {
    children: ReactNode;
    typography?: Typography;
    color?: Color;
    className?: string
};

const Text = ({ children, typography = 'base', color = 'black', className ='' }: TextProps) => {
    return (
        <p className={`${styles[`text__${typography}`]} ${styles[`text__${color}`]} ${className}`}>
            {children}
        </p>
    );
};

export default Text;