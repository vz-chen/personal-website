import React from "react";
import StrawbFace from "../assets/StrawbFace.jpg";

const iGEM = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-[60px]" style={{ fontFamily: "Against" }}>
        Math & Modelling, Human Practices
      </h1>
      <div className="flex flex-row h-[90vh] items-center w-5/6 mx-auto">
        <div className="w-1/3">
          <img
            className="border border-black h-full p-5 border-[1px] mx-auto"
            alt=""
            src={StrawbFace}
          ></img>
        </div>
        <div className="flex flex-col w-2/3 mx-auto px-20">
          <div
            className="text-[20px] mx-auto py-5 mx-[170px]"
            style={{ fontFamily: "Safira" }}
          >
            <h3>@ UW International Genetically Engineered Machine (iGEM)</h3>
          </div>
          <p className="italic py-5 text-l">Aug. 2023 - Present</p>
          <p className="w-full text-xl bg-green-500 py-5">
            iGEM is a non-profit organization that supports the advancement of
            research in synthetic biology. They allow students to be at the
            forefront of innovation by giving them resources to solve real-world
            problems that concerns their communities and present them annually
            in Paris, France.
          </p>
          <li className="w-full text-xl mx-auto">
            Conducting biomechanics research under award-winning Professor and
            researcher, Naveen Chandrashekar
          </li>
          <li className="w-full text-xl mx-auto">
            Developed a microneedling pad that reduced the resistance of the
            skin and mitigated skin burns using Solidworks
          </li>
          <li className="w-full text-xl mx-auto">
            Conducted experiments with complex circuits involving human, pig and
            duck cadavers
          </li>
        </div>
      </div>
    </div>
  );
};

export default iGEM;
