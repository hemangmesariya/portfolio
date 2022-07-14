import React from "react";

const Work = () => {
  return (
    <div className="h-screen w-full mx-auto justify-around bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl p-5 ">My Work</h1>
      </div>
      <div className="flex flex-col justify-around">
        <div className="grid grid-cols-2">
          <div className="m-3 text-center h-[200px] w-[400px] mr-2 mx-auto border border-gray-300 hover:scale-105 duration-500 hover:bg-slate-200">
            work1
          </div>
          <div className="m-3 text-center h-[200px] w-[400px] ml-2 mx-auto border border-gray-300 hover:scale-105 duration-500 hover:bg-slate-200">
            work2
          </div>
          <div className=" m-3 text-center h-[200px] w-[400px] mr-2 mx-auto border border-gray-300 hover:scale-105 duration-500 hover:bg-slate-200">
            work3
          </div>
          <div className="m-3 text-center h-[200px] w-[400px] ml-2 mx-auto border border-gray-300 hover:scale-105 duration-500 hover:bg-slate-200">
            work4
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Work;
