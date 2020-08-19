import React from "react";
import "./Writing.css";
import HomeLink from "./HomeLink";

export default function Writing() {
  return (
    <>
      <section>
        <h3 className="genre">FICTION</h3>
        <div className="writingItem">
          <span className="title">
            ’Covering ground’ in{" "}
            <span className="publication">Return Trip Issue 02</span>
          </span>
          <span className="date">[forthcoming Spring 2020]</span>
        </div>
        <div className="writingItem">
          <span className="title">
            ’Millenial Pink’ in{" "}
            <span className="publication">
              UEA MA Prose Fiction Anthology 2018
            </span>
          </span>
          <span className="date">[2018]</span>
        </div>
        <h3 className="genre">ESSAYS</h3>
        <div className="writingItem">
          <span className="title">
            {`’Allopoeitics as criticism: an experiment in form’ on `}
            <span className="publication">
              <a href="https://beyondcriticism.net">beyondcriticism.net</a>
            </span>
          </span>
          <span className="date">[forthcoming Spring 2020]</span>
        </div>
        <h3 className="genre">POETRY</h3>
        <div className="writingItem">
          <span className="title">
            ’Lacuna’ in
            <span className="publication"> Write Young Things Volume 2</span>
          </span>
          <span className="date">[2018]</span>
        </div>
      </section>
      <HomeLink />
    </>
  );
}
