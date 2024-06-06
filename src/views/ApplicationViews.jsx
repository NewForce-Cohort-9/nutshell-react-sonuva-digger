import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { News } from "../components/news/News.jsx";
import NavBar from "../components/Nav/NavBar.jsx";
import { ChatRoom } from "../components/Chat/ChatRoom.jsx";
import TasksContainer from "../components/tasks/TasksContainer.jsx";
import { EventList } from "../events/EventList.jsx";
import { NewEvent } from "../events/NewEvent.jsx";


import { ActivateChat } from "../components/Chat/ActivateChat.jsx";

export default function ApplicationViews() {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localUser = localStorage.getItem("loggedInUser");
    const parsedUser = JSON.parse(localUser)
    setCurrentUser(parsedUser);
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
        <Route path="news" element={<News currentUser={currentUser} />} />
        <Route path="events" element={<EventList currentUser={currentUser} />} />
        <Route path="newevent" element={<NewEvent currentUser={currentUser} />} />
        <Route
          path="tasks"
          element={<TasksContainer currentUser={currentUser} />}
        />
        <Route path="chat" element={<Outlet />}>
          <Route index element={<ActivateChat />} />
          <Route path="room" element={<ChatRoom />} />
        </Route>
        <Route path="profile" element={<span>PROFILE: TODO</span>} />
      </Route>
    </Routes>
  );
}
