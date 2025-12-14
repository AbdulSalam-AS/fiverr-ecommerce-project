import { FaArrowRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { GrFormNextLink } from "react-icons/gr";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="mt-10 grid grid-cols-4 gap-5">
        <div className="col-span-3 ">
          <div className="bg-gray-100 w-full h-116 rounded-3xl px-5 pt-10 pb-5 flex flex-col gap-3 relative transition-all duration-200 ease-in earbuds">
            <p>Music is Classic</p>
            <div>
              <p className="font-extrabold text-[3.5rem]">Sequoia Insipring</p>
              <p className="font-extrabold text-[3.5rem] -mt-3">Musico.</p>
            </div>
            <div>
              <p>Making your dream music come true stay with</p>
              <p>Sequios Sounds!</p>
            </div>
            <div className="flex gap-2 items-center mt-5">
              <button className="flex justify-around w-55 h-12 items-center rounded-full bg-lime-300 px-6 cursor-pointer transition-all hover:scale-105">
                <p className="font-bold">View All Products</p>
                <FaArrowRight className="size-4.5" />
              </button>
              <hr className="w-1 bg-gray-200 h-full text-white ml-3" />
              <h1 className="font-bold text-3xl ml-3">01</h1>
            </div>
            <ul className="flex gap-6 mt-8">
              <FaTwitter className="size-6 transition-all hover:scale-120 cursor-pointer" />
              <FaTiktok className="size-6 transition-all hover:scale-120 cursor-pointer " />
              <BsInstagram className="size-6 transition-all hover:scale-120 cursor-pointer" />
              <FaLinkedin className="size-6 transition-all hover:scale-120 cursor-pointer" />
            </ul>
            <div className="absolute -top-5 right-0  w-130">
              <img src="/BlueHeadset.png" className="rotate-12" />
            </div>
            <button
              className="bg-white/70 flex items-center px-4 py-1.5 font-bold gap-1.5 rounded-full absolute right-30 bottom-33 cursor-pointer transition-all duration-120 ease-in-out hover:bg-white hover:scale-110"
              style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
            >
              <RiShareBoxLine className="size-4.5" />
              View
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-rows-6 gap-4">
            <div className="row-span-1 border border-gray-300 h-30 rounded-2xl flex flex-col gap-3 pt-4 pl-6 ">
              <p className="font-medium text-[1.3rem]">Popular Colors</p>
              <ul className="flex gap-3">
                <li className="w-10 h-10 bg-blue-500 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                <li className="w-10 h-10 bg-yellow-400 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                <li className="w-10 h-10 bg-green-500 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                <li className="w-10 h-10 bg-red-500 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                <li className="w-10 h-10 bg-cyan-400 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
              </ul>
            </div>
            <div className="row-span-2 relative h-50 transition-all rounded-2xl duration-200 ease-in earbuds">
              <p className="absolute text-white font-bold left-5 top-2 text-[1.5rem]">
                New Gen X-Bud
              </p>
              <img src="/EarBuds.png" className="w-full h-full rounded-2xl " />
              <GrFormNextLink className="absolute bottom-3 right-3 -rotate-52 bg-white rounded-full size-7.5 transition-all duration-150 ease-out hover:scale-115 cursor-pointer" />
            </div>
            <div className="row-span-3 -mt-12 rounded-2xl h-70 relative transition-all duration-200 ease-in earbuds">
              <p className="absolute font-bold left-5 top-5 text-[1.8rem] text-white">
                Grey Surface
              </p>
              <p className="absolute font-bold left-5 top-13 text-[1.6rem] text-white">
                Headphone
              </p>
              <img src="/HeadPhones.png" className="rounded-2xl " />
              <GrFormNextLink className="absolute bottom-2 right-3 -rotate-52 bg-white rounded-full size-7.5 transition-all duration-150 ease-out hover:scale-115 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
