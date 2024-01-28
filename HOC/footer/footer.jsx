import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
// import { FaFacebookF, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Icons from "../../components/Navigation/Navitem/iconitem";
function Footer() {
  const Wicon = [
    {
      Icon: <BsWhatsapp />,
      path: "https://wa.me/message/R23HVVD5DWPVI1",
    },
  ];

  const links = [
    { title: "home" },
    { title: "about us" },
    { title: "our services" },
    { title: "latest information" },
    { title: "recent a quote" },
    { title: "get in touch" },
  ];
  const about = [
    { title: "company" },
    { title: "careers" },
    { title: "customers" },
    { title: "contact us" },
  ];
  return (
    <div className="px-4 lg:px-8 xl:px-9 xxl:px-10 bg-black py-8 ">
      <div className="mx-auto grid gap-5 text-white grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4">
        <div className="col-span-1 capitalize">
          <div className="text-lg xl:text-xl xxl:text-2xl mb-2 Poppins">
            links
          </div>
          <div>
            {links.map((val, i) => {
              return (
                <div key={i}>
                  <div className="my-2  cursor-pointer text-xs xl:text-sm xxl:text-base  w-fit textPrimary">
                    {val.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1 capitalize">
          <div className="text-lg xl:text-xl xxl:text-2xl  mb-2 Poppins ">
            about
          </div>
          <div>
            {about.map((val, i) => {
              return (
                <div key={i}>
                  <div className="my-2 cursor-pointer w-fit text-xs xl:text-sm xxl:text-base textPrimary">
                    {val.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1  md:col-span-1 lg:col-span-1  xl:col-span-1 xxl:col-span-1 capitalize">
          <div className="text-lg xl:text-xl xxl:text-2xl  mb-2 Poppins">
            featured courses
          </div>
          <div className="mt-2 text-sm xl:text-base xxl:text-lg ">
            MERN Stack Development
          </div>
          <div className="mb-2 text-xs xl:text-sm xxl:text-base">
            starts in <span className="text-main"> March 20,2020</span>
          </div>
          <div className="mt-2 text-sm xl:text-base xxl:text-lg ">
            Web Designing
          </div>
          <div className="mb-2 text-xs xl:text-sm  xxl:text-base">
            starts in <span className="text-main"> April 21,2020</span>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1  md:col-span-1 lg:col-span-1  xl:col-span-1 xxl:col-span-1">
          <div className="text-lg xl:text-xl xxl:text-2xl capitalize  mb-2 Poppins">
            Our Contact
          </div>
          <div className=" ">
            <div className="flex space-x-4 my-2   md:text-sm xxl:my-3 items-center">
              <IoCall className="text-sm xl:text-base xxl:text-lg" />
              <p className="text-xs xl:text-sm xxl:text-base">
                +977-071532805,9827494116,9857045414
              </p>
            </div>
            <div className="flex  items-center space-x-4 my-2  text-xs xl:text-sm xxl:text-base  ">
              <IoMdMail className="text-sm xl:text-base xxl:text-lg" />
              <a href="">training@hubit.com.np</a>
            </div>
            <div className="flex space-x-4 my-2 text-xs xl:text-sm xxl:text-base xxl:my-3  items-center">
              <BiCurrentLocation className="text-sm xl:text-base xxl:text-lg" />
              <p className="capitalize">
                Butwal-09 (Ganesh Path),Milanchowk
                <br />
                Rupandehi Nepal
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full border-b py-2 border-white"></div>
      </div>
      {/* bottom section starts  */}

      <div className="flex flex-col md:gap-6 lg:gap-10 xl:gap-10 xxl:gap-10 md:flex-row lg:flex-row xl:flex-row xxl:flex-row lg:items-center xl:items-center xxl:items-center justify-between pb-2 space-y-5 md:space-y-0">
        <div className="w-28 mt-2   cursor-pointer">
          <Link href={"/"}>
            {/* <Image
              src="/images/hubitLogo1.svg"
              alt="logo"
              height={100}
              width={100}
            /> */}
            <div className="text-2xl text-main">Hub IT</div>
          </Link>
        </div>

        {/* privacy policy section starts  */}
        <div className=" flex-1 md:mx-8 lg:mx-16">
          <div className="flex items-center space-x-1 md:space-x-2 text-white ">
            <Link href="">
              <p className="cursor-pointer   transition hover:opacity-80">
                Terms & Condition
              </p>
            </Link>
            <span className="h-4 w-0.5 bg-white"></span>
            <Link href={`/Policy`}>
              <p className="cursor-pointer  transition hover:opacity-80">
                Privacy Policy
              </p>
            </Link>
            <span className="h-4 w-0.5 bg-white"></span>
            <Link href="">
              <p className="cursor-pointer  transition hover:opacity-80">
                License Agreement
              </p>
            </Link>
          </div>
          <p className="text-xs xl:text-sm   xxl:text-[14px] mt-1 text-white">
            Copyright &copy; {new Date().getFullYear()}, Hub IT
          </p>
        </div>
        {/* social media icon section ends  */}
        <div className="flex items-center space-x-4 h-20">
          {Icons.map((icon, index) => {
            return (
              <div
                key={index}
                className="text-xl text-white cursor-pointer hover:text-main"
              >
                <Link href={icon.path} passHref>
                  <a target={"_blank"}>{icon.icon}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* bottom section ends  */}
      {/* whatsapp widget */}
      <div className="text-main text-5xl bottom-20 right-8 fixed cursor-pointer transition ">
        {Wicon.map((val, i) => {
          return (
            <div key={i}>
              <Link href={val.path} passHref>
                <a
                  target={"_blank"}
                  className="text-[#4FCE5D] text-5xl font-black"
                >
                  {val.Icon}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
