import { Routes, Route, Outlet } from "react-router-dom";
import { getAllEvents } from "../events/eventServices.jsx";
export default function ApplicationViews() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <span style={{ color: "black" }}>NAVBAR: Todo</span>
            <Outlet />
          </>
        }
      >
        <Route
          index
          element={<span style={{ color: "black" }}>Splash page: TODO</span>}
        />
        <Route path="news" element={<span>NEWS: TODO</span>}></Route>
        <Route path="events" element={<span>getAllEvents</span>} />
        <Route path="tasks" element={<span>TASKS: TODO</span>} />
        <Route path="chat" element={<span>CHAT: TODO</span>} />
      </Route>
    </Routes>
  );
}
