import React from "react";
import busLogo from "../../../Images/logo.png";
import rightArrow from "../../../Images/rightArrow.png";
import sitLogo from "../../../Images/chair.png";
import upArrow from "../../../Images/up.png";
import sit2 from "../../../Images/armchair.png";
import sit1 from "../../../Images/armchair.svg";
import sit3 from "../../../Images/redChair.png";
import driver from "../../../Images/driveing.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="md:px-28 md:py-5 bg-gray-100 md:bg-base-100">
      <div className="bg-primary md:bg-base-100 p-5 md:p-0 text-white md:text-black">
        <div className=" mb-5">
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </div>
        <p className="text-xl">৭ টি বাস পাওয়া গেছে</p>
      </div>
      <hr className="mt-4 hidden md:block" />
      <div className="mt-5 bg-green-100 p-4 m-3 md:m-0">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="w-10 h-10 flex justify-center items-center bg-primary">
              <img className="w-8" src={busLogo} alt="" />
            </div>
            <div>
              <p className="font-semibold">ঢাকা - চট্টগ্রাম</p>
              <p className="text-xs text-gray-500">২৪ ফেব্রুয়ারি, ২০২২</p>
            </div>
          </div>
          <div>
            <p className="px-8 text-sm py-2 bg-white text-black">
              পরিবর্তন করুন
            </p>
          </div>
        </div>
      </div>
      <div className="border mt-5">
        <div className="p-4 bg-base-100 ">
          <div className="flex justify-between my-3">
            <div className=" flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex justify-center items-center">
                <img className="w-5" src={busLogo} alt="" />
              </div>
              <div>
                <h1 className="font-semibold">ঢাকা ব ৩৪-৬৭৪৩</h1>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <p>কোচ নংঃ ৫৬২ </p>
                  <p>এসি বাস</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">৮০০ টাকা</p>
            </div>
          </div>
          <hr />
          <div className=" my-4 bg-base-100">
            <div className="flex justify-between items-center">
              <p>ঢাকা</p>
              <div className="flex flex-col gap-2 items-center">
                <img src={rightArrow} alt="" />
                <p className="text-sm">09:35 AM</p>
              </div>
              <p>চট্টগ্রাম</p>
            </div>
          </div>
        </div>
        <div className="bg-green-100 p-3">
          <div className=" flex justify-between items-center">
            <div className=" flex gap-3">
              <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center">
                <img src={sitLogo} alt="" />
              </div>
              <div>
                <p>আসন খালি ২৮</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-primary text-semibold">বুকিং করুন</p>
              <img src={upArrow} alt="" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 my-5">
          <div className=" ">
            <div className="bg-base-100 md:bg-[#F7F7F7] p-2">
              <div className="grid grid-cols-3 gap-2 md:gap-0 my-4 px-2 ">
                <div className="flex gap-2">
                  <img className="w-4 h-4" src={sit2} alt="" />
                  <p className="text-sm text-gray-500">খালি আছে</p>
                </div>
                <div className="flex gap-2 border-l-2 pl-10">
                  <img className="w-4 h-4" src={sit1} alt="" />
                  <p className="text-sm text-gray-500">খালি নেই</p>
                </div>
                <div className="flex gap-2 border-l-2 pl-10">
                  <img className="w-4 h-4" src={sit3} alt="" />
                  <p className="text-sm text-gray-500">বাছাইকৃত</p>
                </div>
              </div>
              <hr className="" />
              <div className="md:px-28 px-10 mt-5 py-3">
                <div className=" flex mb-5 justify-end">
                  <img className="" src={driver} alt="" />
                </div>
                <div className="flex justify-between gap-24 ">
                  <div className="flex flex-col gap-5">
                    <div className=" flex gap-10">
                      <img className="" src={sit1} alt="" />
                      <img className="" src={sit1} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="" src={sit1} alt="" />
                      <img className="" src={sit1} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="" src={sit1} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="" src={sit1} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit1} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className=" flex gap-10">
                      <img className="" src={sit1} alt="" />
                      <img className="" src={sit1} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="" src={sit1} alt="" />
                      <img className="" src={sit1} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="" src={sit1} alt="" />
                      <img className="" src={sit1} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="" src={sit3} alt="" />
                      <img className="" src={sit3} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="" src={sit1} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                    <div className=" flex gap-10">
                      <img className="w-7" src={sit2} alt="" />
                      <img className="w-7" src={sit2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <div className="bg-base-100 md:bg-[#F7F7F7]">
              <div className="p-3">
                <div className=" flex justify-between mb-1">
                  <p>সিট</p>
                  <p>ভাড়া</p>
                </div>
                <hr className="mb-2" />
                <div className=" flex justify-between mb-1">
                  <p>D3</p>
                  <p>৯০০</p>
                </div>
                <hr className="mb-2" />
                <div className=" flex justify-between mb-1">
                  <p>D4</p>
                  <p>৯০০</p>
                </div>
              </div>
              <div className=" flex justify-between mb-1 bg-green-100 p-3">
                <p className="font-semibold">মোট ভাড়া</p>
                <p>২০৪০</p>
              </div>
            </div>
            <div className="mt-5">
              <div
                tabindex="0"
                class="collapse collapse-arrow border border-base-300"
              >
                <div
                  class="collapse-title bg-base-100
                  font-medium"
                >
                  উঠার স্থান
                </div>
                <div class="collapse-content">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div
                tabindex="0"
                class="collapse collapse-arrow border border-base-300"
              >
                <div class="collapse-title bg-base-100 font-medium">
                  নামার স্থান
                </div>
                <div class="collapse-content">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="bg-green-300 p-4 text-center text-gray-100">
                পরবর্তী ধাপ{" "}
                <FontAwesomeIcon
                  className="text-gray-100"
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </p>
            </div>
            <hr className="mt-4" />
            <div className="hidden md:block">
              <div className=" flex  text-sm md:px-16 mt-5 ">
                <p className="pr-8">প্রয়োজনীয় শর্তাবলী</p>
                <p className="text-secondary border-l-2 pl-8">
                  বাতিলকরণের শর্তাবলী
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border mt-5 hidden md:block">
        <div className="p-4 ">
          <div className="flex justify-between my-3">
            <div className=" flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex justify-center items-center">
                <img className="w-5" src={busLogo} alt="" />
              </div>
              <div>
                <h1 className="font-semibold">ঢাকা ব ৩৪-৬৭৪৩</h1>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <p>কোচ নংঃ ৫৬২ </p>
                  <p>এসি বাস</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">৮০০ টাকা</p>
            </div>
          </div>
          <hr />
          <div className=" my-4">
            <div className="flex justify-between items-center">
              <p>ঢাকা</p>
              <div className="flex flex-col gap-2 items-center">
                <img src={rightArrow} alt="" />
                <p className="text-sm">09:35 AM</p>
              </div>
              <p>চট্টগ্রাম</p>
            </div>
          </div>
        </div>
        <div className="bg-green-100 p-3">
          <div className=" flex justify-between items-center">
            <div className=" flex gap-3">
              <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center">
                <img src={sitLogo} alt="" />
              </div>
              <div>
                <p>আসন খালি ২৮</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-primary text-semibold">বুকিং করুন</p>
              <img src={upArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="border mt-5 hidden md:block">
        <div className="p-4 ">
          <div className="flex justify-between my-3">
            <div className=" flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex justify-center items-center">
                <img className="w-5" src={busLogo} alt="" />
              </div>
              <div>
                <h1 className="font-semibold">ঢাকা ব ৩৪-৬৭৪৩</h1>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <p>কোচ নংঃ ৫৬২ </p>
                  <p>এসি বাস</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold">৮০০ টাকা</p>
            </div>
          </div>
          <hr />
          <div className=" my-4">
            <div className="flex justify-between items-center">
              <p>ঢাকা</p>
              <div className="flex flex-col gap-2 items-center">
                <img src={rightArrow} alt="" />
                <p className="text-sm">09:35 AM</p>
              </div>
              <p>চট্টগ্রাম</p>
            </div>
          </div>
        </div>
        <div className="bg-green-100 p-3">
          <div className=" flex justify-between items-center">
            <div className=" flex gap-3">
              <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center">
                <img src={sitLogo} alt="" />
              </div>
              <div>
                <p>আসন খালি ২৮</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-primary text-semibold">বুকিং করুন</p>
              <img src={upArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
