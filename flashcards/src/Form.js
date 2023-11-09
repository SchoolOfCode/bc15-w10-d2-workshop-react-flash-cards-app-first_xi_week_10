import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Form(props) {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    id: uuid()
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addCard(event) {
    props.addCard(event, formData);
    setFormData((prevFormData) => {
      return {
        question: "",
        answer: "",
        id: uuid()
      };
    });
  }

  return (
    <div className="form">
     
     <label className="form--label" for="form--question">Question:</label>
      <input id="form--question" className="form--input" type="text" onChange={handleChange} name="question" value={formData.question} />

      <label className="form--label" for="form--answer">Answer:</label>

      <input id="form--answer" className="form--input" type="text" name="answer" onChange={handleChange} value={formData.answer} />
      <button className="form--add" onClick={addCard}>Add</button>
    </div>
  );
}
