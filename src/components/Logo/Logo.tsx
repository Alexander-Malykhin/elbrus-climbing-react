import {Link} from "react-router-dom";
//styles
import styles from './Logo.module.scss'
//images
import logoWhite from "@images/logo/logo-white.svg";
import logoBlack from "@images/logo/logo-black.svg";
//UI
import Image from "@UI/media/Image/Image.tsx";

type LogoTypeProps = {
    alt: string
}

const Logo = ({ alt }: LogoTypeProps) => {
    return (
        <Link to={'#'} className={styles.logo}>
            <Image
                src={logoWhite}
                alt={alt}
                className={`${styles.logo__image} ${styles.logo__image_white}`}
            />

            <Image
                src={logoBlack}
                alt={alt}
                aria-hidden="true"
                className={`${styles.logo__image} ${styles.logo__image_black}`}
            />
        </Link>
    );
};
export default Logo;