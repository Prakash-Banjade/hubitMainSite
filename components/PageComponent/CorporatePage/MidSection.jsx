import Image from "next/image";
import React from "react";
import image from "../../Resources/designnoBg.png";
const MidSection = () => {
  const dataa = [
    { images: image, title: "velapaltem accustyions imperials" },
    { images: image, title: "velapaltem accustyions imperials" },
    { images: image, title: "velapaltem accustyions imperials" },
    { images: image, title: "velapaltem accustyions imperials" },
  ];
  const status = [
    { numbers: 28, title: "training accomplished" },
    { numbers: 28, title: "training running" },
    { numbers: 28, title: "upcoming training " },
    // { numbers: 28, title: "training completed" },
  ];
  return (
    <div>
      <div>
        <h1 className="text-center text-xl md:text-3xl xl:text-3xl   xxl:text-3xl  text-main capitalize ">
          what we do
        </h1>
        <div className="mx-auto  text-xs md:text-base xl:text-base  xxl:text-base text-center md:w-7/12 xl:w-7/12 xxl:w-7/12  text-gray-600">
         We design a course for your employee or students according to organization need or as per their syllablus of universities
        </div>
        <div className="md:grid xl:grid xxl:grid  grid-cols-4 gap-10 place-items-center my-9 md:my-16 px-4 md:px-10">
          {dataa.map((val, i) => {
            return (
              <div className="relative my-4 md:my-0" key={i}>
                <div className=" w-full md:w-80 xl:w-80 xxl:w-80 ">
                  <Image
                    src={val.images}
                    layout="responsive"
                    height={200}
                    width={300}
                    // objectfit="cover"
                    // objectPosition={"center"}
                    alt="Loading ..."
                    className="   object-cover object-center"
                  />{" "}
                </div>
                <div
                  className="absolute  bottom-0 bg-[#ff1cd9] bg-opacity-40 w-full text-white
                  py-2 px-2 capitalize text-center text-xs md:text-base xl:text-base  xxl:text-base"
                >
                  {val.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-center text-xl md:text-3xl xl:text-3xl xxl:text-3xl text-main capitalize mt-10 md:mt-28 lg:mt-28  xl:mt-28  xxl:mt-28  ">
          our training status
        </h1>
        <div className="mx-auto text-center text-xs md:text-base xl:text-base  xxl:text-base  md:w-7/12 xl:w-7/12 xxl:w-7/12  text-gray-600">
          Take a glancet the status of our classes. Choose your courses, let us
          know your time and we will fit you in therequired schedule.
        </div>
        <div className="md:grid xl:grid xxl:grid  grid-cols-3 gap-10 px-4 md:px-10 place-items-center  my-9 md:my-16">
          {status.map((val, i) => {
            return (
              <div
                key={i}
                className="bg-main rounded-xl w-full h-40 flex justify-evenly text-white
               opacity-70  my-4 md:my-0 xl:my-0 xxl:my-0  text-xl font-bold capitalize items-center flex-col  "
              >
                <div className="">{val.numbers}</div>
                <div> {val.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MidSection;
