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
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-5 h-screen">
        <div className="lg:col-span-4 ">
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
            <div className="absolute -top-14 right-0 w-145">
              <img src="/BlueHeadset.png" className="rotate-14  rounded-full" />
            </div>
            <button
              className="bg-white/70 flex items-center px-4 py-1.5 font-bold gap-1.5 rounded-full absolute right-30 bottom-33 cursor-pointer transition-all duration-120 ease-in-out hover:bg-white hover:scale-110"
              style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
            >
              <RiShareBoxLine className="size-4.5" />
              View
            </button>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 p-4 h-44">
            <div className="bg-black  grid-cols-1 rounded-3xl">
              <div className="flex items-center justify-between mt-4 px-8">
                <p className="font-normal text-2xl text-white">More Products</p>
                <p className="text-gray-400">460 plus items</p>
              </div>
              <div className="flex items-center align-center px-8  mt-3 ">
                <img
                  src="/airpods.jpeg"
                  className="w-16 h-16 rounded-2xl -mr-2"
                />
                <img
                  src="/portablebluetoothspeaker.jpg"
                  className="w-18 h-18 rounded-2xl -mr-2 border-4"
                />
                <img
                  src="/black_headset.jpg"
                  className="w-18 h-18 rounded-2xl -mr-2 border-4"
                />
                <img
                  src="/iphone.jpg"
                  className="w-18 h-18 rounded-2xl border-4"
                />
              </div>
            </div>
            <div className="bg-black  grid-cols-1 rounded-3xl">
              <div className="flex items-center justify-between mt-4 px-8">
                <p className="font-normal text-2xl text-white">Popular</p>
                <p className="text-white font-light text-center text-[1.4rem]">
                  ⭐ 4.6
                </p>
              </div>
              <div className="flex items-center align-center px-8  mt-3 justify-between">
                <div className="flex">
                  <div className="bg-black rounded-full p-1 -mr-5">
                    <div className="bg-white rounded-full p-1">
                      <img
                        className="rounded-full w-15 h-15"
                        src="/profile1.avif"
                      />
                    </div>
                  </div>
                  <div className="bg-black rounded-full p-1 -mr-5">
                    <div className="bg-white rounded-full p-1">
                      <img
                        className="rounded-full w-15 h-15"
                        src="/profile2.jpg"
                      />
                    </div>
                  </div>
                  <div className="bg-black rounded-full p-1 -mr-5">
                    <div className="bg-white rounded-full p-1">
                      <img
                        className="rounded-full w-15 h-15"
                        src="/profile3.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-white">
                  <p className="text-2xl font-bold">5m+</p>
                  <p className="text-gray-500">Downloads</p>
                </div>
              </div>
            </div>
            <div
              className="text-black grid-cols-1 rounded-3xl flex items-center justify-between gap-2 px-4 "
              style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
            >
              <div className="w-33 h-28">
                <img src="/ipod.jpg" className="rounded-2xl w-auto h-full" />
              </div>
              <div className="flex flex-col start justify-between w-70 h-28 pl-4">
                <p className="text-[1.2rem] font-bold">
                  Listening Has Been Released
                </p>
                <p>⭐⭐⭐⭐⭐ 5.0</p>
                <p className="text-gray-400">46 Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="grid grid-rows-6 gap-4">
            <div className="row-span-1 border border-gray-300 h-30 rounded-2xl flex flex-col gap-3 pt-4 pl-3 ">
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
              <GrFormNextLink className="absolute bottom-3 right-3 -rotate-52 bg-white rounded-full size-7.5 transition-all duration-150 ease-out hover:scale-115 hover:bg-lime-300 cursor-pointer" />
            </div>
            <div className="row-span-3 -mt-12 rounded-2xl h-70 relative transition-all duration-200 ease-in earbuds">
              <p className="absolute font-bold left-5 top-5 text-[1.8rem] text-white">
                Grey Surface
              </p>
              <p className="absolute font-bold left-5 top-13 text-[1.6rem] text-white">
                Headphone
              </p>
              <img src="/HeadPhones.png" className="rounded-2xl " />
              <GrFormNextLink className="absolute bottom-2 right-3 -rotate-52 bg-white rounded-full size-7.5 transition-all duration-150 ease-out hover:scale-115 hover:bg-lime-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center gap-2 flex flex-col h-40">
        <h1 className="text-5xl font-bold">Discover Your Sound</h1>
        <p className="text-gray-400">
          Explore our curated collections designed for every audiophile.
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
