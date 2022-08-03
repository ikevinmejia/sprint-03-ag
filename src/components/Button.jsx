import React from "react";

function Button({ text, event }) {
  return (
    <button className="w-full h-10 max-w-lg text-white transition duration-200 rounded-3xl bg-primary hover:bg-cyan-300">
      {text}
    </button>
  );
}

export default Button;
