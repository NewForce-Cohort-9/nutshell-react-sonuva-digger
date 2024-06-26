import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { News } from "../components/news/News.jsx";
import NavBar from "../components/Nav/NavBar.jsx";
import { ChatRoom } from "../components/Chat/ChatRoom.jsx";
import TasksContainer from "../components/tasks/TasksContainer.jsx";
import { CreateNewsForm } from "../forms/CreateNews.jsx";
import { EventList } from "../components/events/EventList.jsx";
import { NewEvent } from "../components/events/NewEvent.jsx";
import { ActivateChat } from "../components/Chat/ActivateChat.jsx";
import { Splash } from "../components/Splash/Splash.jsx";
import { Profile } from "../components/profile/Profile.jsx";

export default function ApplicationViews() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localUser = localStorage.getItem("loggedInUser");
    const parsedUser = JSON.parse(localUser);
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
        <Route index element={<Splash />} />
        <Route path="news">
          <Route index element={<News currentUser={currentUser} />} />
          <Route
            path="create"
            element={<CreateNewsForm currentUser={currentUser} />}
          />
        </Route>
        <Route
          path="events"
          element={<EventList currentUser={currentUser} />}
        />
        <Route
          path="newevent"
          element={<NewEvent currentUser={currentUser} />}
        />
        <Route
          path="tasks"
          element={<TasksContainer currentUser={currentUser} />}
        />
        <Route path="chat" element={<Outlet />}>
          <Route index element={<ActivateChat />} />
          <Route path="room" element={<ChatRoom />} />
        </Route>
        <Route path="profile" element={<Profile currentUser={currentUser} />} />
      </Route>
    </Routes>
  );
}
