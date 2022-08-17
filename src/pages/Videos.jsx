import React, { useContext } from "react";
import { BiCheck, BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Context } from "../context/ContextProvider";
import ReactPlayer from "react-player";
import Modal from "../components/Modal/Modal";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const Videos = () => {
  const navigate = useNavigate();
  const { videohp, showModal, handleModal } = useContext(Context);

  const showProgressBar = () => {
    handleModal();
  };

  return (
    <>
      <div className="container mx-auto">
        <button
          onClick={() => {
            navigate("/VideoTraining");
          }}
          className="absolute top-0 left-0 z-10 text-primary opacity-70 xl:left-32 2xl:left-64"
        >
          <BiChevronLeft size={40} />
        </button>
        <div className="relative flex max-w-5xl mx-auto">
          <ReactPlayer
            width="100%"
            controls
            url={videohp}
            style={{ margin: "auto" }}
          />
          <div className="absolute bottom-0 flex justify-between w-full px-5 mb-5">
            <p className="text-sm font-light text-white sm:text-base sm:font-normal lg:text-lg lg:font-medium">
              3 set
            </p>
            <p className="text-sm font-light text-white sm:text-base sm:font-normal lg:text-lg lg:font-medium">
              12 repetitions
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full h-48 gap-3 mt-10 md:h-72 lg:h-60">
          <button
            onClick={showProgressBar}
            className="flex items-center justify-between w-full h-12 max-w-lg px-10 text-white border rounded-3xl border-primary focus:bg-primary"
          >
            <h1>set 1</h1>
            <div className="flex flex-col items-center justify-center w-24 ">
              <p>12</p>
              <p className="text-xs font-light">repetitions</p>
            </div>
            <div className="flex flex-col items-center justify-center w-24 ">
              <p>15</p>
              <p className="text-xs font-light">kilograms</p>
            </div>
            <BiCheck size={40} />
          </button>

          <button className="flex items-center justify-between w-full h-12 max-w-lg px-10 text-white border rounded-3xl border-primary focus:bg-primary">
            <h1>set 2</h1>
            <div className="flex flex-col items-center justify-center w-24 ">
              <p></p>
              <p className="text-xs font-light"></p>
            </div>
            <div className="flex flex-col items-center justify-center w-24 ">
              <p></p>
              <p className="text-xs font-light"></p>
            </div>
            <BiCheck size={40} />
          </button>

          <button className="flex items-center justify-between w-full h-12 max-w-lg px-10 text-white border rounded-3xl border-primary focus:bg-primary">
            <h1>set 3</h1>
            <div className="flex flex-col items-center justify-center w-24 ">
              <p></p>
              <p className="text-xs font-light"></p>
            </div>
            <div className="flex flex-col items-center justify-center w-24 ">
              <p></p>
              <p className="text-xs font-light"></p>
            </div>
            <BiCheck size={40} />
          </button>
        </div>
        <div className="flex justify-center w-full mt-36 md:mt-0 lg:mb-10">
          <Button text={"Finish the exercise"} />
        </div>
      </div>

      {showModal && (
        <Modal>
          <ProgressBar show={handleModal} />
        </Modal>
      )}
    </>
  );
};

export default Videos;
