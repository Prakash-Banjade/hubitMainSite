import React from "react";

function PopularCoursesCard({CourseTittle}) {
  return (
    <div
      className=" 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
      pb-5 rounded-lg"
    >
      <div className="w-72 ">
        {/* {image && (
          <Image
            src={val.image}
            // height={65}
            // width={60}
            alt="Loading ..."
            layout="fill"
            // objectFit="cover"
            // placeholder="blur"
            blurDataURL={image}
            className="borderRadiusTop bg-red-600 "
          />
        )} */}
      </div>
      <div className=" px-4  flex flex-col items-center justify-center my-6  ">
        <div className="Poppins capitalize font-semibold  text-gray-800">
          <h1 className="text-2xl">{CourseTittle}</h1>
        </div>
        {/* <div className="text-gray-600 font-medium text-[12px]">
          Category : {CourseCategory}
          <p>{Description}</p>
        </div>
        <div className="text-gray-500 font-regular capitalize text-[12px] flex">
          <div className="flex gap-1">
            <FaUser />
            <p>{usercount}</p>
          </div>
          <div className="flex gap-1">
            <FaCommentAlt />
            <p>{commentcount}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default PopularCoursesCard;
