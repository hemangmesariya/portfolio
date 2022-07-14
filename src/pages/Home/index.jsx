import React from "react";
import Navbar from "../../components/Navbar";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="h-screen w-full object-scale-down bg-cover bg-[url('https://res.cloudinary.com/hemang/image/upload/f_auto/v1656236320/portfolio/background_dsbwby.webp')]">
      <Navbar />
      <div className="flex flex-col items-center text-white font-bold p-6 text-4xl">
      <h1 className="text-3xl font-bold pt-24">Welcome</h1>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I'm a React Developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm a React Developer")
            .start();
        }}
      />
      </div>
    </div>
  );
};

export default Home;
