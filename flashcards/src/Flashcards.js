import React from "react";
import Flashcard from "./Flashcard";
import { data } from "./Data";
export default function Flashcards() {
  const cards = data.map((card) => {
    return <Flashcard key={card.id} question={card.question} answer={card.answer} id={card.id} />;
    // return card
  });
  return <div>{cards}</div>;
}
