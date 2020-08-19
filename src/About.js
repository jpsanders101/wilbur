import React from "react";
import HomeLink from "./HomeLink";
import "./About.css";

export default function About() {
  return (
    <div className="aboutPage">
      <div>
        <p className="copy">
          Niamh is a writer from Manchester, currently living in Leeds.
        </p>
        <HomeLink />
      </div>
      <img className="authorPhoto" alt="Niamh Gordon" src="./niamh.jpeg"></img>
    </div>
  );
}
