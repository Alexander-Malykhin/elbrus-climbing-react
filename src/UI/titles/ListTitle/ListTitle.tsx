import type {ReactNode} from "react";
//styles
import styles from './ListTitle.module.scss';

type ListTitleColor = 'gray' | 'green' | 'red' | 'black';

type ListTitleProps = {
    children: ReactNode
    color?: ListTitleColor
    className?: string
}

const ListTitle = ({children, color = 'black', className = ''}: ListTitleProps) => {
    return (
        <h3 className={`${styles.title} ${styles[`title_${color}`]} ${className}`}>
            {children}
        </h3>
    );
};

export default ListTitle;