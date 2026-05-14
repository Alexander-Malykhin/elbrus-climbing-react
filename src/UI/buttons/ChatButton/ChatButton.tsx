//styles
import styles from './ChatButton.module.scss'
//image
import chatWhite from "@images/chat/chat-white.svg";
//UI
import Image from "@UI/media/Image/Image.tsx";

const ChatButton = () => {
    return (
        <button className={styles.button} type="button">
            <Image src={chatWhite} alt={'chat'} className={styles.button__image}/>
        </button>
    );
};

export default ChatButton;