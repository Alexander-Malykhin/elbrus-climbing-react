// styles
import styles from './Messengers.module.scss'

// images
import whatsappIcon from '@images/messengers/whatsapp.svg'
import telegramIcon from '@images/messengers/telegram.svg'
import vkIcon from '@images/messengers/vk.svg'

const messengers = [
    {
        href: '#',
        label: 'WhatsApp',
        icon: whatsappIcon,
        alt: 'whatsapp',
    },
    {
        href: '#',
        label: 'Telegram',
        icon: telegramIcon,
        alt: 'telegram',
    },
    {
        href: '#',
        label: 'VK',
        icon: vkIcon,
        alt: 'vk',
    },
]

const Messengers = () => {
    return (
        <div className={styles.messengers}>
            <p className={styles.messengers__text}>Мы на связи:</p>

            <div className={styles.messengers__list}>
                {messengers.map(({ href, label, icon, alt }) => (
                    <a href={href} className={styles.messengers__link} aria-label={label} key={label}>
                        <img src={icon} alt={alt} className={styles.messengers__icon}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Messengers