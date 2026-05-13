//styles
import styles from './Header.module.scss';
//sections
import HeaderTop from "@components/Header/sections/HeaderTop/HeaderTop.tsx";
import HeaderMiddle from "@components/Header/sections/HeaderMiddle/HeaderMiddle.tsx";
import HeaderBottom from "@components/Header/sections/HeaderBottom/HeaderBottom.tsx";
//layout
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <MainLayout>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </MainLayout>
        </header>
    )
}

export default Header