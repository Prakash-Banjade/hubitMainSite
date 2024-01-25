import React from "react";

function CertificateMid() {
  return (
    <div className="  px-5 md:px-20 xl:px-20 xxl:px-20 xxxl:px-20   py-10">
      {" "}
      <div
      // className={`${
      //   references?.length > 500 ? "h-100  overflow-scroll" : "h-32 "
      // }`}
      >
        <div className="text-2xl capitalize font-light text-mainColor ">
          check your certificate
        </div>

        <div className="font-normal text-[15px] my-5 text-gray-500 xs:w-full sm:w-full md:w-full lg:w-[60vh] xl:w-[60vh] xxl:w-6/12 xxxl:w-7/12">
          {`HUB IT is recognized as one of Nepal's best global skill development
          and IT training centers. The journey of HUB IT started in 2017 with a
          big dream to bring applied education to the mass population at an
          affordable cost. The main purpose of HUB IT is to facilitate, with the
          best IT-related skills.`}
        </div>
        <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 xxl:w-6/12 xxxl:w-6/12">
          <input
            type="text"
            name="check"
            placeholder="Enter Registration Number"
            className="bg-white border-2 border-main rounded-3xl w-full px-3 py-2"
          />
        </div>
        <div className="flex justify-end md:w-6/12 lg:w-6/12 xl:w-6/12 xxl:w-6/12 xxxl:w-6/12">
          {" "}
          <button
            className="bg-main px-16 md:px-20 xl:px-20 xxl:px-20 xxxl:px-20  py-2 my-12 capitalize rounded-3xl text-white hover:scale-[1.04] transition-all
           ease-in-out delay-75 duration-300 hover:shadow-xl hover:shadow-gray-400  text-center"
          >
            check
          </button>
        </div>
      </div>
    </div>
  );
}

export default CertificateMid;
