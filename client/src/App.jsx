import "./App.css";
import Auth from "./pages/Auth/Auth.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/*" element={<h2>404! Page not Found!!</h2>} />
    </Routes>
  );
};

export default App;
