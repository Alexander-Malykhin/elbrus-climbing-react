import styles from './ChatButton.module.scss'
import chatWhite from "@images/chat/chat-white.svg";

const ChatButton = () => {
    return (
        <button className={styles.button} type="button">
            <img src={chatWhite} alt="chat" className={styles.button__image}/>
        </button>
    );
};

export default ChatButton;