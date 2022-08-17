import React from "react";
import CardsVideos from "../components/CardsVideos";
import ExitInfo from "../components/ExitInfo";
import ImgDays from "../components/ImgDays";

const VideoTraining = () => {
  return (
    <div className="container mx-auto">
      <ExitInfo rute={"/home"} />
      <ImgDays />
      <CardsVideos />
    </div>
  );
};

export default VideoTraining;
