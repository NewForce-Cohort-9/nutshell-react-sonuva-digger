// ChatRoomService.jsx
export const getMessages = async () => {
  const response = await fetch('http://localhost:8088/messages?_expand=user');
  return response.json();
}
  
export const postMessage = async (userId, message) => {
  const response = await fetch('http://localhost:8088/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, message }),
  });
  return response.json();
}

export const updateMessage = async (messageId, newMessage) => {
  const response = await fetch(`http://localhost:8088/messages/${messageId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ message: newMessage})
  })
  return response.json()
}


  