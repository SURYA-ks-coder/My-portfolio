import React from "react";
import "./Section.css";

function Section2() {
  return (
    <div className="grid grid-cols-2 gap-3 h-[45rem] bg-gray-600 items-center px-20 ">
      <div className=" w-[50rem] h-[50rem] bg-yellow-500 rounded-full absolute  left-32 mix-blend-multiply blur-[10rem] z-0"></div>

      <div
        className="relative h-[30rem] w-96 m-5 text-white rounded-xl"
        id="bg-gradient"
      >
        <div className="flex items-start justify-center relative">
          <div className="mt-20">
            <h1 className="font-bold text-9xl">03</h1>
            <h1 className="font-bold text-2xl">Months Of experience</h1>
          </div>
        </div>
        <div
          className=" relative left-40 top-20 rounded-xl flex p-4 module btn-gradient-2 "
          id="bg-gradient2"
        >
          <h1 className="font-bold text-6xl ">100%</h1>
          <p className="font-bold text-2xl">clients Statisfaction</p>
        </div>
      </div>
      <div className=" text-white text-start items-start relative">
        <h1 className=" text-6xl font-bold py-5">My Advantage</h1>
        <p className="py-3">
          Must explain to you how all this mistaken idea of denouncing pleasure
          and praising pain was born and I will give you a complete account the
          system and expound the actual and praising pain was born.
        </p>
        <div className="grid grid-cols-3 gap-3 mt-10 relative">
          <div className="py-20 bg-white rounded-2xl btn-gradient-3 text-center">
            HTML
          </div>
          <div className="py-20 bg-white rounded-2xl btn-gradient-3 text-center">
            CSS
          </div>
          <div className="py-20 bg-white rounded-2xl btn-gradient-3 text-center">
            Tailwind CSS
          </div>
          <div className="py-20 bg-white rounded-2xl btn-gradient-3 text-center">
            React
          </div>
          <div className="py-20 bg-white rounded-2xl btn-gradient-3 text-center">
            Mongodb
          </div>
          <div className="py-20 bg-white rounded-2xl btn-gradient-3 text-center">
            Bootstrap
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className=" bg-red-600 w-56 h-56 rounded-full absolute top-[90rem] right-0"></div>
      </div> */}
    </div>
  );
}

export default Section2;
