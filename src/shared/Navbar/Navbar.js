import React from "react";
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <div className="md:px-20 py-5 bg-[#FAFAFA] shadow-sm">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-primary">
            <img src={logo} alt="" />
          </div>
          <div>
            <p>
              এক্সওয়াই <br /> বাস কোম্পানী
            </p>
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <div className="flex gap-10 text-sm font-semibold">
            <p>টিকেট সার্চ ও প্রিন্ট</p>
            <p>টিকেট ফেরত</p>
            <p>অভিযোগ ও পরামর্শ</p>
          </div>
          <div className=" flex gap-4 items-center">
            <p className="bg-primary px-10 py-2 text-white">বাংলা</p>
            <p className="bg-white text-black  border-2 px-10 py-2">English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
