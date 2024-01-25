import Link from "next/link";
import Data from "../../../Navigation/Navitem/findusicon";

const FindUsOn = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 mt-16 flex flex-col items-center ">
      <div className="w-max text-[#a0047d] xl:text-xl xxl:text-2xl capitalize Poppins font-bold my-10">
        <h2>Find Us On</h2>
      </div>
      <div className="  grid  grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 xxl:grid-cols-6  gap-10 flex-wrap justify-around my-6 w-full">
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center w-max shadow-[0px_0px_2px_0px_gray] px-5 
              rounded-md py-2 xxl:px-6 cursor-pointer  hover:scale-105 transition-all 
              hover:shadow-[0px_0px_2px_0px_blue]  duration-200"
            >
              <div className="text-4xl xl:text-5xl xxl:text-6xl">
                <Link href={item.path} passHref>
                  <a target={"_blank"}>{item.icon}</a>
                </Link>
              </div>
              <div className="text-base xl:text-lg xxl:text-xl Poppins">
                500
              </div>
              <div className="text-xs xl:text-sm xxl:text-base text-gray-500 capitalize">
                followers
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FindUsOn;
