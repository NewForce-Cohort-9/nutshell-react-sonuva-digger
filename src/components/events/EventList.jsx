import { useState, useEffect } from "react";
import { getAllEvents } from "./eventServices.jsx";
import { useNavigate } from "react-router-dom";
import './EventList.css';

export const EventList = ({ currentUser }) => {
    const [eventsList, setEventsList] = useState([]);
    const [filteredEventsList, setFilteredEventsList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        getAllEvents().then((eventsArray) => {
            setEventsList(eventsArray)
        })

    }, [])

    useEffect(() => {

        console.log("currentUser", currentUser.id)
        const eventsForUser = eventsList.filter(event => event.userId == currentUser.id)
        setFilteredEventsList(eventsForUser)

    }, [eventsList])




    return (
        <>
            <div className="wrapper-center">
                <section className="center-container">
                    <article>
                        {filteredEventsList.map(currentEvent => (
                            <section key={currentEvent.id}>
                                <h3>{currentEvent.name}</h3>
                                <h4>Location: {currentEvent.location}</h4>
                                <h4>Date: {currentEvent.eventDate}</h4>
                            </section>
                        ))}
                        <div>
                            <button onClick={() => { navigate("/newevent") }}>New Event</button>
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
}