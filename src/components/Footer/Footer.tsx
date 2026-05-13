//styles
import styles from './Footer.module.scss'
//images
import LogoWhiteImage from '@images/logo/logo-white.svg'
import TripAdvisorImage from '@images/service/tripadvisor.svg'
import GoogleImage from '@images/service/google.svg'
import YandexImage from '@images/service/yandex.svg'

import VisaImage from '@images/payments/visa.svg'
import CryptoImage from '@images/payments/crypto.svg'
import MastercardImage from '@images/payments/mastercard.svg'
import PaypalImage from '@images/payments/paypal.svg'

import VkImage from '@images/social/vk.svg'
import InstagramImage from '@images/social/instagram.svg'
//layouts
import MainLayout from "@layouts/MainLayout/MainLayout.tsx";
import SectionLayout from "@layouts/SectionLayout/SectionLayout.tsx";

const Footer = () => {
    return (
        <SectionLayout className={styles.footer}>
            <MainLayout>
                <div className={styles.footer__content}>
                    <a href="#" className={styles.footer__logo}>
                        <img src={LogoWhiteImage} alt="Elbrus Climbing"
                             className={styles.footer__logo_image}/>
                    </a>

                    <div className={styles.footer__ratings}>
                        <div className={styles.footer__rating}>
                            <img src={TripAdvisorImage} alt="" className={styles.footer__rating_icon}/>
                            <span className={styles.footer__rating_value}>4.8</span>
                            <span className={styles.footer__stars}>★★★★★</span>
                            <span className={styles.footer__rating_count}>(49)</span>
                        </div>

                        <div className={styles.footer__rating}>
                            <img src={GoogleImage} alt="" className={styles.footer__rating_icon}/>
                            <span className={styles.footer__rating_value}>4.8</span>
                            <span className={styles.footer__stars}>★★★★★</span>
                            <span className={styles.footer__rating_count}>(49)</span>
                        </div>

                        <div className={styles.footer__rating}>
                            <img src={YandexImage} alt="" className={styles.footer__rating_icon}/>
                            <span className={styles.footer__rating_value}>4.8</span>
                            <span className={styles.footer__stars}>★★★★★</span>
                            <span className={styles.footer__rating_count}>(49)</span>
                        </div>
                    </div>

                    <div className={styles.footer__right}>
                        <div className={styles.footer__company}>
                            ELBRUS CLIMBING LLP<br/>
                            LONDON, UK
                        </div>

                        <div className={styles.footer__controls}>
                            <button className={styles.footer__select} type="button">USD</button>
                            <button className={styles.footer__select} type="button">RU</button>
                            <button className={styles.footer__button} type="button">Мы на связи</button>
                        </div>
                    </div>

                    <div className={styles.footer__payments}>
                        <img className={styles.footer__payment_icon} src={VisaImage} alt=""/>
                        <img className={styles.footer__payment_icon} src={MastercardImage} alt=""/>
                        <img className={styles.footer__payment_icon} src={PaypalImage} alt=""/>
                        <img className={styles.footer__payment_icon} src={CryptoImage} alt=""/>
                    </div>

                    <a href="#" className={styles.footer__privacy}>Политика конфиденциальности</a>

                    <div className={styles.footer__socials}>
                        <a href="#" className={styles.footer__social} aria-label="VK">
                            <img src={VkImage} alt="" className={styles.footer__social_icon}/>
                        </a>

                        <a href="#" className="footer__social" aria-label="Instagram">
                            <img src={InstagramImage} alt="" className={styles.footer__social_icon}/>
                        </a>
                    </div>
                </div>
            </MainLayout>
        </SectionLayout>
    );
};

export default Footer;