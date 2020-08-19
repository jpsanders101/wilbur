import React from "react";
import { useLocation } from "react-router-dom";
import "./BasePage.css";

const backgroundColorMap = {
  "/": "#FDC2B1",
  "/about": "#9BE8DE",
  "/writing": "EDDAFB",
  "/cv": "#9BE8DE",
};

export default function BasePage({ children }) {
  const { pathname } = useLocation();
  const backgroundColor = backgroundColorMap[pathname] || "#FDC2B1";
  return (
    <div
      style={{
        backgroundColor,
        transition: "background-color 0.5s",
        position: "fixed",
        height: "100vh",
        width: "100vw",
      }}
    >
      <main className="main">{children}</main>
    </div>
  );
}
