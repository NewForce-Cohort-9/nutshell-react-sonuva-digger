export const getAllMessages = () => {
    return fetch(`http://localhost:8088/messages`).then(res =>
         res.json())
}

export const postMMessage = (message) => {
    return(`http://localhost:8088/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    }).then(res => res.json)
}