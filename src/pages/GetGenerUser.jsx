import React from "react";
import ExitInfo from "../components/ExitInfo";
import FormGener from "../components/FormGener";
import LogoAndTitle from "../components/LogoAndTitle";

function GetGenerUser({ title }) {
  return (
    <>
      <ExitInfo rute={-1} className="self-start" />
      <LogoAndTitle text={title} />
      <FormGener />
    </>
  );
}

export default GetGenerUser;
