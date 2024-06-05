import { useEffect } from "react"
import { useState } from "react"
import { getAllMessages } from "../../services/ChatRoomServices.jsx"

export const ChatRoom = () => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const chatEndRef = useRef(null)


    useEffect(() => {
        getAllMessages().then((messageArray) => {
            setMessages(messageArray)
            scrollToBottom()
        })
    }, [])

    const handleSendMessage = () => {
        const messageObj = {
            user: user.name,
            text: newMessage,
            timestamp: new Date().toISOString()
        }
        postMessage(messageObj).then(() => {
            getAllMessages().then((messageArray) => {
                setMessages(messageArray)
                setNewMessage("")
                scrollToBottom()
            })
        })
    }

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div>
            <div className="messages">
                {messages.map((messageObj) => (
                    <div key={messageObj.id}>
                        <strong>{messageObj.user}: </strong> {messageObj.text}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <div className="new-message">
                <input 
                    type="text" 
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    placeholder="New message"
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}