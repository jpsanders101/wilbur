import React from "react";
import HomeLink from "./HomeLink";
import "./About.css";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="column">
        <p className="copy">
          Niamh is a writer from Manchester, currently living in Leeds.
        </p>
        <HomeLink />
      </div>
      <div className="column">
        <div className="authorPhoto" />
      </div>
    </div>
  );
}
