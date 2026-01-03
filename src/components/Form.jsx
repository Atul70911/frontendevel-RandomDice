import React from "react";
import './from.css'

const Form = ({ num, setNum, gen, setGen }) => {
  return (
    <form
      className="dice-form"
      onSubmit={(e) => {
        e.preventDefault();
        setGen("done");
      }}
    >
      <input
        className="dice-input"
        type="number"
        value={num}
        onChange={(e) => {
          const v = e.target.value;
          setNum(v === "" ? "" : Number(v));
          console.log(e.target.value);
          setGen("not-done");
        }}
        placeholder="Number of Dice..."
      />
      <button className="dice-btn">Submit</button>
    </form>
  );
};

export default Form;
