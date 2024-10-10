// src/App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Layout/SideBar/SideBar";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Home from "./Pages/Home/Home";
import CaptainAccept from "./Pages/CaptainAccept/CaptainAccept";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/captain-details" element={<CaptainAccept />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
