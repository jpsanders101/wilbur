import React from "react";
import "./Writing.css";
import HomeLink from "./HomeLink";
import { Link } from "react-router-dom";

export default function Writing() {
  return (
    <>
      <section>
        <div className="writingItem">
          <span className="title">
            ’Empty Space’ in{" "}
            <a
              href="https://www.stillpointldn.com/articles/the-still-point-journal-5-presence/"
              className="publication"
            >
              Still Point Journal, Issue 5: Presence
            </a>
          </span>
          <span className="date">[Spring 2021]</span>
        </div>
        <div className="writingItem">
          <span className="title">
            ’Covering Ground in Berlin’ in{" "}
            <a href="http://returntrip.ca/issuetwo" className="publication">
              Return Trip Issue 02
            </a>
          </span>
          <span className="date">[Spring 2021]</span>
        </div>
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
