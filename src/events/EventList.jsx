import { useState, useEffect } from "react";
import { getAllEvents } from "./eventServices.jsx";

export const EventList = () => {
    const [eventsList, setEventsList] = useState([]);


    useEffect(() => {

        getAllEvents().then((eventsArray) => {
            setEventsList(eventsArray)
        })

    }, [])


    return (
        <>
            <section>
                <article>
                    {eventsList.map(currentEvent => {
                        return <section key={currentEvent.id}>
                            <h3>{currentEvent.name}</h3>
                            <h4>Location: {currentEvent.location}</h4>
                            <h4>Date: {currentEvent.eventDate}</h4>
                        </section>
                    })}
                </article >
            </section ></>
    )

}