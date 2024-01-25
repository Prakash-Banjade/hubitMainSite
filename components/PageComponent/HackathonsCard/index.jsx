import React, { useState } from "react";
import { useRouter } from "next/router";
import LiveCard from "../HackathonsCard/LiveCard";
import PreviuosCard from "../HackathonsCard/PreviuosCard";
function HackathonsCard({ image, name, from, date, id }) {
  const router = useRouter();
  // const RedirectToNextPage = () => {
  //   router.push({
  //     pathname: `viewCertificate/${id}`,
  //     // query: {
  //     //   overview: overview,
  //     //   requirements: requirements,
  //     //   references: references,
  //     //   title: title,
  //     //   image: image,
  //     // },
  //   });
  // };

  const [active, setActive] = useState("live");

  let mod;

  switch (active) {
    case "live":
      mod = <LiveCard />;
      break;
    case "previous":
      mod = <PreviuosCard />;
      break;
    default:
      mod = 0;
      break;
  }
  const handleTabs = (title) => {
    setActive(title);
  };
  const Tabs = [{ title: "live" }, { title: "previous" }];
  return (
    <div className="">
      <div className="flex items-center gap-8 my-5  px-5 md:px-20 xl:px-20 xxl:px-20 xxxl:px-20 ">
        {Tabs.map((val, i) => {
          return (
            <div
            key={i}
              className={`capitalize cursor-pointer   w-24 py-1 rounded-xl text-center hover:opacity-70 
              hover:scale-[1.03]  ${
                val.title === active ? "tipDown1 text-white " : "bg-gray-300"
              }`}
              onClick={() => handleTabs(val.title)}
            >
              {val.title}
            </div>
          );
        })}
      </div>

      {mod}
    </div>
  );
}

export default HackathonsCard;
