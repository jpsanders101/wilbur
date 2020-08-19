import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <>
      <p>
        Niamh is a writer from Manchester,
        <br />
        currently living in Leeds.
      </p>
      <Link className="homeLink" to="/">
        {"< Home"}
      </Link>
    </>
  );
}
