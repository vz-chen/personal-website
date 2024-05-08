import React from "react";

const Footer = () => {
  const email = "vzchen@uwaterloo.ca";
  return (
    <div
      className="h-1/3 flex flex-col justify-center items-center border border-black bg-gradient-to-r from-[#F67B53] to-[#FBCC85] via-white"
      id="contact"
    >
      <h1 className="text-[40px] mt-4 py-5" style={{ fontFamily: "Safira" }}>
        CONTACT ME
      </h1>
      <h3 className="text-[20px] mb-6 italic" style={{ fontFamily: "Safira" }}>
        Let's stay connected!
      </h3>
      <p className="italic pb-5">647-876-7128</p>
      <div className="flex flex-row">
        <a
          href="https://www.linkedin.com/in/vzchen"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black hover:text-gray-700 text-black rounded-full px-4 py-2 mb-4 mx-12"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${email}`}
          className="border border-black hover:text-gray-700 text-black rounded-full px-4 py-2 mb-4 mx-12"
        >
          Email
        </a>
        <a
          href="https://github.com/vz-chen"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black hover:text-gray-700 text-black rounded-full px-4 py-2 mb-4 mx-12"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
