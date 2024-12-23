import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import logo from "../../assets/img/New Logo-07 2.png";
import line from "../../assets/img/Rectangle 10.png";
import notification from "../../assets/img/notification.png";
import message from "../../assets/img/message.png";
import avatar from "../../assets/img/Avatar.png";
import vector from "../../assets/img/Vector.png";
import chart from "../../assets/img/chart-simple-solid 1.png";
import { useState } from "react";
import { AllData } from "./Data.js";
import { AllUI } from "./UI.js";
import { AllPhoto } from "./PhotoShop.js";
import { AllIslamic } from "./Islamic.js";
import { Allmarketing } from "./Marketing.js";
import { followers } from "./Followers.js";
function Main() {
  const [sidebar, setSideBar] = useState(false);
  const [searchBox, setSearchBox] = useState(true);
  const { courses, Data, Readable } = AllData;
  const { UI1, UI2, UI3 } = AllUI;
  const { photo1, photo2, photo3 } = AllPhoto;
  const { islamic1, islamic2, islamic3 } = AllIslamic;
  const { marketing1, marketing2, marketing3 } = Allmarketing;

  const Buttons = [
    "UI, UX",
    "Photography",
    "Photoshop",
    "marketing",
    "Islamic Studies",
    "Business",
  ];
  const [UI, setUI] = useState("Islamic Studies");

  return (
    <>
      {/* navbar */}
      <div className="flex justify-between px-5 md:px-10 h-20 items-center shadow-md">
        <div className="flex justify-between items-center gap-16 xl:gap-24">
          <div>
            <img src={logo} className="w-16" alt="" />
          </div>
          <ul className="lg:flex justify-center items-center gap-5 text-[15.3px] font-medium hidden lg:block">
            <li className="cursor-pointer duration-300 hover:text-color1">
              Explore courses
            </li>
            <li className="cursor-pointer duration-300 hover:text-color1">
              UPSKILL<span className="text-color3">Plus</span>
            </li>
            <li className="cursor-pointer duration-300 hover:text-color1">
              Teach
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div
            onClick={() => setSearchBox(true)}
            className="flex relative hidden lg:block "
          >
            <input
              type="text"
              className="border py-[7px] rounded-tl-md rounded-bl-md text-[13px] outline-none focus:border-color1 text-[#b3b2b2] px-3 border-[#b3b2b2] w-52"
              placeholder="What do you want to learn?"
            />
            <span className="bg-color1 px-3 rounded-md absolute -right-5 top-0 bottom-0 flex justify-center items-center">
              <FaSearch className="text-color7" />
            </span>
          </div>
          <span
            onClick={() => setSearchBox((pre) => !pre)}
            className="bg-color8 px-3 rounded-md cursor-pointer py-2 block lg:hidden flex justify-center items-center"
          >
            <FaSearch className="text-color3" />
          </span>
          <FaBars
            onClick={() => setSideBar(true)}
            className="text-color3 text-xl cursor-pointer block lg:hidden"
          />

          <img src={line} className="h-9 hidden lg:block w-[3px]" alt="" />

          <div className="sm:flex items-center justify-center gap-3 hidden sm:block">
            <div className="bg-color8 px-2 py-2 rounded-md cursor-pointer">
              <img src={notification} className="w-4" alt="" />
            </div>
            <div className="relative bg-color8 px-2 py-2 rounded-md cursor-pointer">
              <img src={message} className="w-4" alt="" />
              <span className="bg-green-500 top-2 right-1 p-1 rounded-full absolute"></span>
            </div>
            <div>
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* most searched topics */}
      {searchBox && (
        <div className="px-5 md:px-10 mt-16 w-full">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center w-full items-start gap-3">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-color2 font-bold text-[18px]">
                  Most Searched Topics
                </h1>
                <div>
                  <FaTimes
                    onClick={() => setSearchBox(false)}
                    className="text-lg text-color2 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex items-center flex-wrap justify-center gap-4">
                {Buttons.map((button) => (
                  <button
                    key={button}
                    onClick={() => setUI(button)}
                    className={`${
                      UI === button
                        ? "border-color2 bg-color2 text-white"
                        : "text-[#7b7b7b]"
                    } border border-[#cdcccc] text-[12px] px-4 py-[5.5px] hover:border-color2 hover:bg-color2 outline-none hover:text-white duration-300 rounded-2xl`}
                  >
                    {button}
                  </button>
                ))}
                {/* <button
                  onClick={() => setPhotography(true)}
                  className="border border-[#cdcccc] text-[#7b7b7b] text-[12px] px-4 py-[5.5px] hover:border-color2 hover:bg-color2 outline-none hover:text-white duration-300 rounded-2xl"
                >
                  Photography
                </button>
                <button className="border border-[#cdcccc] text-[#7b7b7b] text-[12px] px-4 py-[5.5px] hover:border-color2 hover:bg-color2 outline-none hover:text-white duration-300 rounded-2xl">
                  Photoshop
                </button>
                <button className="border border-[#cdcccc] text-[#7b7b7b] text-[12px] px-4 py-[5.5px] hover:border-color2 hover:bg-color2 outline-none hover:text-white duration-300 rounded-2xl">
                  marketing
                </button>
                <button className="border border-[#cdcccc] text-[#7b7b7b] text-[12px] px-4 py-[5.5px] hover:border-color2 hover:bg-color2 outline-none hover:text-white duration-300 rounded-2xl">
                  Islamic Studies
                </button>
                <button className="border border-[#cdcccc] text-[#7b7b7b] text-[12px] px-4 py-[5.5px] hover:border-color2 hover:bg-color2 outline-none hover:text-white duration-300 rounded-2xl">
                  Business
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* filtered by searching buttons */}
      {UI === "UI, UX" ? (
        <>
          <div className="px-5 md:px-10 mt-28 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Best Selling Courses
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {Data.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-16 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                New Courses In Upskill
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {courses.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-24 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Most Readable Articles In
                <span className="text-color3"> UPSKILL</span>
                <span className="text-orange-300">Read</span>
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {Readable.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {UI === "Photography" ? (
        <>
          <div className="px-5 md:px-10 mt-32 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Best Selling Courses
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {UI1.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-16 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                New Courses In Upskill
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {UI2.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-24 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Most Readable Articles In
                <span className="text-color3"> UPSKILL</span>
                <span className="text-orange-300">Read</span>
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {UI3.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {UI === "Photoshop" ? (
        <>
          <div className="px-5 md:px-10 mt-32 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Best Selling Courses
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {photo1.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-16 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                New Courses In Upskill
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {photo2.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-24 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Most Readable Articles In
                <span className="text-color3"> UPSKILL</span>
                <span className="text-orange-300">Read</span>
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {photo3.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {UI === "Islamic Studies" ? (
        <>
          <div className="px-5 md:px-10 mt-32 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Best Selling Courses
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {islamic1.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-16 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                New Courses In Upskill
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {islamic2.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-24 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Most Readable Articles In
                <span className="text-color3"> UPSKILL</span>
                <span className="text-orange-300">Read</span>
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {islamic3.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {UI === "marketing" ? (
        <>
          <div className="px-5 md:px-10 mt-32 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Best Selling Courses
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {marketing1.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-16 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                New Courses In Upskill
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {marketing2.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-24 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Most Readable Articles In
                <span className="text-color3"> UPSKILL</span>
                <span className="text-orange-300">Read</span>
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {marketing3.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {UI === "Business" ? (
        <>
          <div className="px-5 md:px-10 mt-32 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Best Selling Courses
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {UI1.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-16 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                New Courses In Upskill
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {UI2.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-5 md:px-10 mt-24 flex flex-col justify-start items-start gap-8">
            <div className="flex justify-center items-center gap-5">
              <h1 className="text-color2 font-medium text-[17.5px]">
                Most Readable Articles In
                <span className="text-color3"> UPSKILL</span>
                <span className="text-orange-300">Read</span>
              </h1>
              <img src={line} className="h-7 w-1" alt="" />
              <p className="text-color3 font-bold text-[11px] cursor-pointer">
                SEE ALL
              </p>
            </div>
            <div className="grid justify-center w-full items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {UI3.map((data) => (
                <div
                  key={data.id}
                  className="flex w-full flex-col gap-2 justify-start items-start"
                >
                  <div className="relative w-full">
                    <img src={data.img} className="w-full" alt="" />
                    <div className="absolute px-2 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000032] flex flex-col justify-between py-2 items-start">
                      {data.badge1 && (
                        <span className="text-white bg-pink-500 px-3 rounded-md py-1 text-[11px] font-semibold">
                          {data.badge1}
                        </span>
                      )}
                      <span className=""></span>
                      <div className="flex justify-between w-full items-center gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <img src={vector} alt="" />
                          <span className="text-xs text-white font-semibold">
                            4.5
                          </span>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                          <img src={chart} alt="" />
                          <span className="text-[9px] sm:text-xs text-white font-semibold">
                            Introduction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-[12px] sm:text-[15px] font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-[10px] sm:text-[11px]">
                      By: {data.teacher}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}

      {/* followers */}
      <div className="px-5 md:px-10 mt-32 flex flex-col justify-start items-start gap-8">
        <div className="flex justify-center items-center gap-5">
          <h1 className="text-color2 font-medium text-[17.5px]">
            Follow People In <span className="text-color3"> UPSKILL</span>
          </h1>
          <img src={line} className="h-7 w-1" alt="" />
          <p className="text-color3 font-bold text-[11px] cursor-pointer">
            SEE ALL PEOPLE
          </p>
        </div>
      </div>
      <div className="px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-12 mt-7 justify-start items-start">
        {followers.map((data) => (
          <div className="flex justify-between gap-8 w-full" key={data.id}>
            <div className="flex items-start justify-start gap-2">
              <img src={data.img} className="cursor-pointer w-10" alt="" />
              <div>
                <h1 className="text-sm font-semibold">{data.name}</h1>
                <h1 className="text-[10px] text-gray-500">{data.postion}</h1>
                <span className="text-[9px]">{data.province}</span>
              </div>
            </div>
            <div>
              {data.btn1 ? (
                <button className="text-[10px] text-color3 border border-color3 px-2 py-1 rounded-xl">
                  {data.btn1}
                </button>
              ) : (
                <button className="text-[10px] text-pink-400 border border-pink-400 px-2 py-1 rounded-xl">
                  {data.btn2}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* sidebar start */}
      <div
        className={`
        ${sidebar ? " h-full" : "h-0"}
        fixed top-0 left-0 right-0 overflow-hidden duration-500 block lg:hidden w-full bg-color3 z-50`}
      >
        <div className="px-5 py-5 flex flex-col  items-start justify-start gap-10">
          <div className="flex justify-between items-center gap-16 xl:gap-24 w-full">
            <div>
              <img src={logo} className="w-16" alt="" />
            </div>
            <FaTimes
              onClick={() => setSideBar(false)}
              className="text-white text-xl cursor-pointer"
            />
          </div>
          <div>
            <ul className="flex flex-col justify-start items-start gap-5 text-[15.3px] font-medium">
              <li className="cursor-pointer text-white duration-300">
                Explore courses
              </li>
              <li className="cursor-pointer text-white duration-300">
                UPSKILLPlus
              </li>
              <li className="cursor-pointer text-white duration-300">Teach</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
