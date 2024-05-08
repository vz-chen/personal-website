import React from "react";
import TearneyLab from "../assets/TearneyLab.jpg";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Tearney = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <button
          onClick={() => navigate("/Explorations")}
          className="ml-3 mr-auto mt-[32px] pr-[5px] text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
        >
          <MdOutlineArrowBackIos />
        </button>
        <h1
          className="text-[60px] mx-auto items-center"
          style={{ fontFamily: "Against" }}
        >
          Mechanical Engineer Intern (Co-op)
        </h1>
      </div>
      <div className="flex flex-row h-[90vh] items-center w-5/6 mx-auto">
        <div className="w-1/3">
          <img
            className="border border-black h-full p-5 border-[1px] mx-auto"
            alt=""
            src={TearneyLab}
          ></img>
        </div>
        <div className="flex flex-col w-2/3 mx-auto px-20">
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>@ Tearney Lab (Harvard Medical School and Massachusetts General Hospital) in Boston</h3>
          </div>
          <p className="italic py-5 text-l">January - April 2024</p>
          <li className="w-full text-xl mx-auto">
          Optimized and designed a bedside catheter validation device for potential difference measurements
          </li>
          <li className="w-full text-xl mx-auto">
          Submitted abstract to NACFC’s Annual Conference in Boston!
          </li>
          <li className="w-full text-xl mx-auto">
          Programmed algorithms in MATLAB to process data from validation device testing
          </li>
          <li className="w-full text-xl mx-auto">
          Modelled and manufactured optical coherence tomography (OCT ) systems for imaging of stomach villae, lower airway and nasal passage
          </li>
          <li className="w-full text-xl mx-auto">
          Developed and implemented deep learning algorithms using PyTorch for the diagnosis and tissue segmentation of cystic fibrosis from optical coherence tomography (OCT) data, achieving a Dice score of 92%
          </li>
          <li className="w-full text-xl mx-auto">
          Worked in parallel on 3 projects (last one hasn’t been published yet)
          </li>
          <li className="w-full text-xl mx-auto">
          2 patents of designs I created pending!
          </li>
          <p className="font-bold w-full text-xl mx-auto pt-5">
            Top Skills Utilized:
          </p>
          <li className="w-full text-xl mx-auto">
            SolidWorks
          </li>
          <li className="w-full text-xl mx-auto">
            Python
          </li>
          <li className="w-full text-xl mx-auto">
            MATLAB
          </li>
          <li className="w-full text-xl mx-auto">
            Altium
          </li>
          <li className="w-full text-xl mx-auto">
            Electronics fabrication and assembly (soldering, fibre polishing, circuitry)
          </li>
        </div>
      </div>
    </div>
  );
};

export default Tearney;
