import Image from "next/image";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../UI/Axios/Axios";

const MidSection = ({ trainings }) => {
  const [services, setServices] = useState([])

  useEffect(() => {
    function fetchServices() {
      axiosInstance.get('/services').then(res => {
        setServices(res.data?.result);
      }).catch(err => {
        if (err instanceof Error) return console.error(err.message);
        console.log(err);
      })
    }
    fetchServices()
  }, [])

  const status = [
    { title: "training accomplished", key: "completed" },
    { title: "training running", key: "running" },
    { title: "upcoming training", key: "upcomming" },
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
        <div className="flex items-center justify-center flex-wrap gap-3 mt-5">
          {services.map((service, i) => {
            return (
              <div className="relative shadow-lg group rounded-md  max-h-[400px] grid place-items-center" key={service?.id}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/public/${service?.featured_image}`}
                  height={350}
                  width={350}
                  alt="data loading"
                  className="object-cover object-center w-full rounded-md"
                  priority
                />
                <div className="absolute bottom-0 left-0 w-full h-full rounded-md bg-black bg-opacity-50 flex justify-center items-center">
                  <h2 className="text-white text-xl text-center px-2 mt-auto">{service?.name}</h2>
                </div>
                {/* <div className="absolute group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none opacity-0 transition-all left-20 prose xl:prose-xl bg-white shadow-md p-2 rounded-md" dangerouslySetInnerHTML={{ __html: service?.content }} /> */}
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
               opacity-70  my-4 md:my-0 xl:my-0 xxl:my-0  text-xl font-bold capitalize items-center flex-col"
              >
                <div className="">{trainings?.filter(training => training?.status === val.key).length}</div>
                <div>{val.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MidSection;
