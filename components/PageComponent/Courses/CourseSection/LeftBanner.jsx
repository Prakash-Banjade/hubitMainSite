import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const Leftbanner = ({ data }) => {
  console.log(data);

  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: `/admissionForm/${id}`,
    });
  };
  return (
    <>
      <div className="py-4 ">
        {/* <MainImage /> */}
        <div className="flex gap-5">
          <div className=" border rounded-lg h-98 w-full mx-auto  relative">
            <Image src={`https://hubmainback.hubit.com.np/public/${data?.image}`} alt={data?.title} layout="fill" className="" />
            {/* {image ? (
              <div
                className="h-full "
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  // width: "100px",
                }}
                alt="loading..."
                quality={100}
              />
            ) : (
              ""
            )} */}
          </div>
          <div>
            <h1 className="text-xl mt-0 poppins">{data?.title}</h1>
            {
              data?.description ?
                <div dangerouslySetInnerHTML={{ __html: data?.description }} className="prose xl:prose" />
                : <div className="text-lg font-base text-gray-600">No description added yet!</div>
            }

            <button
              onClick={handleClick}
              className="p-3 border rounded-lg text-center text-white cursor-pointer bg-main mt-7"
            >
              Enroll now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftbanner;
