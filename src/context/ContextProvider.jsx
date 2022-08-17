import React, { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [dataFormWHA, setDataFormWHA] = useState([]);
  const [gener, setGener] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSider, setShowSider] = useState(false);
  const [prueba, setPrueba] = useState([]);
  const [musculoEncontrado, setMusculoEncontrado] = useState([]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleSider = () => {
    setShowSider(!showSider);
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
    handleSider,
    showSider,
    handleFilter,
    showFilter,
    setShowSider,
    prueba,
    setPrueba,
    musculoEncontrado,
    setMusculoEncontrado,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
