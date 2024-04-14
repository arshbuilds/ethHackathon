import Image from "next/image";
import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import ImageInfo from "../components/Home/ImageInfo";
import Features from "../components/Home/Features";
import BoltHeading from "../components/Home/BoltHeading";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="my-10" />
      <Intro />
      <div className="my-10" />
      <ImageInfo />
      <div className="my-10" />
      <Features />
      <div className="my-10" />
      <BoltHeading />
      <div className="my-10" />
      <Footer />
    </div>
  );
}
