import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      {/* TODO: Replace spans with Link/NavLink for routing */}
      <NavLink to="/" style={{marginRight: "10px"}}>Dashboard</NavLink>
      <NavLink to="/profile" style={{marginRight: "10px"}}>Profile</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}

export default Navbar;
