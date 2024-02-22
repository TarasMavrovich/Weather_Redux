import React from "react";
import style from "./style.module.css";

const Button = ({ handleShowModal }) => {
  return (
    <div className={style.btn}>
      <button className={style.button} onClick={handleShowModal}>
        <p style={{ fontSize: "20px" }}>+</p>
        <p>Add Trip</p>
      </button>
    </div>
  );
};

export default Button;
