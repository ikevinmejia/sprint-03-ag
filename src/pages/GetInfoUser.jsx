import React from "react";
import ExitInfo from "../components/ExitInfo";
import FormWHA from "../components/FormWHA";
import LogoAndTitle from "../components/LogoAndTitle";

import { FiLogOut } from "react-icons/fi";
import { getAuth } from "firebase/auth";

function GetInfoUser({ title, dataInput, placeholder, textLabel, goTo }) {
  const auth = getAuth();

  return (
    <>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        <FiLogOut color="#2BE7E8" size={"30"} />
      </button>
      <ExitInfo rute={-1} className="self-start" />
      <LogoAndTitle text={title} />
      <FormWHA
        dataInput={dataInput}
        placeholder={placeholder}
        textLabel={textLabel}
        goTo={goTo}
      />
    </>
  );
}

export default GetInfoUser;
