import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
        <span className="material-symbols-outlined">Home</span>
      </NavLink>

      <NavLink to="/evento" className={({ isActive }) => (isActive ? "link active" : "link")}>
      <span className="material-symbols-outlined">Event</span>
      </NavLink>

      <NavLink to="/cadastrar" className={({ isActive }) => (isActive ? "link active" : "link")}>
      <span className="material-symbols-outlined">calendar_add_on</span>
      </NavLink>
    </nav>
  );
}