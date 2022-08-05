import React from "react";

function Button({ text, event }) {
  return (
    <button
      className="w-40 h-10 max-w-sm text-white transition-all duration-700 border rounded-3xl hover:w-full hover:border-transparent hover:bg-primary"
      onClick={event}
    >
      {text}
    </button>
  );
}

export default Button;
