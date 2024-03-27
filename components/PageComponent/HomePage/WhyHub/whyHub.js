
import { useEffect, useState } from "react";
import Image from "next/image"
import axios from "../../../UI/Axios/Axios"
const WhyHub = () => {

  const [content, setContent] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/whyus")
      setContent(response?.data?.result)
    }
    fetchData()
  }, [])



  return (
    <div className="px-4 md:px-8 lg:px-20 xl:px-24 xxl:px-32 w-full h-max my-16 Poppins">
      <div className="flex flex-col lg:flex-col xl:flex-col xxl:flex-col w-full h-max gap-7 items-center justify-center">
        <div className="flex justify-center  w-full lg:w-2/6 xl:w-2/6 xxl:w-2/6 ">
          <div className="w-max text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">
            Why Choose
            <span className="w-max p-1 text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold text-justify ">
              HUBIT
            </span>
          </div>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 xxl:grid-cols-3 gap-x-20 gap-y-12 w-full lg:w-4/6 xl:w-5/6 xxl:w-5/6">
          {content.map((item, i) => {
            return (

              <div key={i} className="flex gap-5 p-6 shadow-md rounded-xl">
                <div className={`${i % 2 === 0 ? "bg-green-400" : "bg-purple-400"} relative h-[42px] rounded-full w-[42px] flex items-center justify-center`}>
                  <Image
                    height={14}
                    width={14}
                    className="rounded-full"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/public/${item.image}`}
                    alt={item.title}
                  />
                </div>
                <div className="space-y-3 flex-1">
                  <h1 className="text-lg font-medium m-0">{item.title}</h1>
                  <div className="w-full h-full text-justify leading-relaxed text-xs  text-gray-500">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WhyHub;
