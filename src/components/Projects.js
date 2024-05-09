import React, { useState } from "react";
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Lab from "../assets/Lab.png";
import BioTron from "../assets/BioTron.jpeg";
import CIBCSquare from "../assets/CIBC-Square.jpeg";
import { useNavigate } from "react-router-dom";
import Mousey from "../assets/Mousey.jpg";
import igem from "../assets/IGEM.jpeg";
import Caribou from "../assets/Caribou.jpg";
import MMHSApp from "../assets/MMHSApp.png";
import Harvard from "../assets/Harvard.jpeg";
import MicroGrav from "../assets/MicroGrav.jpg";
import BasePlate from "../assets/BasePlateConfig.jpg";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col mx-auto justify-center gap-5 mb-20"
      id="explorations"
    >
      <div className="h-100 flex flex-col justify-center">
        <h2
          className="text-[70px] mx-auto py-2"
          style={{ fontFamily: "Against" }}
        >
          Explorations
        </h2>
        <div className="flex flex-col mt-[20px]">
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>Experiences</h3>
          </div>

          <div className="flex gap-8 justify-between mx-[80px] px-10 pb-10 grid grid-cols-3">
            {/* <div className="text-[20px] w-[30px] flex transform ease-in-out transition-all hover:text-[25px] hover:text-[#F67B53]">
              <TfiArrowLeft
                className="mx-auto my-auto"
                style={{ strokeWidth: "1px" }}
              />
            </div> */}
            
          <div className="border border-black h-80 rounded-2xl">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[210px] rounded-tl-2xl rounded-tr-2xl">
                <img src={Harvard} alt="" className="w-full h-full"></img>
              </div>
              <p className="pl-7 py-3">
                Mechanical Engineer Intern<br></br>Tearney Lab, Harvard Medical Schoool, ...
              </p>
              <div className="flex flex-row">
                <p className="pl-7">Co-op</p>
                <button
                  onClick={() => navigate("/Tearney")}
                  className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[210px] rounded-tl-2xl rounded-tr-2xl">
                <img src={CIBCSquare} alt="" className="w-full h-full"></img>
              </div>
              <p className="pl-7 py-3">
                Application Developer<br></br>CIBC
              </p>
              <div className="flex flex-row">
                <p className="pl-7">Co-op</p>
                <button
                  onClick={() => navigate("/CIBC")}
                  className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[210px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={Lab} alt="" className="h-full"></img>
              </div>
              <p className="pl-7 py-3">
                Electromechanical Research Assistant<br></br>Structural Biomechanics
                Lab
              </p>
              <div className="flex flex-row">
                <p className="pl-7">Undergrad Research Assistant</p>
                <button
                  onClick={() => navigate("/URA")}
                  className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[210px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={BioTron} alt="" className="h-full w-full"></img>
              </div>
              <p className="pl-7 py-3">
                Software & Hardware Member<br></br>UW Bio Mechatronics
              </p>
              <div className="flex flex-row">
                <p className="pl-7">Design Team</p>
                <button
                  onClick={() => navigate("/BioTron")}
                  className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[210px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={igem} alt="" className="h-full w-full"></img>
              </div>
              <p className="pl-7 py-3">
                Member (Math, Human Practices)<br></br>UW iGEM
              </p>
              <div className="flex flex-row">
                <p className="pl-7">Design Team</p>
                <button
                  onClick={() => navigate("/IGEM")}
                  className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>

            {/* <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[210px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={igem} alt="" className="h-full w-full"></img>
              </div>
              <p className="pl-7 py-3">
                Logistics Coordinator<br></br>Canadian Engineering Competition
              </p>
              <div className="flex flex-row">
                <p className="pl-7">Volunteering</p>
                <button
                  onClick={() => navigate("/IGEM")}
                  className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div> */}

            {/* <div className="text-[20px] w-[30px] flex transform ease-in-out transition-all hover:text-[25px] hover:text-[#F67B53]">
              <TfiArrowRight
                className="mx-auto my-auto"
                style={{ strokeWidth: "1px" }}
              />
            </div> */}
          </div>
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>Projects</h3>
          </div>

          <div className="flex gap-8 justify-between mx-[80px] px-10 pb-10 grid grid-cols-3">
            {/* <div className="text-[20px] w-[30px] flex transform ease-in-out transition-all hover:text-[25px] hover:text-[#F67B53]">
              <TfiArrowLeft
                className="mx-auto my-auto"
                style={{ strokeWidth: "1px" }}
              />
            </div> */}

            {/* <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[230px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
              </div>
              <p className="pl-7 py-3">Heart Rate Facial Detection</p>
              <div className="flex flex-row">
                <p className="pl-7">Python, OpenCV, sk-learn</p>
                <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" />
              </div>
            </div> */}

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[230px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={MicroGrav} alt="" className="w-full h-full"></img>
              </div>
              <p className="pl-7 py-3">Microgravity Simulator/Clinostat</p>
              <div className="flex flex-row">
                <p className="italic pl-7">SolidWorks, Arduino, Altium</p>
                <button 
                onClick={() => navigate("/Clinostat")}
                className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]">
                <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[230px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={BasePlate} alt="" className="w-full h-full"></img>
              </div>
              <p className="pl-7 py-3">Parabolic flight Experimental Modelling</p>
              <div className="flex flex-row">
                <p className="italic pl-7">SolidWorks</p>
                <button 
                onClick={() => navigate("/Spaceflight")}
                className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]">
                <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[230px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={Mousey} alt="" className="w-full h-full"></img>
              </div>
              <p className="pl-7 py-3">3-DOF Space Mouse</p>
              <div className="flex flex-row">
                <p className="italic pl-7">Fusion 360</p>
                {/* <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" /> */}
              </div>
            </div>

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[230px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={Caribou} alt="" className="w-full h-full"></img>
              </div>
              <p className="pl-7 py-3">Caribou Puzzle</p>
              <div className="flex flex-row">
                <p className="italic pl-7">SolidWorks</p>
                <button 
                onClick={() => navigate("/Puzzle")}
                className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]">
                <MdOutlineArrowForwardIos />
                </button>
                {/* <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" /> */}
              </div>
            </div>

            <div className="border border-black h-80 rounded-2xl ">
              <div className="border-b-black border-b mx-auto overflow-y-hidden h-[230px] rounded-tl-2xl rounded-tr-2xl">
                {" "}
                <img src={MMHSApp} alt="" className="w-full h-full"></img>
              </div>
              <p className="pl-7 py-3">Milliken App</p>
              <div className="flex flex-row">
                <p className="italic pl-7">Figma</p>
                {/* <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" /> */}
              </div>
            </div>

            {/* <div className="text-[20px] w-[30px] flex transform ease-in-out transition-all hover:text-[25px] hover:text-[#F67B53]">
              <TfiArrowRight
                className="mx-auto my-auto"
                style={{ strokeWidth: "1px" }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
