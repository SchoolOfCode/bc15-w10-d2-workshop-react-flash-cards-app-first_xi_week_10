import React from "react";
import Flashcard from "./Flashcard";
import { data } from "./Data";

export default function Flashcards(){
//  const cards = data.map((card) => {
//     console.log(card)
// // return (<Flashcard key={card.id} />)
// return card
// })
console.log(data)
return (
    <div>
{data}
    </div>
)
    
}