import {Link} from "react-router-dom";
//styles
import styles from './Logo.module.scss'
//images
import logoWhite from "@images/logo/logo-white.svg";

type LogoTypeProps = {
    alt: string
}

const Logo = ({alt}: LogoTypeProps) => {
    return (
        <Link to={'#'} className={styles.logo} aria-label="Elbrus Climbing">
            <img src={logoWhite}
                 alt={alt}
                 className={styles.logo_link}
            />
        </Link>
    );
};

export default Logo;