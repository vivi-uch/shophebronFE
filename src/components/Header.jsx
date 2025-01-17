// import { useState } from "react";
import Logo from "/Assets/logo.svg";
import Asset from "/Assets/asset.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  // const [isClicked, setIsClicked] = useState("false");

  return (
    <header className="bg-[#FADC41] fixed top-0 left-0 w-full px-4 py-3 flex items-center justify-between z-50">
      <div className="flex">
        <img
          src={Logo}
          alt="ShopHebron Logo"
          className="h-8 md:h-12 w-auto bg-[#FADC41"
        />

        <div className="flex items-center gap-3">
          <button className="text-white text-2xl focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <span>All</span>
        </div>
      </div>

      <div className="flex items-center w-1/2 p-2 rounded-full focus:outline-none gap-7 bg-white">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-[#662D91] text-2xl font-extralight"
        />
        <input
          type="text"
          placeholder="Search Shop Hebron"
          className="border-none focus:outline-none w-full text-[#662D91]"
        />
        <img
          src={Asset}
          alt="shop hebron icon"
          className="h-5 w-5 bg-[#662D91] rounded-full"
        />
      </div>

      <div>
        <Link to="/login">
          <button className="bg-white text-[#662D91] px-7 py-2 rounded-3xl hover:bg-[#FFED8D]">
            Log In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
