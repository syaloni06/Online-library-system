import { FaCopyright } from "react-icons/fa"; // Import the copyright icon from react-icons

const Footer = () => {
  return (
    <>
      {/* Footer container */}
      <div 
        className="flex justify-end items-center bg-purple-800 text-white text-sm sm:text-base lg:text-xl font-semibold shadow-md bottom-0 fixed w-full z-50 h-10 sm:h-12 px-4 sm:px-6"
      >
        {/* Container for the copyright text and icon */}
        <div className="flex gap-2 items-center italic">
          {/* Copyright icon */}
          <FaCopyright className="text-lg sm:text-xl" />
          
          {/* Copyright text */}
          <span className="text-xs sm:text-xl font-semibold">
            Copyright 2024 Syaloni Barman
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
