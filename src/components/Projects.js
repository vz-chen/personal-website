import React from "react";
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import StrawbFace from "../assets/StrawbFace.jpg";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-auto justify-center gap-5">
      <div className="h-[180vh] flex flex-col justify-center">
        <h2
          className="text-[70px] mx-auto py-2"
          style={{ fontFamily: "Against" }}
        >
          Explorations :P
        </h2>
        <div className="flex flex-col mt-[20px]">
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>Recent Experiences</h3>
          </div>

          <div className="flex gap-8 justify-between mx-20 px-10 pb-10">
            <div className="text-[20px] w-[30px] flex transform ease-in-out transition-all hover:text-[25px] hover:text-[#F67B53]">
              <TfiArrowLeft
                className="mx-auto my-auto"
                style={{ strokeWidth: "1px" }}
              />
            </div>

            <div className="border border-black w-1/3 h-80 rounded-2xl relative">
              <div className="border border-black bg-red-500 w-5/6 mx-auto overflow-y-hidden h-[180px] mt-7 rounded-2xl">
                <img src={StrawbFace} alt="" className=""></img>
              </div>
              <p className="pl-7 py-3">
                Application Developer<br></br>CIBC
              </p>
              <div className="flex flex-row">
                <p className="pl-7">Co-op</p>
                <button onClick={() => navigate("/CIBC")}>
                  <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" />
                </button>
              </div>
            </div>
            <div className="border border-black w-1/3 h-80 rounded-2xl">
              <div className="border border-black w-5/6 mx-auto h-[180px] mt-7 rounded-2xl">
                hi
              </div>
              <p className="pl-7 py-3">
                Biomechanics Research Assistant<br></br>Structural Biomechanics
                Lab
              </p>
              <div className="flex flex-row">
                <p className="pl-7">URA</p>
                <button
                  onClick={() => navigate("/URA")}
                  className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]"
                >
                  <MdOutlineArrowForwardIos/>
                </button>
              </div>
            </div>

            <div className="border border-black w-1/3 h-80 rounded-2xl">
              <div className="border border-black w-5/6 mx-auto h-[180px] mt-7 rounded-2xl">
                hi
              </div>
              <p className="pl-7 py-3">
                Software & Hardware Member<br></br>UW Bio Mechatronics
              </p>
              <div className="flex flex-row">
                <p className="pl-7">Design Team</p>
                <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" />
              </div>
            </div>

            <div className="text-[20px] w-[30px] flex transform ease-in-out transition-all hover:text-[25px] hover:text-[#F67B53]">
              <TfiArrowRight
                className="mx-auto my-auto"
                style={{ strokeWidth: "1px" }}
              />
            </div>
          </div>
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>Projects</h3>
          </div>

          <div className="flex gap-8 justify-between mx-20 px-10 pb-10">
            <div className="text-[20px] w-[30px] flex transform ease-in-out transition-all hover:text-[25px] hover:text-[#F67B53]">
              <TfiArrowLeft
                className="mx-auto my-auto"
                style={{ strokeWidth: "1px" }}
              />
            </div>

            <div className="border border-black w-1/3 h-80 rounded-2xl relative">
              <div className="border border-black w-5/6 mx-auto h-[200px] mt-7 rounded-2xl">
                hi
              </div>
              <p className="pl-7 py-3">Heart Rate Facial Detection</p>
              <div className="flex flex-row">
                <p className="pl-7">Python, OpenCV, sk-learn</p>
                <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" />
              </div>
            </div>
            <div className="border border-black w-1/3 h-80 rounded-2xl">
              <div className="border border-black w-5/6 mx-auto h-[200px] mt-7 rounded-2xl">
                hi
              </div>
              <p className="pl-7 py-3">3-DOF Space Mouse</p>
              <div className="flex flex-row">
                <p className="pl-7">Fusion 360</p>
                <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" />
              </div>
            </div>

            <div className="border border-black w-1/3 h-80 rounded-2xl">
              <div className="border border-black w-5/6 mx-auto h-[200px] mt-7 rounded-2xl">
                hi
              </div>
              <p className="pl-7 py-3">Ultrasound Pulse Detection</p>
              <div className="flex flex-row">
                <p className="pl-7">C++, OpenGL</p>
                <MdOutlineArrowForwardIos className="mr-7 ml-auto text-[18px] w-[30px] flex transform ease-in-out transition-all hover:text-[20px]" />
              </div>
            </div>

            <div className="text-[20px] w-[30px] flex transform ease-in-out transition-all hover:text-[25px] hover:text-[#F67B53]">
              <TfiArrowRight
                className="mx-auto my-auto"
                style={{ strokeWidth: "1px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
