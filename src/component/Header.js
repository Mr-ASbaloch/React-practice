import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-sky-400 p-5 flex justify-center ">
      <Link to={"/"} className="text-orange-950 font-bold px-5 ">
        Home
      </Link>
      <Link to={"/About"} className="text-orange-950 font-bold  px-5">
        About
      </Link>
      <Link to={"/Contact"} className="text-orange-950 font-bold  px-5">
        Contact
      </Link>
    </div>
  );
}

export default Header;
