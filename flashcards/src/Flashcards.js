import React from "react";
import Flashcard from "./Flashcard";
export default function Flashcards(props) {
  const cards = props.data.map((card) => {
    
    return (<Flashcard 
        key={card.id} 
        question={card.question} 
        answer={card.answer} 
        id={card.id}
        deleteCard={props.deleteCard}
         />
    )
  });
  return (
    <div className="flashcards">
        {cards}
    </div>
  );
}
