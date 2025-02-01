import React from "react";
import "./BasePage.css";
import { NavLink } from "react-router";
import { useLocation } from "react-router";

const backgroundColorMap = {
  "/": "#FDC2B1",
  "/current-projects": "#9BE8DE",
  "/writing": "#EDDAFB",
  "/contact": "#b1eafc",
};

const titleMap = {
  "/": " | Home",
  "/writing": " | Writing",
  "/current-projects": " | Current Projects",
  "/contact": " | Contact",
};

export default function BasePage({ children }) {
  const { pathname } = useLocation();
  const backgroundColor = backgroundColorMap[pathname] || "#FDC2B1";
  const titlePath = titleMap[pathname] || "";
  return (
    <div
      style={{
        backgroundColor,
        transition: "background-color 0.5s",
        position: "fixed",
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
      }}
    >
      <title>Niamh Gordon{titlePath}</title>
      <main className="main">
        <h1 className="heading">Niamh Gordon</h1>
        <nav className="nav-bar">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <span> | </span>
          <NavLink
            to="/writing"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Writing
          </NavLink>
          <span> | </span>
          <NavLink
            to="/current-projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Current Projects
          </NavLink>
          <span> | </span>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>
        {children}
        <footer className="footer">
          <a href="http://www.twitter.com/_niamhgordon">
            <img src="twitter.svg" alt="Twitter logo" />
          </a>
          <a href="https://instagram.com/_niamhgordon">
            <img src="insta.svg" alt="Instagram logo" />
          </a>
        </footer>
      </main>
    </div>
  );
}
