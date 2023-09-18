import React from "react";

const NavBar = () => {
  const pages = ["about", "explorations", "contact"];
  return (
    <div className="flex justify-center mt-5">
      <ul className="flex flex-row gap-10">
        {pages.map((page) => (
          <li>{page}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
