import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const pages = ["about", "explorations", "contact"];
  const [hovered, setHovered] = useState();
  return (
    <div className="flex justify-center mt-5">
      <ul className="flex flex-row gap-10">
        {pages.map((page) => (
          <Link
            to={`/#${page}`}
            onMouseEnter={() => setHovered(page)}
            onMouseLeave={() => setHovered()}
            className={hovered === page ? "hover:text-gray-500" : ""}
            href={`#${page}`}
          >
            {page}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
