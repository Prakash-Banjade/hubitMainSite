import React from "react";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import RelatedCourseCard from "../RelatedCourse/RelatedCourseSection.jsx.jsx";
import Icon from "../RelatedCourse/Icon";
const Buttom = () => {
  return (
    <div>
      <div className=" ">
        <div className="flex items-center justify-start ">
          <p className="text-xl font-bold mr-4">Share on:</p>
          <div className="flex">
            <Icon
              i={
                <FaInstagramSquare className="h-full w-full hover:color-pink-600" />
              }
            />
            <Icon i={<FaFacebookSquare className="h-full w-full" />} />
            <Icon i={<FaGooglePlusSquare className="h-full w-full" />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttom;
