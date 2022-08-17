import React from "react";
import ExitInfo from "../components/ExitInfo";

const WorkoutAdded = () => {
  return (
    <div className="container mx-auto">
      <ExitInfo rute={-1} text={"Workouts added"} estilos={"text-white"} />
      <img
        className="mx-auto mt-10 w-52 md:w-64"
        src="https://res.cloudinary.com/dnont3pur/image/upload/v1660448351/Sprint-3/Svg_uoikn4.png"
        alt="cosa"
      />
      <div className="w-11/12 max-w-2xl mx-auto mt-10 text-xs text-white md:text-sm">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
          enim eu turpis egestas pretium aenean pharetra magna ac. Eleifend
          donec pretium vulputate sapien nec. Laoreet non curabitur gravida arcu
          ac tortor. Elit eget gravida cum sociis natoque penatibus et magnis
          dis. Volutpat blandit aliquam etiam erat. Placerat in egestas erat
          imperdiet sed euismod nisi porta. Vitae auctor eu augue ut lectus
          arcu. Et odio pellentesque diam volutpat commodo sed. Dignissim diam
          quis enim lobortis scelerisque. Mollis nunc sed id semper risus in
          hendrerit gravida.
        </p>
      </div>
    </div>
  );
};

export default WorkoutAdded;
