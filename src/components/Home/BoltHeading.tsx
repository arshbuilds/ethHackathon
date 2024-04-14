import React from "react";
import { FaBolt } from "react-icons/fa6";

type Props = {};

const BoltHeading = (props: Props) => {
  return (
    <div className="flex w-full items-center p-4 flex-col">
      <FaBolt size={40}/>
      <span className="my-6 font-heads text-3xl font-bold text-center">Ready to dive into the future of freelancing? Join the Smartlance wave now!</span>
      <button className="bg-[#598392] w-full text-white p-2 rounded-xl">Sign up</button>
      <button className="bg-white w-full text-black p-2 rounded-xl my-3">Learn More</button>
    </div>
  );
};

export default BoltHeading;
