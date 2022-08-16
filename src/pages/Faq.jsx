import React from "react";
import DivDesp from "../components/DivDesp";
import ExitInfo from "../components/ExitInfo";
import TitleAndBack from "../components/TitleAndBack";

const Faq = () => {
  return (
    <div className="container mx-auto">
      <ExitInfo rute={-1} text={"FAQ"} estilos={"text-white"} />
      <DivDesp
        title={"Where do I start"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
        }
      />
      <DivDesp title={"What happens if I don't pay for a subscription?"} />
      <DivDesp title={"Why the error occurred"} />
    </div>
  );
};

export default Faq;
