// src/App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Layout/SideBar/SideBar";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Home from "./Pages/Home/Home";
import CaptainAccept from "./Pages/WOR/CaptainAccept/CaptainAccept";
import CaptainHold from "./Pages/WOR/CaptainHold/CaptainHold";
import Reviews from "./Pages/WOR/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/captain-details"
              element={
                <CaptainAccept
                  userOrCaptainTitle="Captain"
                  userRole="captain"
                />
              }
            />
            <Route
              path="/accept-user"
              element={
                <CaptainAccept userOrCaptainTitle="User" userRole="user" />
              }
            />
            <Route path="/captain-hold" element={<CaptainHold />} />
            <Route path="/reviews" element={<Reviews />} />
            {/*  */}
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
