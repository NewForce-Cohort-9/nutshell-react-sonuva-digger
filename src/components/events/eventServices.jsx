export const getAllEvents = () => {
    return fetch(`http://localhost:8088/events?_expand=user`
    ).then(res => res.json())
}

export const getEventById = (userId) => {
    return fetch(`http://localhost:8088/events/${userId}`
    ).then((res) => res.json())
}

