// import { useState } from "react";
// import Logo from "/Assets/logo.svg";
// import Asset from "/Assets/asset.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResult, setSearchResult] = useState("");

//   const handleSearch = () => {
//     if (searchQuery !== "checking") {
//       setSearchResult("Not found");
//       setTimeout(() => {
//         setSearchResult("");
//       }, 500);
//     }
//     setSearchQuery("");
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <header className="bg-[#FADC41] fixed top-0 left-0 w-full px-4 py-3 flex items-center justify-between z-30">
//       <div className="flex items-center">
//         <img
//           src={Logo}
//           alt="ShopHebron Logo"
//           className="h-[2.5rem] md:h-12 w-auto"
//         />

//         <div className="flex items-center gap-3">
//           <button className="text-white text-lg md:text-2xl focus:outline-none">
//             <FontAwesomeIcon icon={faBars} />
//           </button>
//           <span className="hidden lg:block">All</span>
//         </div>

//         {/*
//         <button className="text-white text-2xl focus:outline-none ml-4 md:hidden">
//           <FontAwesomeIcon icon={faBars} />
//         </button> */}
//       </div>

//       <div className="hidden md:flex items-center w-1/2 p-2 rounded-full gap-7 bg-white">
//         <button onClick={handleSearch}>
//           <FontAwesomeIcon
//             icon={faMagnifyingGlass}
//             className="text-[#662D91] text-2xl font-extralight"
//           />
//         </button>
//         <input
//           type="text"
//           placeholder="Search Shop Hebron"
//           className="border-none focus:outline-none w-full text-[#662D91]"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
//         <img
//           src={Asset}
//           alt="Shop Hebron Icon"
//           className="h-5 w-5 bg-[#662D91] rounded-full"
//         />
//       </div>

//       {/* mobile search button */}
//       <div className="flex items-center gap-4">
//         <button
//           onClick={handleSearch}
//           className="text-[#662D91] text-xl focus:outline-none md:hidden"
//         >
//           <FontAwesomeIcon icon={faMagnifyingGlass} />
//         </button>

//         <Link to="/login">
//           <button className="bg-white text-[#662D91] px-4 md:px-7 py-1 md:py-2 rounded-3xl hover:bg-[#FFED8D]">
//             Log In
//           </button>
//         </Link>
//       </div>

//       {/* Search Result (For Both Views) */}
//       {searchResult && (
//         <div className="absolute top-1 z-10 left-[850px] transform -translate-x-1/2 w-40 p-1 bg-white rounded-md shadow-md border border-[#662D91] text-[#662D91]">
//           {searchResult}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import Logo from "/Assets/logo.svg";
import Asset from "/Assets/asset.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery !== "checking") {
      setSearchResult("Not found");
      setTimeout(() => {
        setSearchResult("");
      }, 500);
    }
    setSearchQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header
        className={`bg-[#FADC41] fixed top-0 left-0 w-full px-4 py-3 flex items-center justify-between z-30 ${
          isModalOpen ? "blur-sm" : ""
        }`}
      >
        <div className="flex items-center">
          <img
            src={Logo}
            alt="ShopHebron Logo"
            className="h-[2.5rem] md:h-12 w-auto"
          />

          <div className="flex items-center gap-3">
            <button className="text-white text-lg md:text-2xl focus:outline-none">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <span className="hidden lg:block">All</span>
          </div>
        </div>

        <div className="hidden md:flex items-center w-1/2 p-2 rounded-full gap-7 bg-white">
          <button onClick={handleSearch}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#662D91] text-2xl font-extralight"
            />
          </button>
          <input
            type="text"
            placeholder="Search Shop Hebron"
            className="border-none focus:outline-none w-full text-[#662D91]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <img
            src={Asset}
            alt="Shop Hebron Icon"
            className="h-5 w-5 bg-[#662D91] rounded-full"
          />
        </div>

        {/* Mobile Search Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={openModal}
            className="text-[#662D91] text-xl focus:outline-none md:hidden"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <Link to="/login">
            <button className="bg-white text-[#662D91] px-4 md:px-7 py-1 md:py-2 rounded-3xl hover:bg-[#FFED8D]">
              Log In
            </button>
          </Link>
        </div>

        {/* Search Result (For Both Views) */}
        {searchResult && (
          <div className="absolute top-1 z-10 left-[850px] transform -translate-x-1/2 w-40 p-1 bg-white rounded-md shadow-md border border-[#662D91] text-[#662D91]">
            {searchResult}
          </div>
        )}
      </header>

      {/* Search Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#FADC41] p-5 rounded-lg shadow-lg relative w-[90%] max-w-md">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 text-2xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-5">
              <img src={Logo} alt="ShopHebron Logo" className="h-12 w-auto" />
            </div>

            {/* Search Input */}
            <div className="flex items-center w-full p-2 rounded-full gap-4 bg-[#FADC41] border-black border">
              <input
                type="text"
                placeholder="Search Shop Hebron"
                className="border-none focus:outline-none w-full text-[#662D91] bg-[#FADC41] p-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSearch}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[#662D91] text-2xl font-extralight"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
