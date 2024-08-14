import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <p className="copy">
        <img
          className="profile-photo"
          src="NG-july-24.jpg"
          alt="Niamh Gordon"
        ></img>
        I am a writer, researcher and editor from Manchester, currently based in
        Glasgow. I work as a Research Assistant with{" "}
        <a rel="noreferrer" target="_blank" href="https://deathwrites.org.uk/">
          the DeathWrites Network
        </a>
        , and I am studying part-time for a PhD in Creative Writing & Narrative
        Studies at the University of Glasgow.
        <br />
        <br />
        In 2018 I gained an MA in Prose Fiction from the University of East
        Anglia. I began my{" "}
        <a
          href="https://www.gla.ac.uk/pgrs/niamhgordon/"
          target="_blank"
          rel="noreferrer"
        >
          AHRC-funded doctorate
        </a>{" "}
        in 2020. My practice-based research explores narrative time and how it
        functions; representations of bereavement by suicide; affective and
        lyric modes; and motherhood and embodiment. I am also interested in
        narrative (un)reliability, and walking as creative practice. I work
        across narratology, critical medical humanities and creative writing,
        and have presented my work at a variety of different conferences and
        symposia. At the University of Glasgow, I’ve taught courses on poetry
        and poetics, experimental writing, and writing the body. I co-edited the
        literary magazine{" "}
        <a
          rel="noreferrer"
          href="https://glasgowtosaturn.com/"
          target="_blank"
          className="italics"
        >
          From Glasgow to Saturn
        </a>{" "}
        from 2020-2021, and currently edit the{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://deathwrites.org.uk/blog"
        >
          DeathWrites blog
        </a>
        .
        <br />
        <br />I write short fiction, poetry, and essays, a selection of which
        are linked below. I am working on a novel as part of my PhD; an early
        draft of this was shortlisted for the{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.thebookseller.com/news/clare-gough-wins-north-literary-agency-prize-1262107"
        >
          2021 North Lit Agency prize
        </a>
        .
        <br />
        <br />I also write a newsletter,{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://niamhgordon.substack.com/"
        >
          notes from home
        </a>
        , where I share other bits and bobs of writing, largely about motherhood
        and how I am coming to understand it. If you would like to read it, you
        can subscribe here:
        <br />
        <br />
        <div className="mobile-substack">
          <iframe
            title="notes from home"
            src="https://niamhgordon.substack.com/embed"
            width="100%"
            height="320"
            style={{
              border: "1px solid #EEE",
              background: "white",
            }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="desktop-substack">
          <iframe
            title="notes from home"
            src="https://niamhgordon.substack.com/embed"
            width="480"
            height="320"
            style={{
              border: "1px solid #EEE",
              background: "white",
            }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
        <h3>SELECTED WRITING</h3>
        2024
        <ul className="writing-list">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://uk.bookshop.org/p/books/don-t-even-ask-too-hot-new-writing-scotland-42-kirstin-innes/7704972?ean=9781906841614"
            >
              ‘Food’
            </a>{" "}
            - short fiction in New Writing Scotland 42
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://eprints.gla.ac.uk/325834/1/325834.pdf"
            >
              ‘Behind Some of the Scenes at the Museum’
            </a>{" "}
            – flash non-fiction in the DeathWrites Newspaper
          </li>
        </ul>
        2023
        <ul className="writing-list">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.strixleeds.com/shop/strix-10"
            >
              ’Birth lament’ and ‘Dispatch from now’
            </a>{" "}
            - two poems in Strix #10
          </li>
        </ul>
        2022
        <ul className="writing-list">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://english.exeter.ac.uk/media/universityofexeter/collegeofhumanities/english/research/exclamationjournal/Exclamation_Volume_6.pdf"
            >
              ‘Allopoeitics as criticism’
            </a>{" "}
            – peer-reviewed experimental essay in Exclamat!on, Issue 6
          </li>
        </ul>
        2021
        <ul className="writing-list">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://thepolyphony.org/2021/11/11/grief-reading-and-narrative-time/"
            >
              ‘Grief, reading, and narrative time’
            </a>{" "}
            - essay on The Polyphony
          </li>
          <li>
            <a
              href="https://www.stillpointldn.com/articles/niamh-gordon-empty-space/"
              target="_blank"
              rel="noreferrer"
            >
              ‘Empty Space’
            </a>{" "}
            – short fiction in Still Point Journal, Issue 5: Presence
          </li>
          <li>
            <a
              href="https://returntrip.bigcartel.com/product/return-trip-spring-summer-2021"
              target="_blank"
              rel="noreferrer"
            >
              ‘Covering Ground in Berlin’
            </a>{" "}
            – short fiction in Return Trip, Issue 02
          </li>
        </ul>
        2020
        <ul className="writing-list">
          <li>
            <a
              target="_blank"
              href="https://flashfictionmagazine.com/blog/2020/10/01/a-rich-mans-game/"
              rel="noreferrer"
            >
              ‘A Rich Man’s Game’
            </a>{" "}
            – flash fiction in Flash Fiction Magazine
          </li>
        </ul>
      </p>
    </>
  );
}
