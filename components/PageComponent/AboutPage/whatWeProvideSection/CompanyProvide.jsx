import React from "react";
import { ReactSVG } from 'react-svg'


function CompanyProvide({ image, title, description }) {
  return (
    <div className=" transition-all duration-200 ease-linear hover:border-b-2 h-96  md:h-80 xl:h-96  xxl:h-96   hover:border-b-main shadow-gray-200 px-16 py-4 ">
      <div className="flex flex-col gap-5 items-center ">
        <div className="text-3xl text-main border-4 rounded-full p-2">
          <ReactSVG src={image} />
        </div>
        <div className="w-full Poppins text-center text-xl font-medium"> {title}</div>
      </div>
      <div className="Poppins text-xs text-gray-500 font-regular text-justify mt-5 h-36 lg:h-52  xl:h-52 xxl:h-52  scroll overflow-scroll">
        {description}
      </div>
    </div>
  );
}

// CompanyProvide.prototypes = {
//   title: PropTypes.string,
//   icon: PropTypes.string,
//   description: PropTypes.string,
// };
// CompanyProvide.defaultProps = {
//   title: "error",
//   icon: "error",
//   description: "error",
// };

export default CompanyProvide;
