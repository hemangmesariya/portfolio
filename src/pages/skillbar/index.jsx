import React from "react";
import '../../assets/css/skillbar.css'

const SkillBar = () => {
  return (
    <div className="h-screen w-full bg-[#f5f5f5]">
      <div className="skill">
        <h1 className="text-3xl font-bold">My Skills</h1>
        <li>
          <h1 className="">HTML</h1>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>
        <li>
          <h1>CSS</h1>
          <span className="bar">
            <span className="css"></span>
          </span>
        </li>
        <li>
          <h1>Javascript</h1>
          <span className="bar">
            <span className="javascript"></span>
          </span>
        </li>
        <li>
          <h1>Github</h1>
          <span className="bar">
            <span className="github"></span>
          </span>
        </li>
        <li>
          <h1>Tailwind</h1>
          <span className="bar">
            <span className="tailwind"></span>
          </span>
        </li>
        <li>
          <h1>React</h1>
          <span className="bar">
            <span className="react"></span>
          </span>
        </li>
      </div>
    </div>
  );
};

export default SkillBar;
