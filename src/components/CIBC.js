import React from "react";
import CIBC from "../assets/CIBC.JPG";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Cibc = () => {
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
          Application Developer (Co-op)
        </h1>
      </div>
      <div className="flex flex-row h-[90vh] items-center w-5/6 mx-auto">
        <div className="w-1/3">
          <img
            className="border border-black h-full p-5 border-[1px] mx-auto"
            alt=""
            src={CIBC}
          ></img>
        </div>
        <div className="flex flex-col w-2/3 mx-auto px-20">
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>@ Canadian Imperial Bank of Commerce (CIBC) HQ</h3>
          </div>
          <p className="italic py-5 text-l">May - August 2023</p>
          <li className="w-full text-xl mx-auto">
            Developed native automation regression, unit and paralllel tests
            using Python's Appium library
          </li>
          <li className="w-full text-xl mx-auto">
            Optimized tests using AI tools such as ConformIQ and Appium
          </li>
          <li className="w-full text-xl mx-auto">
            Created internal department tools to run parallel tests in Terminal
            and an AI object-detecting algorithm
          </li>
          <li className="w-full text-xl mx-auto">
            Reviewed wireflow and userflow diagrams on Figma to understand new
            app functionalities and user flow
          </li>
        </div>
      </div>
    </div>
  );
};

export default Cibc;
