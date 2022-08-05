import React, { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [dataFormWHA, setDataFormWHA] = useState([]);
  const [gener, setGener] = useState("");

  const data = {
    dataFormWHA,
    setDataFormWHA,
    gener,
    setGener,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
