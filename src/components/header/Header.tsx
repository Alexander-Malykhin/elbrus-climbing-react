// components/header/Header.tsx
import HeaderTop from './sections/HeaderTop/HeaderTop.tsx'
import HeaderMiddle from './sections/HeaderMiddle/HeaderMiddle.tsx'
import HeaderBottom from './sections/HeaderBottom/HeaderBottom.tsx'
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";

const Header = () => {
    return (
        <header className="header">
            <MainLayout>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </MainLayout>
        </header>
    )
}

export default Header