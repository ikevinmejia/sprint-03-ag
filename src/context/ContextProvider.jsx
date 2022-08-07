import React, { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [dataFormWHA, setDataFormWHA] = useState([]);
  const [gener, setGener] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const data = {
    dataFormWHA,
    setDataFormWHA,
    gener,
    setGener,
    isSelected,
    setIsSelected,
    handleModal,
    showModal,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
