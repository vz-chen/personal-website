import React from "react";
import StrawbFace from "../assets/StrawbFace.jpg";
import butterfly from "../assets/butterfly.svg";
import styles from "../style";
import Gradient from "../assets/Gradient.png";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

{
  /*className={`w-full flex flex-col md:flex-row ${styles.paddingY} bg-red-500`} */
}
const About = () => {
  return (
    <AboutContainer>
      <GradientContainer src={Gradient} alt="" />
      <NameContainer>
        <p className="text-4xl">hi! i am</p>
        <h1>Vanessa Chen</h1>
      </NameContainer>
      <h2>welcome to my website</h2>
      <p className="text-md">
        Hi! I'm Vanessa, a 2A biomedical engineering student at the University
        of Waterloo. I love everything that has to do with improving human
        health. My interests lie in software, hardware, product design and
        sushi. Please feel free to take a look at what I've been up to!
      </p>
    </AboutContainer>
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
  top: -120px;
  z-index: 0;
  animation: ${PulsingAnimation} ease-in-out 4s infinite;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  position: relative;
  height: 500px;

  > h2 {
    z-index: 20;
    margin-top: 50px;
    font-family: Dream;
    color: black;
    font-size: 25px;
  }
  > p {
    z-index: 19;
    margin-top: 70px;
    font-family: Helvetica;
    color: black;
    font-size: 20px;
  }
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  flex-direction: column;
  > p {
    font-family: Safira;
    color: black;
    font-size: 20px;
    text-align: left;

    // > span {
    //   font-size: 30px;
    // }
  }
  > h1 {
    font-family: Against;
    color: black;
    font-size: 80px;
    text-align: left;
  }
`;

export default About;
