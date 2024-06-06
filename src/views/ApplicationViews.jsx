import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar.jsx";
import TasksContainer from "../components/tasks/TasksContainer.jsx";
import { EventList } from "../events/EventList.jsx";
import { NewEvent } from "../events/NewEvent.jsx";
import { useState, useEffect } from "react";


export default function ApplicationViews() {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localNutshellUser = localStorage.getItem("loggedInUser");
    const learningUserObject = JSON.parse(localNutshellUser);
    setCurrentUser(learningUserObject);
  }, []);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localUser = localStorage.getItem("loggedInUser");
    setCurrentUser(JSON.parse(localUser));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route
          index
          element={<span style={{ color: "black" }}>Splash page: TODO</span>}
        />
        <Route path="news" element={<span>NEWS: TODO</span>}></Route>
        <Route path="events" element={<EventList currentUser={currentUser} />} />
        <Route path="newevent" element={<NewEvent currentUser={currentUser} />} />
        <Route
          path="tasks"
          element={<TasksContainer currentUser={currentUser} />}
        />
        <Route path="chat" element={<span>CHAT: TODO</span>} />
        <Route path="profile" element={<span>PROFILE: TODO</span>} />
      </Route>
    </Routes>
  );
}
