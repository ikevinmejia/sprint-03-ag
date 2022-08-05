import React from "react";
import ExitInfo from "../components/ExitInfo";
import FormWHA from "../components/FormWHA";
import LogoAndTitle from "../components/LogoAndTitle";

function GetInfoUser({ title, dataInput, placeholder, textLabel, goTo }) {
  return (
    <>
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
