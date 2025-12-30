import { MdRefresh } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="px-3 flex items-center justify-between w-full z-100 h-15 md:max-w-[960px] md:h-20 lg:max-w-[1520px] lg:h-20">
      <div className="font-extrabold cursor-pointer text-center rounded-md transition-all hover:scale-95 lg:w-40 md:text-[1.2em] lg:text-[1.8em] ">
        Ecommerce
      </div>

      <div className="hidden md:inline-flex px-4 search relative z-100">
        <input
          className="flex items bg-gray-100 px-6 outline-0 rounded-[2em] transition-shadow duration-200 ease-in hover:shadow-xl md:w-[22em] md:py-1.5 md:placeholder:text-[0.9em] md lg:w-[36em] lg:py-2.5"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <MdRefresh className="absolute right-6 top-1 md:size-5 md:top-2 lg:size-8 lg:top-2 text-gray-500 cursor-pointer transition-all hover:text-gray-800" />
      </div>

      <div className="flex justify-between w-60 items-center">
        <div className="icons flex gap-2 md:ml-6">
          <MdLockOutline className="bg-gray-100 hidden md:inline-flex md:size-8 lg:size-10 p-2 rounded-full bg-cover transition-all duration-200 ease-in hover:scale-115 cursor-pointer" />
          <IoMdHeartEmpty className="bg-gray-100 hidden md:inline-flex md:size-8 lg:size-10 p-2 rounded-full bg-cover transition-all duration-200 ease-in hover:scale-115 cursor-pointer" />
        </div>
        <p className="hidden md:inline-flex font-[450] cursor-pointer ml-3">
          Username
        </p>
        <CgProfile className="hidden md:inline-flex md:size-6 lg:size-7 cursor-pointer" />
        <RxHamburgerMenu className="size-5 md:hidden lg:hidden cursor-pointer " />
      </div>
    </div>
  );
};

export default Header;
