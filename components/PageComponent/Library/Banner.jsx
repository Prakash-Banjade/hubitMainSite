

const Banner = () => {
  return (
    <>
      <div className="relative z-10">
        <div className=" w-full h-80  bg-main ">
          {/* <Image
            src={image}
            layout="fill"
            alt="Loading ..."
            className=" opacity-75  object-cover object-center"
          /> */}
          <div className="h-72 w-72 bg-gray-500"></div>
        </div>
        <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
          <div className="font-bold text-xl md:text-3xl xl:text-3xl  xxl:text-3xl">
            our library
          </div>
          <div className="Poppins text-xs md:text-sm xl:text-sm  xxl:text-sm mt-2">
            home/our library
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
