import React from "react";
// import { useLocation, Link } from "react-router-dom";
import "./BasePage.css";

const backgroundColorMap = {
  "/": "#FDC2B1",
  "/about": "#9BE8DE",
  "/writing": "#EDDAFB",
  "/cv": "#9BE8DE",
};

const titleMap = {
  "/": " | Home",
  "/about": " | About",
  "/writing": " | Writing",
  "/cv": " | CV",
  "/contact": " | Contact",
};

export default function BasePage({ children }) {
  // const { pathname } = useLocation();
  const pathname = "/";
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
          <a className="contact" href="mailto:niamhgordonwrites@gmail.com">Contact me</a>
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
