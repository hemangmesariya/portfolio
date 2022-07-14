import React from "react";
import HTML from "../../assets/images/html.png";
import JS from "../../assets/images/javascript.png";
import GitHub from "../../assets/images/github.png";
import TailWind from "../../assets/images/tailwind.png";
import ReactImg from "../../assets/images/react.png";
import CSS from "../../assets/images/css.png";
const Skill = () => {
  return (
    <div className="h-screen w-full  bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="gap-3 p-5 text-center pb-24">
          <h1 className="font-bold text-3xl">Skills</h1>
          <p className="text-xl text-[#6c757d] pt-2">
            These are the techonologies i've worked with
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-red border border-gray-300 pt-3 hover:scale-105 duration-500 hover:bg-slate-200">
            <img src={HTML} className="w-20 mx-auto" alt="HTML img" />
            <p className="my-4">HTML</p>
          </div>
          <div className="flex flex-col items-center bg-red border border-gray-300 pt-3 hover:scale-105 duration-500 hover:bg-slate-200">
            <img src={CSS} className="w-20 mx-auto" alt="HTML img" />
            <p className="my-4">CSS</p>
          </div>
          <div className="flex flex-col items-center bg-red border border-gray-300 pt-3 hover:scale-105 duration-500 hover:bg-slate-200">
            <img src={JS} className="w-20 mx-auto" alt="HTML img" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="flex flex-col items-center bg-red border border-gray-300 pt-3 hover:scale-105 duration-500 hover:bg-slate-200">
            <img src={GitHub} className="w-20 mx-auto" alt="HTML img" />
            <p className="my-4 ">GitHub</p>
          </div>
          <div className="flex flex-col items-center bg-red border border-gray-300 pt-3 hover:scale-105 duration-500 hover:bg-slate-200">
            <img src={TailWind} className="w-20 mx-auto" alt="HTML img" />
            <p className="my-4">TailWind</p>
          </div>
          <div className="flex flex-col items-center bg-red border border-gray-300 pt-3 hover:scale-105 duration-500 hover:bg-slate-200">
            <img src={ReactImg} className="w-20 mx-auto" alt="HTML img" />
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
