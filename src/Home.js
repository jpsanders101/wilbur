import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <ul className="linkList">
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/writing">Writing</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <a href="mailto:niamhgordonwrites@gmail.com">Contact</a>
        </li>
      </ul>
    </div>
  );
}
