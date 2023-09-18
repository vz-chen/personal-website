import React from "react";
import StrawbFace from "../assets/StrawbFace.jpg";
import butterfly from "../assets/butterfly.svg";

import Gradient from "../assets/Gradient.png";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import explore from "../assets/Explore.svg";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
{
  /*className={`w-full flex flex-col md:flex-row ${styles.paddingY} bg-red-500`} */
}
const About = () => {
  return (
    <div className="flex flex-col mx-auto gap-5">
      <GradientContainer src={Gradient} alt="" className="" />
      <div className="h-[100vh] flex flex-col mx-auto justify-center">
        <div className="flex flex-col mt-10">
          <p className="text-xl" style={{ fontFamily: "Safira" }}>
            hi! i am
          </p>
          <h1 className="text-8xl mb-10" style={{ fontFamily: "Against" }}>
            Vanessa Chen
          </h1>
        </div>
        <div className="w-[150px] relative mx-auto mt-20">
          <img className="flex mx-auto" alt="" src={explore}></img>
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] text-[30px] ease-in-out transition-all hover:text-[40px]">
            <LiaLongArrowAltDownSolid className="mx-auto mt-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-row h-[90vh] items-center w-5/6 mx-auto">
        <div className="w-1/3">
          <img
            className="border border-black h-full p-5 border-[1px] mx-auto rounded-full"
            alt=""
            src={StrawbFace}
          ></img>
        </div>
        <div className="flex flex-col w-2/3 mx-auto px-20">
          <h2
            className="text-[70px] mx-auto py-10"
            style={{ fontFamily: "Against" }}
          >
            About Me!
          </h2>
          <p className="w-full text-xl mx-auto">
            Hi! I'm Vanessa, a 2A biomedical engineering student at the
            University of Waterloo. I love everything that has to do with
            improving human health. My interests lie in software, hardware,
            product design and{" "}
            <span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">
              sushi.
            </span>{" "}
            <br></br>
            <br></br>Feel free to take a look at what I've been up to!
          </p>
        </div>
      </div>
    </div>
  );
};

const PulsingAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    r
  }
  50% {
    transform: scale(0.6);
    transform: rotate(20deg) translateX(20px);
  }
  75% {
    transform: rotate(-20deg) translateX(-20px);
  }
`;

const GradientContainer = styled.img`
  position: absolute;
  top: -70px;
  left: 400px;
  z-index: -10;
  animation: ${PulsingAnimation} ease-in-out 4s infinite;
`;

export default About;
