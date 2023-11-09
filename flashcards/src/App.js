import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Flashcards from "./Flashcards";
import { data } from "./Data";

function App() {
  const [cardData, setCardData] = useState(data);

  function addCard(event, newCardData) {
    setCardData((prevCardData) => {return [...prevCardData, newCardData]})
  }

  function deleteCard(event, id) {
    event.stopPropagation();

    const updatedCardData = cardData.filter((card) => {return !(card.id === id)})
    setCardData(updatedCardData);
  }

  return (
    <div className="App">
      <Header />
      <Form addCard={addCard} />
      <Flashcards data={cardData} deleteCard={deleteCard} />
    </div>
  );
}

export default App;
