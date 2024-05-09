import React, { useRef } from "react";
import Caribou from "../assets/Caribou.jpg";
import Sketch1 from "../assets/PuzzleSketch1.jpg";
import Sketch2 from "../assets/PuzzleSketch2.jpg";
import Alive from "../assets/AliveCaribou.jpg";
import Dead from "../assets/DeadCaribou.jpg";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Swiper from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Puzzle = () => {
  const navigate = useNavigate();
  const images = [Caribou, Sketch1, Sketch2, Alive, Dead]
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
          Caribou Puzzle
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
            <h3>Puzzle Class Project</h3>
          </div>
          <p className="italic py-5 text-l">November 2022</p>
          <p className="w-full text-xl mx-auto pb-5">
            In our Communications in Biomedical Engineering class, we were tasked to design a puzzle with a Canadian emblem.
            I decided to model a caribou dying as a result of industrial polution, as depicted by the face of the caribou falling off and the skull revealing when the "polution" mechanism is pushed in the back.
            Feel free to swipe or watch the autoplay of the design sketches and final result!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Puzzle;
