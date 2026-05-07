//styles
import styles from './HeaderTop.module.scss'
//components
import Logo from "@components/Logo/Logo.tsx";
import ToursDropDown from "@components/ToursDropDown/ToursDropDown.tsx";
//buttons
import PhoneButton from "@UI/buttons/PhoneButton/PhoneButton.tsx";
import BurgerButton from "@UI/buttons/BurgerButton/BurgerButton.tsx";
import LanguageButton from "@UI/buttons/LanguageButton/LanguageButton.tsx";
import ChatButton from "@UI/buttons/ChatButton/ChatButton.tsx";
import OrderButton from "@UI/buttons/OrderButton/OrderButton.tsx";
import MainSelect from "@UI/selects/MainSelect/MainSelect.tsx";

const HeaderTop = () => {
    return (
        <div className={styles.top}>
            <Logo alt={'Elbrus Climbing'}/>

            <div className={styles.top__panel}>
                <nav className={styles.top__nav}>
                    <ToursDropDown/>
                    <PhoneButton/>
                </nav>

                <div className={styles.top__actions}>
                    <MainSelect/>
                    <LanguageButton/>
                    <OrderButton/>
                </div>

                <div className={styles.top__mobile_actions}>
                    <ChatButton/>
                    <BurgerButton/>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop