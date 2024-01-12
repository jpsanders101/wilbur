import React from "react";
import "./Lacuna.css";
import HomeLink from "./HomeLink";

export default function Lacuna() {
  return (
    <>
      <section>
        <img
          src="/lacuna.png"
          alt="A poem called 'Lacuna' by Niamh Gordon"
          className="lacuna"
        />
      </section>
      <HomeLink />
    </>
  );
}
