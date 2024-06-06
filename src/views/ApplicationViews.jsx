import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { News } from "../components/news/News.jsx";
import NavBar from "../components/Nav/NavBar.jsx";
import TasksContainer from "../components/tasks/TasksContainer.jsx";

export default function ApplicationViews() {
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
        <Route
          path="news"
          element={<News currentUser={currentUser} />}
        ></Route>
        <Route path="events" element={<span>EVENTS: TODO </span>} />
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
