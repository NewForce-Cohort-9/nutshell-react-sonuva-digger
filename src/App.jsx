import { Routes, Route } from "react-router-dom";
import "./index.css";
import ApplicationViews from "./views/ApplicationViews";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { Authorized } from "./views/Authorized.jsx";

//TODO - wrap ApplicationViews with Authorized

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <div className="wrapper-center">
            <Login />
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div className="wrapper-center">
            <Register />
          </div>
        }
      />

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
