import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="flex justify-end items-center bg-purple-800 text-white text-sm sm:text-base lg:text-xl font-semibold shadow-md bottom-0 fixed w-full z-50 h-10 sm:h-12 px-4 sm:px-6">
  <div className="flex gap-2 items-center italic">
    <FaCopyright className="text-lg sm:text-xl" />
    <span className="text-xs sm:text-xl font-semibold">Copyright 2024 Syaloni Barman</span>
  </div>
</div>

    </>
  )
}

export default Footer;