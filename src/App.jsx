import { Routes, Route } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./views/ApplicationViews";

//TODO - wrap ApplicationViews with Authorized

function App() {
  return (
    <Routes>
      <Route path="/login" element={<span>LOGIN: TODO</span>} />
      <Route path="/register" element={<span>REGISTER: TODO</span>} />
      <Route path="*" element={<ApplicationViews />} />
    </Routes>
  );
}

export default App;
