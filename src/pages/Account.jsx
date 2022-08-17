import { Avatar, Label, TextInput, Button } from "flowbite-react";
import React from "react";
import ExitInfo from "../components/ExitInfo";
import { GiWeight } from "react-icons/gi";
import { HiMail, HiPhone } from "react-icons/hi";
import { FiAtSign } from "react-icons/fi";
import { CgArrowsShrinkV, CgCircleci } from "react-icons/cg";
import { default as Boton } from "../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginProvider } from "../Redux/Actions/userActions";
import { db } from "../Firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

const Account = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  const formik = useFormik({
    initialValues: {
      displayName: "",
      phone: "",
      email: "",
    },
    // validationSchema: SignupSchema,
    validationSchema: Yup.object({
      displayName: Yup.string()
        .min(4, "Very short")
        .max(15, "Very long")
        .required("Required"),
      phone: Yup.number().positive().integer().required("Required"),
      email: Yup.string().email("Email@mail.com").required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const data = {
        displayName: values.displayName,
        email: values.email,
        phone: values.phone,
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
      console.log(updateitems);
    },
  });

  return (
    <div className="container flex flex-col items-center justify-between gap-8 mx-auto">
      <ExitInfo rute={-1} text={"Account"} estilos={"text-white"} />
      <Avatar
        img={
          login.photoURL
            ? "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            : login.photoURL
        }
        size="lg"
        rounded={true}
        status="online"
        statusPosition="top-right"
      />
      <div className="flex flex-wrap gap-2">
        <Button.Group outline={true}>
          <Button color="dark">
            <GiWeight className="w-4 h-4 mr-3" /> 28
          </Button>
          <Button color="dark">
            <CgArrowsShrinkV className="w-4 h-4 mr-3" /> 178
          </Button>
          <Button color="dark">
            <CgCircleci className="w-4 h-4 mr-3" /> 28
          </Button>
        </Button.Group>
      </div>

      <form
        className="flex flex-col w-full max-w-lg gap-6"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <div className="block mb-2">
            <Label htmlFor="displayName" value="NickName" color={"info"} />
          </div>
          <TextInput
            id="displayName"
            placeholder={login.displayName}
            required={true}
            icon={FiAtSign}
            name="displayName"
            onChange={formik.handleChange}
            value={formik.values.displayName}
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="phone" value="Phone " color={"info"} />
          </div>
          <TextInput
            id="phone"
            type="number"
            placeholder="1234567"
            required={true}
            icon={HiPhone}
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email" value="Your email" color={"info"} />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder={login.email}
            required={true}
            icon={HiMail}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="w-full text-center">
          <Boton text={"Save"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Account;
