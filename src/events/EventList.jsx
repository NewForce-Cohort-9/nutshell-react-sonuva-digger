import { useState, useEffect } from "react";
import { getAllEvents } from "./eventServices.jsx";
import { useNavigate } from "react-router-dom";

export const EventList = ({ currentUser }) => {
    const [eventsList, setEventsList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        getAllEvents().then((eventsArray) => {
            setEventsList(eventsArray)
        })

    }, [])


    return (
        <>
            <section>
                <div>
                    <button onClick={() => { navigate("/newevent") }} </button>
            </div>
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