import React from "react";
import Biotron from "../assets/BioTron.JPG";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const CEC = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <button
          onClick={() => navigate("/")}
          className="mr-auto mt-[32px] pr-[5px] text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
        >
          <MdOutlineArrowBackIos />
        </button>
        <h1
          className="text-[60px] mx-auto items-center"
          style={{ fontFamily: "Against" }}
        >
          Software & Hardware Engineer
        </h1>
      </div>
      <div className="flex flex-row h-[90vh] items-center w-5/6 mx-auto">
        <div className="w-1/3">
          <img
            className="border border-black h-full p-5 border-[1px] mx-auto"
            alt=""
            src={Biotron}
          ></img>
        </div>
        <div className="flex flex-col w-2/3 mx-auto px-20">
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>@ UW Bio Mechatronics Design Team</h3>
          </div>
          <p className="italic py-5 text-l">September 2022 - Present</p>
          <p className="w-full text-xl  py-5">
            UW "Bio Tron" is a design team that designs and build prosthetics
            for clients and hospitals. I am currently a core member of the
            Electromyography (EMG) Fabric sub-team, working on both the software
            and hardware components of our new myo armband.
          </p>
          <li className="w-full text-xl mx-auto">
            Collected data from EMG sensors and Arduino to measure voltage from
            muscle contractions from forearm
          </li>
          <li className="w-full text-xl mx-auto">
            Collected data from EMG sensors and Arduino to measure voltage from
            muscle contractions from forearm
          </li>
          <li className="w-full text-xl mx-auto">
            Soldered wires to electrodes and wires to wires to be attached to
            Arduino
          </li>
        </div>
      </div>
    </div>
  );
};

export default CEC;
