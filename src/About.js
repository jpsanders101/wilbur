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
        <p>Niamh Gordon is a writer and researcher. She grew up in Manchester and lives in Glasgow, where she is in the final year of an interdisciplinary PhD in creative writing, narrative studies and medical humanities.</p>
        <p>Niamh writes across forms, including short fiction, poetry, and experimental essays, and is working on her debut novel. She is represented by <Link to="https://aitkenalexander.co.uk/literary-agents/harriet-moore">Harriet Moore</Link> at <Link to="https://aitkenalexander.co.uk/">Aitken Alexander Associates</Link>.</p>
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
