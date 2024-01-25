import React from "react";
// import ../../../../public/images"/images/japan.jpg" from "";
import OurTeamCard from "./OurTeamCard";
function OurTeamMembers() {
  const OurTeamMembersCard = [
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Kisan Mahat",
      as: "full-stack developer",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Adarsh Kunwar",
      as: "front-end developer",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "himal fullel",
      as: "MERN fullstack Developer",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "himal fullel",
      as: "MERN fullstack Developer",
    },
  ];
  return (
    <div className="py-16">
      <div className="flex flex-col gap-5">
        <div className="text-2xl text-center  text-main Poppins font-bold capitalize">
          Our Teams Members
        </div>

        <div className="Poppins text-xs leading-6   w-5/6  text-center mx-auto   text-gray-400">
        Our team members at the HIGPL are a diverse group of highly skilled and experienced professionals
        with great knowledge in the technology field. They are experts in their own fields and are devoted
        to providing you the latest and most up-to-date services. They are passionate about teaching and
        are committed to helping the clients to achieve their goals.
        </div>
      </div>
      <div
        className="w-full  place-content-center place-items-center grid grid-cols-1 gap-y-8  md:grid-cols-2 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0  xxl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4
       xxl:grid-cols-4 px-14 pt-16"
      >
        {OurTeamMembersCard.map((val, i) => {
          return (
            <div key={i}>
              <OurTeamCard image={val.image} name={val.name} as={val.as} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeamMembers;
