import Image from "next/image";
import React, { useEffect, useState } from "react";
// import image from "../../Resources/careerpic.jpg";
import axiosInstance from "../../UI/Axios/Axios";
import Link from "next/link"
const TopSection = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    function fetchData() {
      axiosInstance.get('/corporate').then(res => {
        setData(res?.data?.result);
      }).catch(err => {
        if (err instanceof Error) return console.error(err.message);
        console.log(err);
      })
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="w-full h-full">
        <div className="relative z-10">
          <div className=" w-full h-80  bg-main ">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/public/${data?.banner}`}
              layout="fill"
              alt="Loading daata"
              className=" opacity-75  object-cover object-center"
              priority
            />
          </div>
          <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
            <div className="font-bold text-xl md:text-3xl xl:text-3xl  xxl:text-3xl">
              co-operate training
            </div>
            <div className="Poppins text-xs md:text-sm xl:text-sm  xxl:text-sm mt-2">
              home/co-operating training
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10  lg:px-10  xl:px-10 xxl:px-10">
          <div className="md:grid  xl:grid xxl:grid grid-cols-12  h-full mt-6">
            <div className="md:flex prose max-w-none flex-col  col-span-8 xs:w-full sm:w-full md:w-full lg:w-[60vh] xl:w-[60vh] xxl:w-9/12 xxxl:w-9/12">
              <h1 className="text-main font-bold text-lg md:text-3xl xl:text-3xl xxl:text-3xl">
                {data?.title || 'What is Corporate Training?'}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: data?.content }} className="" />
            </div>
            <div className="xs:hidden sm:hidden  col-span-4  w-[300px] relative z-20 -mt-20">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/public/${data?.featured_image}`}
                width={300}
                height={300}
                alt="data loading"
                className="h-[300px] w-[300px] rounded"
                priority
              />
            </div>
          </div>
        </div>
        <div
          className="md:flex xl:flex xxl:flex justify-between bg-main 
        px-4 md:px-14 xl:px-14 xxl:px-14 font-bold  uppercase py-2 items-center 
        my-10 md:my-20 lg:my-20 xl:my-20 xxl:my-20"
        >
          <div className="text-white  text-xs md:text-sm xl:text-sm  xxl:text-sm">
            We can help you to train your employee and students to get your dream result
          </div>

          <button className="text-main hover:bg-slate-100 w-48  border-0 py-2 px-6 focus:outline-none bg-white rounded-xl text-sm uppercase sm:w-44 xs:w-44 ">
            <Link href={"/contact"} >
              contact us
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default TopSection;
