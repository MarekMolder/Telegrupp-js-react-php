import RobotProfileImage from "../assets/img/robot.png";
import UserProfileImage from "../assets/img/user.png";
import {useEffect, useRef} from "react";
import './ChatMessage.css';

function ChatMessage({message, sender}) {
    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
                <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && (
                <img src={UserProfileImage} className="chat-message-profile" />
            )}
        </div>
    )
}

function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null);

    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages]);

    return (
        <div className="chat-messages-container"
             ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages;