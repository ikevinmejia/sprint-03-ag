import React from "react";

const SliderHome = () => {
  return (
    <div className="flex w-full pb-6 overflow-x-scroll transition-all duration-500 scrollbar-thumb-rounded scrollbar hover:scrollbar-thumb-primary lg:justify-center">
      <div className="flex items-center justify-start gap-5 ml-5 w-max">
        <div className=" mt-5 flex h-32 w-72  items-center justify-center rounded-xl bg-[#2E3562] px-5">
          <div className="flex flex-col gap-4 text-white">
            <h1 className="text-xl font-medium">Warm up</h1>
            <p className="text-sm font-light">
              Before training, be sure to warm up, give it 5 - 10 minutes
            </p>
          </div>
          <img
            className="w-16"
            src="https://res.cloudinary.com/dnont3pur/image/upload/v1659822379/Sprint-3/%D0%A1%D0%BB%D0%BE%D0%B9_1_2_iuiecl.png"
            alt="icon"
          />
        </div>
        <div className=" mt-5 flex h-32 w-72  items-center justify-center rounded-xl bg-[#2E3562] px-5">
          <div className="flex flex-col gap-4 text-white">
            <h1 className="text-xl font-medium">Intensive train</h1>
            <p className="text-sm font-light">
              after warm up, be sure to train, give it 25 - 45 minutes
            </p>
          </div>
          <img
            className="w-16"
            src="https://res.cloudinary.com/dnont3pur/image/upload/v1659822379/Sprint-3/%D0%A1%D0%BB%D0%BE%D0%B9_1_2_iuiecl.png"
            alt="icon"
          />
        </div>
        <div className=" mt-5 flex h-32 w-72  items-center justify-center rounded-xl bg-[#2E3562] px-5">
          <div className="flex flex-col gap-4 text-white">
            <h1 className="text-xl font-medium">Warm up</h1>
            <p className="text-sm font-light">
              after training, be sure to warm up, give it 5 - 10 minutes
            </p>
          </div>
          <img
            className="w-16"
            src="https://res.cloudinary.com/dnont3pur/image/upload/v1659822379/Sprint-3/%D0%A1%D0%BB%D0%BE%D0%B9_1_2_iuiecl.png"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
