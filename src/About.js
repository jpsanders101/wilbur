import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="aboutPage">
      <div>
        <p className="copy">
          Niamh is a writer from Manchester, currently living in Leeds.
        </p>
        <Link className="homeLink" to="/">
          {"< Home"}
        </Link>
      </div>
      <img
        className="authorPhoto"
        alt="Photo of Niamh Gordon"
        src="./niamh.jpeg"
      ></img>
    </div>
  );
}
