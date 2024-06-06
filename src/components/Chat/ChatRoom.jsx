// ChatRoom.jsx
import React, { useState, useEffect, useRef } from 'react';
import './chat.css';
import { getMessages, postMessage } from './ChatRoomServices.jsx';

export const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [editingMessage, setEditingMessage] = useState(null);
  const [editMessageText, setEditMessageText] = useState('');
  const chatEndRef = useRef(null);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // Refresh messages every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    const fetchedMessages = await getMessages();
    setMessages(fetchedMessages);
    scrollToBottom();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await postMessage(loggedInUser.id, newMessage);
    setNewMessage('');
    fetchMessages();
  };

  const handleEditSubmit = async (e, messageId) => {
    e.preventDefault();
    if (!editMessageText.trim()) return;

    await updateMessage(messageId, editMessageText);
    setEditingMessage(null);
    setEditMessageText('');
    fetchMessages();
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='wrapper-center'>
       <div className="chat-room">
      <div className="chat-history">
        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <img src={msg.user.img} alt={`${msg.user.username}'s avatar`} className="chat-avatar" />
            <strong>{msg.user.username}: </strong>
            {editingMessage === msg.id ? (
              <form onSubmit={(e) => handleEditSubmit(e, msg.id)} className="edit-form">
                <input
                  type="text"
                  value={editMessageText}
                  onChange={(e) => setEditMessageText(e.target.value)}
                  placeholder="Edit your message..."
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditingMessage(null)}>Cancel</button>
              </form>
            ) : (
              <span>{msg.message}</span>
            )}
            {msg.userId === loggedInUser.id && editingMessage !== msg.id && (
              <button onClick={() => {
                setEditingMessage(msg.id);
                setEditMessageText(msg.message);
              }}>Edit</button>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div> 
    </div>
    
  );
};
