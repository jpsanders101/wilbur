import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Niamh Gordon</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
