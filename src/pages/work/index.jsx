import React from "react";

const Work = () => {
  return (
    <div className="h-screen w-full mx-auto justify-around">
      <div className="w-full mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl p-5 ">My Work</h1>
      </div>
      <div className="flex flex-col justify-around">
        <div className="grid grid-cols-2">
          <div className="text-center h-[300px] w-full  mx-auto hover:bg-slate-200">
            <img src="https://res.cloudinary.com/hemang/image/upload/f_auto/v1657885772/portfolio/project_movie_e1alux.webp" alt="" srcset="" />
          </div>
          <div className="text-center h-[300px] w-full  mx-auto hover:bg-slate-200">
            work2
          </div>
          <div className="text-center h-[300px] w-full  mx-auto hover:bg-slate-200">
            work3
          </div>
          <div className="text-center h-[300px] w-full  mx-auto hover:bg-slate-200">
            work4
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Work;
