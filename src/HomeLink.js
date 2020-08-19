import React from "react";
import { Link } from "react-router-dom";
import "./HomeLink.css";

export default function HomeLink() {
  return (
    <Link className="homeLink" to="/">
      {"< Home"}
    </Link>
  );
}
