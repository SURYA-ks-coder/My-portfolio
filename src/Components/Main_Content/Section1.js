import React from "react";
import Profile from "../Images/profile1.png";
// import img1 from "../Images/React Logo.png";

function Section1() {
  return (
    // <div className="flex justify-between px-20 h-[40rem] ">
    //   <div className=" c ">
    //     <h1 className=" text-5xl text-yellow-200 flex justify-start py-4">
    //       Hello,
    //     </h1>
    //     <h1 className="text-6xl flex justify-start py-2">I AM SURYA.</h1>
    //     <h2 className="text-2xl text-green-500 flex justify-start">
    //       MERN Stack Developer
    //     </h2>
    //     <p className="text-2xl flex justify-start py-2">
    //       Must explain to how all this mistaken idea denouncing pleasure pain
    //       the system and expound the actua.
    //     </p>
    //     <button className="flex justify-start bg-green-500 p-4 text-white rounded-full">
    //       Hire Me
    //     </button>
    //   </div>
    //   <div>
    //     <img src={Profile} alt="" className="h-full w-full" />
    //   </div>
    // </div>
    <div className="grid grid-cols-2 gap-2 px-20 h-[60rem] w-full bg-gray-600">
      <div className="relative  top-72 z-50 font-bold">
        <h1 className=" text-6xl text-yellow-200 flex justify-start py-4">
          Hello,
        </h1>
        <h1 className="text-7xl flex justify-start py-2 text-white">
          I AM SURYA.
        </h1>
        <h2 className="text-5xl text-green-500 flex justify-start py-5">
          MERN Stack Developer
        </h2>
        <h2 className="text-2xl text-white flex justify-start">
          Must explain to how all this mistaken idea denouncing
        </h2>
        <h1 className="text-2xl text-white flex justify-start">
          pleasure pain the system and expound the actua.
        </h1>
        {/* <h1 className="text-2xl relative left-0 py-4 text-white">
          Must explain to how all this mistaken idea denouncing
        </h1>
        <h1 className="text-2xl relative left-0 py-4 text-white">
          pleasure pain the system and expound the actua.
        </h1> */}
        <button className="flex justify-start bg-green-500 p-4 text-white rounded-full mt-6">
          Hire Me
        </button>
      </div>
      <div className="">
        <div className="">
          {/* <div className=" relative left-0 top-56 w-32 h-32 z-50 bg-white rounded-xl">
            <img src={img1} alt="" />
          </div> */}
          <img
            src={Profile}
            alt=""
            className="absolute top-72 left-[50rem] z-50 bg-[#5493ff] rounded-full w-[30rem] h-[30rem]"
          />
        </div>
        <div className=" w-screen">
          <div className=" w-[60rem] h-[50rem] bg-red-500 rounded-full absolute top-[-10rem] left-[-20rem] mix-blend-multiply blur-[10rem] z-30"></div>
          <div className=" w-[50rem] h-[60rem] bg-[#113778]  absolute top-[-30rem] right-0 mix-blend-multiply z-40 rounded-tl-full rounded-bl-full blur-[10rem] brightness-150 "></div>
          <div className=" w-[50rem] h-[50rem] bg-yellow-500 rounded-full absolute top-10 left-96 mix-blend-multiply blur-[10rem] z-30"></div>
          <div className=" w-[90rem] h-[10rem] bg-gray-800 rounded-full absolute top-[40rem] left-[-20rem] mix-blend-multiply blur-[10rem] z-50"></div>
          {/* <div className=" w-[50rem] h-[70rem] bg-gray-800 rounded-tl-full rounded-bl-full absolute top-[30rem] right-0 mix-blend-multiply blur-[8rem] z-0"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Section1;
