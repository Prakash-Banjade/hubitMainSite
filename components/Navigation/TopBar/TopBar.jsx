import { NavData } from "../NavData";
import TopBar1 from "./TopBar1";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/hubitLogo1.svg";
import { useRouter } from "next/router";
import { MdDehaze } from "react-icons/md";

function TopBar({ iconClick, setIconClick }) {
  const router = useRouter();
  const AdmissionForm = (id) => {
    router.push({ pathname: `/admissionForm/id` });
  };
  return (
    <div className=" w-full  top-0 shadow-[0px_1px_8px_1px_gray] z-50 sticky">
      <div className="hidden lg:block xl:block xxl:block">
        {/* top bar 1 is heading top bar in purple color */}
        <TopBar1 />
        {/* top bar 1 is heading bottom bar in purple color */}
        <div className="flex justify-between items-center  px-20 xl:px-24 xxl:px-32 bg-white">
          {" "}
          <div className="w-[86px] xxl:w-[95px] cursor-pointer">
            <Link href={"/"}>
              <Image
                src={Logo}
                height={25}
                width={35}
                priority
                layout="responsive"
                objectFit="contain"
                quality={100}
                alt="logo"
              />
            </Link>
          </div>
          <div
            className="capitalize cursor-pointer px-2 py-1 text-xs xl:text-sm xxl:text-base  transition-all hover:scale-105 ease-in-out duration-300 delay-75 bg-main   animatePulse rounded-md text-white
             "
            onClick={() => AdmissionForm()}
          >
            online admission
          </div>
          <div className="flex gap-3 items-center">
            <div className="capitalize flex items-center gap-2 ">
              {NavData.map((val, i) => {
                return (
                  <div className="flex gap-3  items-center" key={i}>
                    <Link href={val.path} passHref>
                      <div
                        className={`${
                          val.path === router.asPath
                            ? "border-b-2 border-main"
                            : ""
                        } text-gray-700 text-xs xl:text-sm xxl:text-base w-fit cursor-pointer`}
                      >
                        {val.title}
                      </div>
                    </Link>
                    <div className="h-[13px] w-[1px] bg-gray-600"></div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-[6px] cursor-pointer">
              <div className="text-gray-800 text-xs xl:text-sm xxl:text-base">
                More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 lg:hidden xl:hidden xxl:hidden">
        {!iconClick ? (
          <div>
            <MdDehaze
              className="w-10 h-10 text-gray-700 cursor-pointer"
              onClick={() => setIconClick(true)}
            />
          </div>
        ) : (
          <div className="w-10 h-10 "></div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
