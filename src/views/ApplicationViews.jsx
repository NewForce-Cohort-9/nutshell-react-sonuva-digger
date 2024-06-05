import { Routes, Route, Outlet } from "react-router-dom";
import { News } from "../components/news/News.jsx";
import NavBar from "../components/Nav/NavBar.jsx";

export default function ApplicationViews() {
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
        <Route path="news" element={ <News /> }></Route>
        <Route path="events" element={<span>EVENTS: TODO </span>} />
        <Route path="tasks" element={<span>TASKS: TODO</span>} />
        <Route path="chat" element={<span>CHAT: TODO</span>} />
        <Route path="profile" element={<span>PROFILE: TODO</span>} />
      </Route>
    </Routes>
  );
}
