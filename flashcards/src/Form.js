import React from "react";

export default function Form () {
    return (
      <div className="form">
        <p className="form--label">Question:</p>
        <input className="form--input" type="text" />
        <p className="form--label">Answer:</p>
        <input className="form--input" type="text" />
        <button className="form--add">Add</button>
      </div>
    );
}

