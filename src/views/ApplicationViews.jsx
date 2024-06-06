import { Routes, Route, Outlet } from "react-router-dom";
import { News } from "../components/news/News.jsx";
import NavBar from "../components/Nav/NavBar.jsx";
import { useEffect, useState } from "react";

export default function ApplicationViews() {
  const [loggedInUserId, setLoggedInUserId] = useState({});

  useEffect(() => {
    const localLoggedInUser = localStorage.getItem("loggedInUser");
    const loggedInUserObject = JSON.parse(localLoggedInUser);

    setLoggedInUserId(loggedInUserObject.id);
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
          element={<News loggedInUserId={loggedInUserId} />}
        ></Route>
        <Route path="events" element={<span>EVENTS: TODO </span>} />
        <Route path="tasks" element={<span>TASKS: TODO</span>} />
        <Route path="chat" element={<span>CHAT: TODO</span>} />
        <Route path="profile" element={<span>PROFILE: TODO</span>} />
      </Route>
    </Routes>
  );
}
