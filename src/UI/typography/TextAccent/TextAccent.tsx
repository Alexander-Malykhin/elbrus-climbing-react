//styles
import styles from './TextAccent.module.scss'

type Color = 'white' | 'black' | 'gray'  | 'green';

type TextAccentProps = {
    children?: string;
    color?: Color;
};

const TextAccent = ({children, color = 'black'}: TextAccentProps) => {
    return (
        <span className={`${styles[`accent__${color}`]}`}>{children}</span>
    );
};

export default TextAccent;