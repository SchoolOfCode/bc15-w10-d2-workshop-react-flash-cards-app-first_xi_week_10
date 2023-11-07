import React from "react";
import logo from "./logo512.png";
export default function Header() {
  return (
    <div className="header">
      <img className="header--logo" src={logo} alt="Image of logo" />
      <h1 className="header--title">React Flashcards</h1>
      <p className="header--subtitle"> 🧠Expand Your React Knoledge, One Flashcard at a Time!🐌 </p>
    </div>
  );
}
