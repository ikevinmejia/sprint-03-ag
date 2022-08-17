import React, { useState, useEffect } from "react";
import { BiCheck } from "react-icons/bi";
import { db } from "../Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";

const CardsVideos = () => {
  const [prueba2, setPrueba2] = useState([]);
  const { setVideohp, videohp } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const calzon2 = async () => {
      const videoses = await getDocs(collection(db, "videos"));

      videoses.forEach((doc) => {
        if (prueba2.length < 1) {
          setPrueba2((prev) => [...prev, doc.data()]);
        }
      });
    };
    calzon2();
  }, []);

  const handleRedirect = ({ target }) => {
    if (target.nodeName === "BUTTON") {
      const aux = prueba2.find((url) => url.id === target.id);
      if (videohp) {
        setVideohp(aux.video);
        console.log(videohp);
        navigate("/Videos");
      }
    }
  };

  return (
    <div className="container mx-auto mt-10 ">
      <div className="scrollbar-track-none scrollbar-thumb-none flex h-[500px] w-full flex-col items-center gap-3 overflow-y-scroll scrollbar">
        {prueba2 &&
          prueba2.map(({ title, id }, index) => (
            <button
              id={id}
              onClick={(e) => handleRedirect(e)}
              key={index}
              className="flex items-center justify-between w-full h-12 max-w-lg px-10 text-white border  rounded-3xl border-primary focus:bg-primary"
            >
              <div className="flex items-center gap-5 text-lg w-52">
                <h1 className="text-xl">{index}</h1>
                <p>{title}</p>
              </div>
              <BiCheck size={40} />
            </button>
          ))}
      </div>
      <div className="flex justify-center w-full">
        <h1 className="text-sm font-light text-white">Finish early</h1>
      </div>
    </div>
  );
};

export default CardsVideos;
