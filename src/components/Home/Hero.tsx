import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#124559] text-white font-work-sans flex flex-col w-screen p-4">
      <ul className="flex justify-evenly">
        <li className="font-sans">Home</li>
        <li className="font-sans">Gigs</li>
        <li className="font-sans">Sign up</li>
      </ul>
      <div className="w-full flex justify-center items-center h-52">
        <h1 className="font-heads font-bold text-5xl">SMARTLANCE</h1>
      </div>
    </div>
  );
};

export default Hero;
