import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import TasksContainer from "../components/tasks/TasksContainer";

export default function ApplicationViews() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* TODO: NAVBAR HERE */}
            <Outlet />
          </>
        }
      >
        <Route
          index
          element={<span style={{ color: "black" }}>Splash page: TODO</span>}
        />
        <Route path="news" element={<span>NEWS: TODO</span>}></Route>
        <Route path="events" element={<span>EVENTS: TODO </span>} />
        <Route
          path="tasks"
          element={<TasksContainer currentUser={currentUser} />}
        />
        <Route path="chat" element={<span>CHAT: TODO</span>} />
      </Route>
    </Routes>
  );
}
