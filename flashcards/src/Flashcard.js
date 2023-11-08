import React from "react";
export default function Flashcard(props) {
  console.log(props);
  return (
    <div className="flashcard--container">
      <p className="flashcard--delete">❌</p>
      <p className="flashcard--emoji">🤔</p>
      <p className="flashcard--question">{props.question}</p>
    </div>
  );
}
