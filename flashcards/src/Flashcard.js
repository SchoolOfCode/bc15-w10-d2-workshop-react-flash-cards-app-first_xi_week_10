import React, {useState} from "react";

export default function Flashcard(props) {
  const [showQuestion, setShowQuestion] = useState(true);

  function handleChange() {
    setShowQuestion((prevShowQuestion) => {
      return !prevShowQuestion;
    });
  }

  const styles = {
    backgroundColor: showQuestion ? "#323949" : "#06B1DF"
  };

  return (
    <div className="flashcard" onClick={handleChange} style={styles}>
      <p className="flashcard--delete" onClick={(event) => {return props.deleteCard(event, props.id)}}>❌</p>
      <p className="flashcard--emoji">🤔</p>
      <p className="flashcard--question">{showQuestion ? props.question : props.answer}</p>
    </div>
  );
}
