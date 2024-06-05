import { Routes, Route } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./views/ApplicationViews";
import Authorized from "./auth/Authorized.jsx";


//TODO - wrap ApplicationViews with Authorized

function App() {
  return (
    <Routes>
      <Route path="/login" element={<span>LOGIN: TODO</span>} />
      <Route path="/register" element={<span>REGISTER: TODO</span>} />

      <Route
        path="*"
        element={
          // Check if the user is authorized first
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      >
      </Route>
    </Routes>
  );
}

export default App;
