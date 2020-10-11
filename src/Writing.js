import React from "react";
import "./Writing.css";
import HomeLink from "./HomeLink";
import { Link } from "react-router-dom";

export default function Writing() {
  return (
    <>
      <section>
        <h3 className="genre">FICTION</h3>
        <div className="writingItem">
          <span className="title">
            ’
            <a href="https://flashfictionmagazine.com/blog/2020/10/01/a-rich-mans-game/">
              A Rich Man’s Game
            </a>
            ’ in <span className="publication">Flash Fiction Magazine</span>
          </span>
          <span className="date">[Autumn 2020]</span>
        </div>
        <div className="writingItem">
          <span className="title">
            ’Covering ground’ in{" "}
            <span className="publication">Return Trip Issue 02</span>
          </span>
          <span className="date">[forthcoming Autumn 2020]</span>
        </div>

        <div className="writingItem">
          <span className="title">
            ’Millenial Pink’ in{" "}
            <span className="publication">
              UEA MA Prose Fiction Anthology 2018
            </span>
          </span>
          <span className="date">[Autumn 2018]</span>
        </div>
        <h3 className="genre">ESSAYS</h3>
        <div className="writingItem">
          <span className="title">
            {`’Allopoeitics as criticism: an experiment in form’ on `}
            <span className="publication">
              <a href="https://beyondcriticism.net">beyondcriticism.net</a>
            </span>
          </span>
          <span className="date">[forthcoming Winter 2021]</span>
        </div>
        <h3 className="genre">POETRY</h3>
        <div className="writingItem">
          <span className="title">
            ’<Link to="/lacuna">Lacuna</Link>’ in
            <span className="publication"> Write Young Things Volume 2</span>
          </span>
          <span className="date">[Winter 2018]</span>
        </div>
      </section>
      <HomeLink />
    </>
  );
}
