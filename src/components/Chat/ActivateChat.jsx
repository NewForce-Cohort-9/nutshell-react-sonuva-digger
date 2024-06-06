/*
 **Author: DeVante Farmer
 **Purpose: Provides a visual and functionality for activate-chat page
 */
import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"
import './chat.css'


export const ActivateChat = () => {
    const navigate = useNavigate()

    const handleActivateChat = () => {
    navigate(`/chat/room`)
}

return (
    <div className="wrapper-center">
        <div className="chat-welcome">
           <h2>
                Welcome to the Live Chat Room
                <span>activate your account to enter</span>
            </h2>
           <Button
            onClick={handleActivateChat}
            color="success"
            outline
            size="lg"
        >
            Activate 
        </Button> 
        </div>   
    </div>
)
}