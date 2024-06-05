import { Routes, Route } from "react-router-dom";
// import "./App.css";
import "./index.css"
import ApplicationViews from "./views/ApplicationViews";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { Authorized } from "./views/Authorized.jsx";
import Authorized from "./auth/Authorized.jsx";


//TODO - wrap ApplicationViews with Authorized

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
}

export default App;
