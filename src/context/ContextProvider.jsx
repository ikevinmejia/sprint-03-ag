import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { db } from "../Firebase/firebaseConfig";

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
  const [videohp, setVideohp] = useState([]);

  const funcionVideosHps = async () => {
    const videose = await getDocs(collection(db, "videos"));
    setVideohp(videose.data());
  };

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
    videohp,
    setVideohp,
    funcionVideosHps,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
