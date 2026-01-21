import { FaArrowRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";

import "./Home.css";

const Home = () => {
  return (
    <div className="lg:max-w-[1520px]">
      {/* Hero Section */}

      <div className="h-full">
        <div className=" grid sm:grid-cols-1 lg:grid-cols-5 gap-5 ">
          <div className="lg:col-span-4 ">
            <div className="bg-gray-100 sm:h-78 md:h-100 lg:h-116 rounded-3xl px-5 pt-10 pb-5 flex flex-col gap-3 relative transition-all duration-200 ease-in earbuds ">
              <p>Music is Classic</p>
              <div>
                <p className="font-extrabold text-[1.2rem] md:text-[2.5rem] lg:text-[3.5rem]">
                  Sequoia Insipring
                </p>
                <p className="font-extrabold text-[1.2rem] md:text-[2.5rem] lg:text-[3.5rem] -mt-3">
                  Musico.
                </p>
              </div>
              <div className="w-40 md:w-90 lg:w-100 text-[0.7em] sm:text-[0.8em] md:text-[1em] lg:text-[1.2em] wrap-normal">
                <p>
                  Making your dream music come true stay with Sequios Sounds!
                </p>
              </div>
              <div className="flex gap-2 items-center mt-5">
                <button className="flex justify-around px-3 gap-2 md:w-48 h-8 md:h-10 md:gap-2 md:px-4 lg:w-55 lg:h-12 lg:px-6 items-center rounded-full bg-lime-300 cursor-pointer transition-all hover:scale-105">
                  <p className="text-[0.7em] md:text-[0.9em] font-bold">
                    View All Products
                  </p>
                  <FaArrowRight className="size-3 md:size-3.5 lg:size-4.5" />
                </button>
                <hr className="w-1 bg-gray-200 h-8 lg:h-full text-white ml-3" />
                <h1 className="font-bold md:text-2xl lg:text-3xl ml-3">01</h1>
              </div>
              <ul className="flex gap-6 mt-8">
                <FaTwitter className="md:size-6 lg:size-6 transition-all hover:scale-120 cursor-pointer" />
                <FaTiktok className="md:size-6 lg:size-6 transition-all hover:scale-120 cursor-pointer " />
                <BsInstagram className="md:size-6 lg:size-6 transition-all hover:scale-120 cursor-pointer" />
                <FaLinkedin className="md:size-6 lg:size-6 transition-all hover:scale-120 cursor-pointer" />
              </ul>
              <div className="absolute right-0 lg:-right-8 w-65 top-1 md:w-100 md:top-4 md:right-1 lg:-top-14 lg:w-145">
                <img
                  src="/BlueHeadset.png"
                  className="rotate-14 rounded-full"
                />
              </div>
              <button
                className="bg-white/70 flex items-center px-4 py-1.5 font-bold gap-1.5 rounded-full absolute bottom-28 right-2 text-[0.8em] sm:text-[0.7em] sm:right-10 sm:bottom-18 md:text-[0.8em] md:right-15 md:bottom-22 lg:right-30 lg:bottom-33 cursor-pointer transition-all duration-120 ease-in-out hover:bg-white hover:scale-110"
                style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
              >
                <RiShareBoxLine className="size-3 sm:size-3.5 md:size-4 lg:size-4.5" />
                View
              </button>
            </div>
            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 lg:grid-cols-3 mt-5 gap-5 md:gap-4 lg:gap-6 md:p-4 md:h-38 lg:h-44 lg:p-4">
              <div className="bg-black row-end-1 h-35 md:grid-cols-1 md:row-span-1 md:h-30 lg:grid-cols-1 lg:row-span-1 lg:h-36 rounded-3xl">
                <div className="flex items-center justify-between mt-4 px-8 md:px-4 lg:px-8">
                  <p className="font-normal md:text-[0.8em] lg:text-[1.1em] text-white">
                    More Products
                  </p>
                  <p className="md:text-[0.8em] lg:text-[1.1em] text-gray-400">
                    460 plus items
                  </p>
                </div>
                <div className="flex items-center align-center md:px-4 px-8 mt-3 ">
                  <img
                    src="/airpods.jpeg"
                    className="w-16 h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-2xl -mr-2"
                  />
                  <img
                    src="/portablebluetoothspeaker.jpg"
                    className="w-18 h-18 md:w-14 md:h-14 lg:w-18 lg:h-18 rounded-2xl -mr-2 border-4"
                  />
                  <img
                    src="/black_headset.jpg"
                    className="w-18 h-18 md:w-14 md:h-14 lg:w-18 lg:h-18 rounded-2xl -mr-2 border-4"
                  />
                  <img
                    src="/iphone.jpg"
                    className="w-18 h-18 md:w-14 md:h-14 lg:w-18 lg:h-18 rounded-2xl border-4"
                  />
                </div>
              </div>
              <div className="bg-black row-end-2 h-35 md:grid-cols-1 md:row-span-1 md:h-30 lg:grid-cols-1 lg:row-span-1 lg:h-36 rounded-3xl">
                <div className="flex items-center justify-between px-10 md:px-4 mt-4 lg:px-8">
                  <p className="font-normal lg:text-2xl text-white">Popular</p>
                  <p className="text-white font-light text-center mr-8 text-[1.1rem] lg:text-[1.4rem]">
                    ⭐ 4.6
                  </p>
                </div>
                <div className="flex items-center align-center px-8 md:px-2.5 lg:px-8 mt-3 justify-between">
                  <div className="flex">
                    <div className="bg-black rounded-full p-1 -mr-5">
                      <div className="bg-white rounded-full p-1">
                        <img
                          className="rounded-full w-15 h-15 md:w-10 md:h-10 lg:w-15 lg:h-15"
                          src="/profile1.avif"
                        />
                      </div>
                    </div>
                    <div className="bg-black rounded-full p-1 -mr-5">
                      <div className="bg-white rounded-full p-1">
                        <img
                          className="rounded-full w-15 h-15 md:w-10 md:h-10 lg:w-15 lg:h-15"
                          src="/profile2.jpg"
                        />
                      </div>
                    </div>
                    <div className="bg-black rounded-full p-1 -mr-5">
                      <div className="bg-white rounded-full p-1">
                        <img
                          className="rounded-full w-15 h-15 md:w-10 md:h-10 lg:w-15 lg:h-15"
                          src="/profile3.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-white ">
                    <p className="md:text-[1em] lg:text-2xl font-bold">5m+</p>
                    <p className="md:text-[0.8em] text-gray-500">Downloads</p>
                  </div>
                </div>
              </div>
              <div
                className="text-black row-end-3 md:grid-cols-1 md:row-span-1 md:h-30 lg:grid-cols-1 lg:row-span-1 lg:h-36 rounded-3xl flex items-center justify-between gap-2 px-4"
                style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
              >
                <div className="w-33 h-28 md:w-28 md:h-22 lg:w-33 lg:h-28">
                  <img src="/ipod.jpg" className="rounded-2xl w-auto h-full" />
                </div>
                <div className="flex flex-col start justify-between h-30 pl-4 md:pl-2 md:h-23 lg:w-70 lg:h-28 lg:pl-4">
                  <p className="text-[1.2rem] md:text-[0.9rem] lg:text-[1.2rem] font-bold">
                    Listening Has Been Released
                  </p>
                  <p className="text-[1.1rem] md:text-[0.8rem] lg:text-[1.2rem]">
                    ⭐⭐⭐⭐⭐ 5.0
                  </p>
                  <p className="text-[1.1rem] md:text-[0.8rem] lg:text-[1.2rem] text-gray-400">
                    46 Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-20 md:m-0 lg:m-0 lg:col-span-1 ">
            <div className="grid grid-rows-3 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-6 lg:grid-rows-6 lg:gap-4">
              <div className="row-end-1 col-end-1 md:col-end-1 pl-5 py-3 lg:row-span-1 border border-gray-300 md:h-25 md:w-60 md:pt-2 md:pl-4 md:px-4 lg:h-35 lg:w-70 rounded-2xl flex flex-col gap-2 lg:pt-6 lg:pl-4">
                <p className="font-medium text-[1.3rem]">Popular Colors</p>
                <ul className=" flex gap-3">
                  <li className="w-14 h-14 md:w-10 md:h-10 lg:h-10 lg:w-10 bg-blue-500 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                  <li className="w-14 h-14 md:w-10 md:h-10 lg:h-10 lg:w-10 bg-yellow-400 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                  <li className="w-14 h-14 md:w-10 md:h-10 lg:h-10 lg:w-10 bg-green-500 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                  <li className="w-14 h-14 md:w-10 md:h-10 lg:h-10 lg:w-10 bg-red-500 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                  <li className="w-14 h-14 md:w-10 md:h-10 lg:h-10 lg:w-10 bg-cyan-400 rounded-xl transition-all duration-200  hover:scale-110 cursor-pointer" />
                </ul>
              </div>
              <div className="md:col-end-1 h-50 md:w-60 md:h-50 lg:row-span-2 relative lg:h-45 lg:w-70 transition-all rounded-2xl duration-200 ease-in earbuds">
                <p className="absolute text-white font-bold left-5 top-2 text-[1.5rem]">
                  New Gen X-Bud
                </p>
                <img
                  src="/EarBuds.png"
                  className="w-full h-full rounded-2xl "
                />
                <GrFormNextLink className="absolute bottom-3 right-3 -rotate-52 bg-white rounded-full size-7.5 transition-all duration-150 ease-out hover:scale-115 hover:bg-lime-300 cursor-pointer" />
              </div>

              <div className="md:col-end-2 md:row-end-1 md:row-span-2 h-70 -mt-10 md:mt-0 md:h-80 md:w-120 lg:row-span-3 lg:col-end-1 lg:-mt-28 rounded-2xl lg:h-72 lg:w-full relative transition-all duration-200 ease-in earbuds">
                <p className="absolute font-bold left-5 top-5 text-[1.8rem] text-white">
                  Grey Surface
                </p>
                <p className="absolute font-bold top-15  left-5 md:top-13 lg:top-13 text-[1.6rem] text-white">
                  Headphone
                </p>
                <img
                  src="/HeadPhones.png"
                  className="rounded-2xl h-70 w-120 md:rounded-3xl lg:rounded-2xl md:w-120 md:h-81 lg:w-full lg:h-full"
                />
                <GrFormNextLink className="absolute bottom-2 right-3 -rotate-52 bg-white rounded-full size-7.5 transition-all duration-150 ease-out hover:scale-115 hover:bg-lime-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center gap-2 flex flex-col -mt-50 md:mt-15 md:mb-15 lg:-mt-50 lg:mb-25">
          <h1 className="text-5xl font-bold">Discover Your Sound</h1>
          <p className="text-gray-400">
            Explore our curated collections designed for every audiophile.
          </p>
        </div>
      </div>

      {/*next section*/}
      <div className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 md:gap-10 lg:gap-10">
          <div className="rounded-md grid-cols-1 relative h-135">
            <img
              src="/headset_black_background.png"
              className="rounded-3xl md:h-120"
            />
            <div className="bg-black/25 h-50 md:h-75 lg:h-75 w-full absolute top-0 rounded-t-3xl"></div>
            <div className="absolute bottom-60 md:bottom-30 lg:bottom-30 px-15 ">
              <p className="text-white bg-white/40 rounded-2xl w-60 text-center">
                HEADPHONE EXCELLENCE
              </p>
              <p className="text-white font-medium text-4xl mt-5">
                Unrivaled Clarity
              </p>
            </div>
            <div className="absolute bg-black h-40 w-full bottom-10 md:-bottom-15 lg:-bottom-15 rounded-b-3xl ">
              <div className="text-white/55 px-8 md:px-6 lg:px-15 mt-5">
                <p>Experience patented noise-cancellation and</p>
                <p>studio-grade acoustics for the purest sound.</p>
              </div>
              <p className="text-white mt-6 gap-3 flex px-8 md:px-15 lg:px-15">
                Shop Premium{" "}
                {
                  <IoMdArrowForward className="size-6 rounded-2xl  transition-all duration-200 hover:bg-white hover:text-black cursor-pointer" />
                }
              </p>
            </div>
          </div>

          <div className="rounded-md grid-cols-1 relative">
            <div className="bg-black/30 h-full w-full absolute top-0 rounded-3xl">
              <div className="h-full w-full flex flex-col justify-center items-center-safe">
                <div className="mt-25 md:mt-50 lg:mt-50">
                  <p className="bg-lime-300 rounded-4xl w-40 text-center font-medium">
                    PORTABLE AUDIO
                  </p>
                  <p className="text-white font-medium text-4xl mt-5">
                    On-The-Go Power
                  </p>
                  <p className="mt-2 text-white/70">
                    Durable, waterproof designs with all-day battery
                  </p>
                  <p className="text-white/70">
                    life for every adventure you take.
                  </p>
                </div>
              </div>
              <button className="bg-lime-300 absolute bottom-10 left-10 md:left-20 lg:left-20 px-3 py-2 rounded-full font-medium flex items-center gap-1 text-center cursor-pointer transition-all hover:scale-110">
                &nbsp; Explore Speakers
                {
                  <GrFormNextLink className="-rotate-40 size-7 rounded-full w-8" />
                }
              </button>
            </div>
            <img
              src="/speaker.png"
              className="rounded-3xl h-120 md:h-150 lg:h-150"
            />
          </div>

          <div className="rounded-md grid-cols-1 relative h-135">
            <div className="rounded-t-3xl h-60 flex flex-col justify-evenly items-start bg-gray-300/20 px-10">
              <p className="text-blue-500 font-medium">NEW ARRIVALS</p>
              <p className="text-3xl font-medium">Latest Innovations</p>
              <div className="text-black/55">
                <p>See what's new in sound-cutting-edge tech</p>
                <p>released this week.</p>
              </div>
              <button className="border-b-2 font-bold text-xl">
                View New Arrivals
              </button>
            </div>
            <img
              src="/tablet.png"
              className="rounded-b-3xl h-70 md:h-90 lg:h-90 w-full"
            />
          </div>
        </div>
      </div>

      <div className="h-full max-w-full">
        <div className="sm:mt-5 md:mt-25 lg:mt-10 max-w-108 md:max-w-190 lg:max-w-full">
          <div className="flex flex-col gap-1">
            <h1 className="sm:text-2xl lg:text-5xl font-medium">
              Trending Gear
            </h1>
            <p className="text-black/50 lg:text-2xl">
              The most sought-after tech this month
            </p>
          </div>
          <div className="carousel-container mt-5 py-5 flex">
            <div className="carousel-wrapper">
              <div className="carousel-item">
                <div
                  className="flex flex-col gap-2 px-4 py-4 h-55 w-40 md:h-70 md:w-55 lg:h-95 lg:w-80 items-center justify-center border border-gray-200 rounded-2xl cursor-pointer transition-all ease-in-out hover:scale-105"
                  style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
                >
                  <img
                    src="/tablet.png"
                    alt="MIC NOVA"
                    className="w-40 md:w-50 lg:w-100 rounded-xl"
                  />
                  <p className="text-[0.85rem] text-gray-400 font-medium w-full -mb-2 mt-2">
                    MIC NOVA
                  </p>
                  <div className="flex justify-between items-center w-full -mb-2">
                    <p className="font-medium text-[1.1rem]">$189</p>
                    <button className="w-8 h-8 bg-lime-300 rounded-full cursor-pointer transition-all hover:bg-lime-400">
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="flex flex-col gap-2 p-4 h-55 w-40 md:h-70 md:w-55 lg:h-95 lg:w-80 items-center justify-center border border-gray-200 rounded-2xl cursor-pointer transition-all ease-in-out hover:scale-105"
                  style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
                >
                  <img
                    src="/speaker.png"
                    alt="MIC NOVA"
                    className="w-40 md:w-50 lg:w-100 rounded-xl"
                  />
                  <p className="text-[0.85rem] text-gray-400 font-medium w-full -mb-2 mt-2">
                    GO-SPEAKER
                  </p>
                  <div className="flex justify-between items-center w-full -mb-2">
                    <p className="font-medium text-[1.1rem]">$89</p>
                    <button className="w-8 h-8 bg-lime-300 rounded-full cursor-pointer transition-all hover:bg-lime-400">
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="flex flex-col gap-2 p-4 h-55 w-40 md:h-70 md:w-55 lg:h-95 lg:w-80 items-center justify-center border border-gray-200 rounded-2xl cursor-pointer transition-all ease-in-out hover:scale-105"
                  style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
                >
                  <img
                    src="/headset_black_background.png"
                    alt="MIC NOVA"
                    className="w-40 md:w-50 lg:w-100 rounded-xl"
                  />
                  <p className="text-[0.85rem] text-gray-400 font-medium w-full -mb-2 mt-2">
                    ELITE STUDIO
                  </p>
                  <div className="flex justify-between items-center w-full -mb-2">
                    <p className="font-medium text-[1.1rem]">$599</p>
                    <button className="w-8 h-8 bg-lime-300 rounded-full cursor-pointer transition-all hover:bg-lime-400">
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="flex flex-col gap-2 px-4 py-4 h-55 w-40 md:h-70 md:w-55 lg:h-95 lg:w-80 items-center justify-center border border-gray-200 rounded-2xl cursor-pointer transition-all ease-in-out hover:scale-105"
                  style={{ boxShadow: "2px 2px 12px rgba(0,0,0,0.2)" }}
                >
                  <img
                    src="/tablet.png"
                    alt="MIC NOVA"
                    className="w-40 md:w-50 lg:w-100 rounded-xl"
                  />
                  <p className="text-[0.85rem] text-gray-400 font-medium w-full -mb-2 mt-2">
                    MIC NOVA
                  </p>
                  <div className="flex justify-between items-center w-full -mb-2">
                    <p className="font-medium text-[1.1rem]">$189</p>
                    <button className="w-8 h-8 bg-lime-300 rounded-full cursor-pointer transition-all hover:bg-lime-400">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
