import React from "react";
import "./About.css";

export default function Writing() {
  return (
    <>
      <p className="copy">
        In 2018 I gained an MA in Prose Fiction from the University of East
        Anglia, and I began my funded PhD at the University of Glasgow in 2020.
        From 2020-2021 I co-edited the literary magazine{" "}
        <a
          rel="noreferrer"
          href="https://glasgowtosaturn.com/"
          target="_blank"
          className="italics"
        >
          From Glasgow to Saturn
        </a>
        , and an early draft of my novel-in-progress was shortlisted for the{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.thebookseller.com/news/clare-gough-wins-north-literary-agency-prize-1262107"
        >
          2021 North Lit Agency prize
        </a>
        . In July 2024 I completed a week-long residency at{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://covepark.org/residencies/scottish-graduate-school-of-arts-humanities-2024-2/"
        >
          Cove Park
        </a>
        , funded by{" "}
        <a rel="noreferrer" target="_blank" href="https://www.sgsah.ac.uk/">
          SGSAH
        </a>
        .{" "}
      </p>
      <p>
        I write a newsletter,{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://niamhgordon.substack.com/"
        >
          notes from home
        </a>
        , where I share writing largely on books, writing, and how I am coming
        to understand motherhood. If you would like to read it, you can{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://niamhgordon.substack.com/"
        >
          subscribe here
        </a>
        .<h3>SELECTED WRITING</h3>
        <ul className="writing-list">
          <li>‘The Rothko room’ – short fiction in Gutter</li>
          <li>
            ‘A landscape of motherhood’ – poem in New Mothers’ Writing Circle
            pamphlet
          </li>
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
    </>
  );
}
