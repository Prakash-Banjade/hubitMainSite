import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
function TopBar1() {
  const data = [
    { id: 1, title: "Become Partner", href: "/" },
    { id: 2, title: "Check Certificate", href: "/certificate" },
    { id: 3, title: "Career", href: "/career" },
    { id: 4, title: "Contact Us", href: "/contact" },
    { id: 5, title: "Download Brochure", href: "/" },
    { id: 6, title: "Hackathons", href: "/hackathons" },
    { id: 7, title: "Hire Talents", href: "/" },
    { id: 8, title: "Testimonials", href: "/" },
  ];
  //   const [showUnderline, setShowUnderline] = useState(false);
  //   const [ID, setId] = useState("");
  return (
    <div>
      <div className="bg-main text-[10px] xxl:text-xs flex text-white Poppins font-light py-[7px] items-center justify-between px-20 xl:px-24 xxl:px-32 ">
        <div className="flex items-center gap-3 ">
          <div className="flex gap-1  items-center">
            <div>
              <BsFillTelephoneFill className="font-[11px] rotate-[15deg]" />
            </div>
            <span>071-532805</span>
            <div className="w-[1.1px] h-[10px] bg-white"></div>
            <div>9827494116</div>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <IoMdMail className="font-[11px]" />
            </div>
            <div>training@hubit.com.np</div>
          </div>
        </div>
        <div className="flex gap-4">
          {data.map((val, i) => {
            return (
              <Link href={val.href} key={i}>
                <div
                  // onClick={() => {
                  //   setShowUnderline(true), setId(val.id);
                  // }}
                  key={i}
                  className={` hover:scale-105 transition-all duration-300 ease-in-out  capitalize cursor-pointer `}
                >
                  {" "}
                  {val.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopBar1;

// ${
//     showUnderline && ID === val.id ? "border-b border-white" : " "
//   }
