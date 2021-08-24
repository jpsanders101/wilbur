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
          East Anglia, and in October 2020 she began an AHRC-funded PhD on the
          DFA Creative Writing programme at the University of Glasgow.{" "}
          <a href="https://www.gla.ac.uk/pgrs/niamhgordon/">
            Her research
          </a>{" "}
          investigates the relationships between narrative, time, and trauma,
          through a practice-based exploration of the impact of bereavement by
          suicide on narrative time. She also researches Ali Smith and
          experimental writing.
          <br />
          <br />
          Her fiction has been published in 'Flash Fiction Magazine', ‘Return
          Trip’ and ‘Still Point Journal', and her novel-in-progress was{" "}
          <a href="https://www.thebookseller.com/news/clare-gough-wins-north-literary-agency-prize-1262107">
            shortlisted for the 2021 North Lit Agency prize
          </a>
          . She is currently a co-editor at the literary magazine{" "}
          <a href="https://glasgowtosaturn.com/">From Glasgow to Saturn</a>. In
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
