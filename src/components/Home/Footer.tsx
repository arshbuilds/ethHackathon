import React from "react";
import { AiFillInstagram } from "react-icons/ai";
// <AiFillInstagram />
import { FaSquareXTwitter } from "react-icons/fa6";
// <FaSquareXTwitter />
import { FaFacebook } from "react-icons/fa";
// <FaFacebook />
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-screen py-4 flex flex-col">
      <div className="flex w-full justify-center">
        <AiFillInstagram size={40} />
        <FaSquareXTwitter size={40} />
        <FaFacebook size={40} />
      </div>
      <span className="text-center p-4">
        © 2024 Smartlance
      </span>
    </div>
  );
};

export default Footer;
