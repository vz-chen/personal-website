import React, { useRef } from "react";
import BasePlateConfig from "../assets/BasePlateConfig.jpg";
import BaseUgly from "../assets/BaseUgly.JPG";
import Clinostat from "../assets/ClinoFinal.JPG";
import ClinoParts from "../assets/ClinoParts.JPG";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Swiper from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spaceflight = () => {
  const navigate = useNavigate();
  const images = [BasePlateConfig, BaseUgly]
  const swipy = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  }
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
          {/* <img
            className="border border-black h-full p-5 border-[1px] mx-auto"
            alt=""
            src={Clinostat}
          ></img> */}
          <Swiper ref={swipy} {...settings}>
            {images.map((image) => (
              <img
              className="border border-black h-full p-5 border-[1px] mx-auto"
              alt=""
              src={image}
            />
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col w-2/3 mx-auto px-20">
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>Side project with my friend from MIT :)</h3>
          </div>
          <p className="italic py-5 text-l">March 2024</p>
          <p className="w-full text-xl mx-auto pb-5">
            My friend is a licensed pilot and wanted to test out her experiment on a parabolic flight, so I helped her model and design the parts on SolidWorks. 
            It started off with creating boxes with the right dimensions, but I carried it out to a full design as seen in the PhotoView360 image!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Spaceflight;
