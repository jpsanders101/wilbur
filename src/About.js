import React from "react";
import HomeLink from "./HomeLink";
import "./About.css";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="column">
        <p className="copy">
          <div className="authorPhoto authorPhotoFloat" />
          Niamh was born in Liverpool and grew up in Manchester. She is a
          writer, and has also been variously a barista, assistant manager of a
          chocolate shop, a tutor, an educational events coordinator, a shipping
          administrator, an editor, a fundraiser, a sales assistant (amongst
          others).
          <br />
          <br />
          In 2018 she completed her MA in Prose Fiction from the University of
          East Anglia, and in October 2020 she will begin an AHRC-funded DFA in
          Creative and Critical Writing at the University of Glasgow. Her
          research focuses on how grief acts as a disruptive force in the
          writings of Ali Smith. She also writes about the nature of work,
          trauma’s impact on narrative time, public transport, bereavement by
          suicide, the epistolary internet, and ghosts.
          <br />
          <br />
          She has fiction work forthcoming in Return Trip magazine, and her
          poetry has been longlisted for Issue 14 of Butcher’s Dog magazine. In
          her spare time she likes to run, cook, and work her way through every
          crime drama on Netflix.
        </p>

        <HomeLink />
      </div>
      <div className="column">
        <div className="authorPhoto authorPhotoFlex" />
      </div>
    </div>
  );
}
