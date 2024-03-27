import React, { useEffect, useState } from "react";
import axios from "../../UI/Axios/Axios"
import Image from "next/image"

function TrainingPartners() {


  const [partners, setPartners] = useState([])

  const getPartners = async () => {
    const response = await axios.get("/partners")
    setPartners(response?.data?.result)
  }

  useEffect(() => {
    getPartners()
  }, [])


  return (
    <div className=" my-20 md:my-44 lg:my-44 xl:my-44 xxl:my-44">
      <div>
        <h1 className="text-center text-xl md:text-3xl xl:text-3xl   xxl:text-3xl   text-main capitalize ">
          our  partners we have work with
        </h1>

        <div className="w-fit mx-auto md:flex xl:flex xxl:flex flex-wrap  md:gap-6  lg:gap-7 xl:gap-10 xxl:gap-10 items-center justify-center md:my-16 lg:my-16  xl:my-16  xxl:my-16  px-10">
          {partners.map((val, i) => {
            return (
              <div
                className=" w-[150px] relative md:w-44  lg:w-44  xl:w-44  xxl:w-44 my-10 md:my-0 xl:my-0 xxl:my-0 "
                key={i}
              >

                {val?.logo !== "undefined"
                  && <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/public/${val.logo}`}
                    width={200}
                    height={300}
                    alt="Loading data"
                    className=" object-cover object-center w-full"
                  />}

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrainingPartners;
