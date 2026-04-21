import React from "react";
// TODO: Import BrowserRouter, Routes, Route from react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
// TODO: Import pages (Dashboard, Profile, Settings)
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      {/* TODO: Wrap the application with BrowserRouter */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
