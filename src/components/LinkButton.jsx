import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function LinkButton({ text, goTo }) {
  return (
    <Link to={goTo}>
      <Button text={text}></Button>
    </Link>
  );
}

export default LinkButton;
