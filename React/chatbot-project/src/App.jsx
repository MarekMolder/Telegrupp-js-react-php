import {useState} from 'react'
import {ChatInput} from "./components/ChatInput.jsx";
import ChatMessages from "./components/ChatMessage.jsx";
import './App.css'

function App() {
    const [chatMessages, setChatMessages] = useState([]);

    return (
        <div className="app-container">
            <ChatMessages
                chatMessages={chatMessages}
            ></ChatMessages>
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            ></ChatInput>
        </div>
    );
}
export default App
