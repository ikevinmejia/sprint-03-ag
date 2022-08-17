import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsVideos from "../components/CardsVideos";
import ExitInfo from "../components/ExitInfo";
import ImgDays from "../components/ImgDays";
import { db } from "../Firebase/firebaseConfig";
import { useForm } from "../Hooks/useForm";
import { loginProvider } from "../Redux/Actions/userActions";

const VideoTraining = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const { formValue, handleInputChangeName, reset } = useForm({
    email: "",
    name: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      displayName: formValue.name,
      email: formValue.email,
      phone: formValue.phone,
      photoURL: login.photoURL,
      uid: login.uid,
    };
    dispatch(
      loginProvider(data.displayName, data.email, data.photoURL, data.uid)
    );
    const updateitems = doc(db, "users", login.uid);
    await updateDoc(updateitems, {
      displayName: data.displayName,
      email: data.email,
      phone: data.phone,
      photoURL: data.photoURL,
      uid: data.uid,
    });
  };

  return (
    <div className="container mx-auto">
      <ExitInfo rute={"/home"} />
      <ImgDays />
      <CardsVideos />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          onChange={handleInputChangeName}
          placeholder="displayName"
          type="text"
          name="name"
        />
        <input
          onChange={handleInputChangeName}
          placeholder="email"
          type="email"
          name="email"
        />
        <input
          onChange={handleInputChangeName}
          placeholder="phone"
          type="number"
          name="phone"
        />
        <button className="h-10 bg-primary" type="submit">
          Aceptar
        </button>
      </form>
    </div>
  );
};

export default VideoTraining;
