import { collection, getDocs } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { db } from "../Firebase/firebaseConfig";

const Context = createContext();

function ContextProvider({ children }) {
  const [dataFormWHA, setDataFormWHA] = useState([]);
  const [gener, setGener] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSider, setShowSider] = useState(false);
  const [videohp, setVideohp] = useState([]);

  const funcionVideosHps = async () => {
    const videose = await getDocs(collection(db, "videos"));
    setVideohp(videose.data());
  };

  const handleModal = () => {
    setShowModal(!showModal);
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
    videohp,
    setVideohp,
    funcionVideosHps,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
