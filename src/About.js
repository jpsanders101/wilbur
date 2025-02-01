import React from "react";
import "./About.css";
import { Link } from "react-router";

export default function About() {
  return (
    <>
      <p className="copy">
        <img
          className="profile-photo"
          src="NG-july-24.jpg"
          alt="Niamh Gordon"
        ></img>
        Hi! I’m a writer, researcher and editor from Manchester, based in
        Glasgow. I am studying (part-time) for an interdisciplinary PhD in
        creative writing, narrative studies and medical humanities at the
        University of Glasgow. Generally I write across forms, including short
        fiction, poetry, and experimental essays, and I’m working on a novel.
      </p>
      <p>
        For examples of my published writing,{" "}
        <Link to={"/writing"}>head here</Link>.
      </p>
      <p>
        For information about my current work,{" "}
        <Link to={"/current-projects"}>click here</Link>.
      </p>
      <p>
        To get in contact, <Link to={"/contact"}>click here</Link>.
      </p>
    </>
  );
}
