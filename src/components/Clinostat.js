import React from "react";
import Clinostat from "../assets/Clinostat.JPG";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Microgravity = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <button
          onClick={() => navigate("/Explorations")}
          className="ml-3 mr-auto mt-[32px] pt-8 pr-[5px] text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
        >
          <MdOutlineArrowBackIos />
        </button>
        <h1
          className="text-[60px] pt-8 mx-auto items-center"
          style={{ fontFamily: "Against" }}
        >
          Microgravity Simulator/Clinostat
        </h1>
      </div>
      <div className="flex flex-row h-[90vh] items-center w-5/6 mx-auto">
        <div className="w-1/3">
          <img
            className="border border-black h-full p-5 border-[1px] mx-auto"
            alt=""
            src={Clinostat}
          ></img>
        </div>
        <div className="flex flex-col w-2/3 mx-auto px-20">
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>with MIT AeroAstro and University of Bristol</h3>
          </div>
          <p className="italic py-5 text-l">January 2024 - Present</p>
          <p className="w-full text-xl mx-auto pb-5">
            During my co-op at the Tearney Lab, I met some cool people to collaborate on a novel spaceflight physiology research project that involves using a microgravity simulator (unfortunately can't disclose much since it's not published yet). The clinostat works on 2 stepper motors and has been tested to run continuously for over 100 hours. I also designed a sample capsule to be attached. 
          </p>
          <p className="font-bold w-full text-xl mx-auto pt-5">
            Major components:
          </p>
          <li className="w-full text-xl mx-auto">
            2 stepper motors
          </li>
          <li className="w-full text-xl mx-auto">
            Arduino Uno
          </li>
          <li className="w-full text-xl mx-auto">
            Belts
          </li>
          <li className="w-full text-xl mx-auto">
            3-D printed parts in ABS
          </li>
          <p className="w-full text-xl mx-auto py-5">
            Next steps: Move the circuitry to a perfboard and experimental testing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Microgravity;
