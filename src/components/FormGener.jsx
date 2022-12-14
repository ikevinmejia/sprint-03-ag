import React, { useContext } from "react";
import { IoMale, IoFemale } from "react-icons/io5";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWhag } from "../Redux/Actions/userActions";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

const styles = {
  width: "150px",
  height: "150px",
  zIndex: -1,
};

function FormGener() {
  const dispatch = useDispatch();
  const { setGener, gener, dataFormWHA } = useContext(Context);
  const dataReduxUser = useSelector((state) => state.login);

  const navigate = useNavigate();

  const whag = {
    weight: dataFormWHA[0].weightHeightAge,
    height: dataFormWHA[1].weightHeightAge,
    age: dataFormWHA[2].weightHeightAge,
    gener: gener,
  };

  const handleOnClick = ({ target }) => {
    if (target.nodeName === "svg") {
      setGener(target.id);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (gener != undefined) {
      dispatch(addWhag(whag));

      const data = {
        displayName: dataReduxUser.displayName,
        email: dataReduxUser.email,
        photoURL: dataReduxUser.photoURL,
        uid: dataReduxUser.uid,
        weight: whag.weight,
        height: whag.height,
        age: whag.age,
        gener: whag.gener,
        workouts: [],
      };

      await setDoc(doc(db, "users", dataReduxUser.uid), data);
      navigate("/Home");
    }
  };

  return (
    <form
      onSubmit={(e) => handleOnSubmit(e)}
      className="mx-auto flex h-[60vh] w-full max-w-sm flex-col items-center justify-start  px-3"
    >
      <div className="flex flex-col items-center w-full h-full justify-evenly">
        <div onClick={(e) => handleOnClick(e)}>
          <button className="transition-all duration-700 border rounded-3xl border-secondary hover:bg-secondary">
            <IoMale style={styles} color="#2be7e8" id="male" />
          </button>
          <p className="w-full text-lg font-medium text-center text-white">
            Male
          </p>
        </div>
        <div onClick={(e) => handleOnClick(e)}>
          <button className="transition-all duration-700 border rounded-3xl border-secondary hover:bg-secondary ">
            <IoFemale style={styles} color="#2be7e8" id="female" />
          </button>
          <p className="w-full text-lg font-medium text-center text-white">
            Female
          </p>
        </div>
      </div>
    </form>
  );
}

export default FormGener;
