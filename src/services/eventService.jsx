export const getAllEvents = () => {
    return fetch(`http://localhost:8088/events`).then((res) => res.json())
}

export const createNewEvent = (newEvent) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    });
}