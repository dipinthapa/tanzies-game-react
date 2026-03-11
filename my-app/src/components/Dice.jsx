import React from "react";
import { nanoid } from "nanoid";
import "../styles/tenzie.css"

const Dice = (props) => {
  const faces = [
    [<div key={nanoid()} className="dot center middle"></div>],

    [
      <div key={nanoid()} className="dot top right"></div>,
      <div key={nanoid()} className="dot bottom left"></div>,
    ],

    [
      <div key={nanoid()} className="dot top right"></div>,
      <div key={nanoid()} className="dot center middle"></div>,
      <div key={nanoid()} className="dot bottom left"></div>,
    ],

    [
      <div key={nanoid()} className="dot left top"></div>,
      <div key={nanoid()} className="dot top right"></div>,
      <div key={nanoid()} className="dot bottom left"></div>,
      <div key={nanoid()} className="dot bottom right"></div>,
    ],

    [
      <div key={nanoid()} className="dot left top"></div>,
      <div key={nanoid()} className="dot top right"></div>,
      <div key={nanoid()} className="dot center middle"></div>,
      <div key={nanoid()} className="dot bottom left"></div>,
      <div key={nanoid()} className="dot bottom right"></div>,
    ],

    [
      <div key={nanoid()} className="dot left top"></div>,
      <div key={nanoid()} className="dot top right"></div>,
      <div key={nanoid()} className="dot center left"></div>,
      <div key={nanoid()} className="dot center  right"></div>,
      <div key={nanoid()} className="dot bottom left"></div>,
      <div key={nanoid()} className="dot bottom right"></div>,
    ],
  ];

  let face = faces[props.value - 1];
  return (
    <>
      <div
        onClick={props.holdDice}
        className={props.isHeld ? "dice held" : "dice"}
      >
        {face}
      </div>
    </>
  );
};

export default Dice;
