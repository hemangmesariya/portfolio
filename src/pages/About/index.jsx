import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-40 bg-[#f5f5f5]">
      <div className="grid grid-cols-2 max-w-[1200px] mx-auto grid-flow-row-dense gap-4 ">
        <div className="pr-0">
          <img
            width={500}
            src="https://kerrilive.netlify.app/light/images/about.jpg"
            alt="about"
          />
        </div>
        <div>
          <div className="flex flex-row items-center">
            <h1 className="font-bold text-3xl">About</h1>
            <p className="text-3xl p-2">Me</p>
          </div>
          <div className="flex flex-row items-center pb-3">
            <h2 className="text-2xl">Hello!</h2>
            <p className="text-2xl text-[#e65f78]">I'M Hemang.</p>
          </div>
          <div className="text-[#6c757d] flex flex-col gap-3">
            <p className="">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
