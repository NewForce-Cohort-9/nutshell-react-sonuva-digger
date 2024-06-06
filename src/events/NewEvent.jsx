import { useState } from "react";
import { createNewEvent } from "../services/eventService.jsx";
import { useNavigate } from "react-router-dom";
import "./NewEvent.css"






export const NewEvent = ({ currentUser }) => {

    const [newEvent, setNewEvent] = useState({
        name: "",
        eventDate: "",
        location: ""
    });

    const navigate = useNavigate();

    const handleSave = (saveEvent) => {
        saveEvent.preventDefault();

        const eventToDatabase = {
            name: newEvent.name,
            userId: currentUser.id,
            eventDate: newEvent.eventDate,
            location: newEvent.location
        }

        createNewEvent(eventToDatabase).then(() => {
            navigate("/events");

        })

    }

    return (


        <div classname="bigdiv">
            <form>
                <h2>New Event</h2>
                <fieldset>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(changeEvent) => {
                            const eventCopy = { ...newEvent };
                            eventCopy.name = changeEvent.target.value;
                            setNewEvent(eventCopy);
                        }}
                    />
                </fieldset>
                <fieldset>
                    <input
                        type="text"
                        placeholder="Location"
                        onChange={(changeEvent) => {
                            const eventCopy = { ...newEvent };
                            eventCopy.location = changeEvent.target.value;
                            setNewEvent(eventCopy);
                        }}
                    />
                </fieldset>
                <fieldset>
                    <input
                        type="date"
                        placeholder="Event Date"
                        onChange={(changeEvent) => {
                            const eventCopy = { ...newEvent };
                            eventCopy.eventDate = changeEvent.target.value;
                            setNewEvent(eventCopy);
                        }}
                    />
                </fieldset>
                <fieldset>
                    <div>
                        <button onClick={handleSave}>Save Event</button>
                    </div>
                </fieldset>
            </form>
        </div >

    );
};