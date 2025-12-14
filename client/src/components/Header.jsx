import { MdRefresh } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="flex justify-between items-center h-20">
      <div className="font-extrabold text-[1.8em] cursor-pointer w-40 text-center rounded-md transition-all hover:scale-95">
        Ecommerce
      </div>

      <div className="search relative">
        <input
          className="bg-gray-100 w-[35em] py-2.5 px-6 outline-0 rounded-[2em] transition-shadow duration-200 ease-in hover:shadow-xl"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <MdRefresh className="absolute right-2 size-8 top-2 text-gray-500 cursor-pointer transition-all hover:text-gray-800" />
      </div>

      <div className="flex justify-between w-60 items-center">
        <div className="icons flex gap-2">
          <MdLockOutline className="bg-gray-100 size-10 p-2 rounded-full bg-cover transition-all duration-200 ease-in hover:scale-115 cursor-pointer" />
          <IoMdHeartEmpty className="bg-gray-100 size-10 p-2 rounded-full bg-cover transition-all duration-200 ease-in hover:scale-115 cursor-pointer" />
        </div>
        <p className="font-[450] cursor-pointer ml-3">Username</p>
        <CgProfile className="size-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
