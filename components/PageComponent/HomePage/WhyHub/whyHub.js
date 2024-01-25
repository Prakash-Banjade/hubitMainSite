import { BsCheckLg , BsPersonCircle } from "react-icons/bs";
import { MdOutlineSupport, MdLibraryBooks, MdOutlineContentPaste } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
const WhyHub = () => {
  let data = [
    { 
      
      icon: <BsCheckLg />,
      title: "Well-Equipped Lab",
      color:"#5A5ECA",
      description:
        "Labs are equipped with world class equipments and facilities based on the latest technology.",
    },
    {
      icon: <GiTeacher />,
      title: "Highly experience instructor",
      color:"#1FA67A",
      description:
        "Instructors are highly qualified active professional",
    },
    {
      icon: <MdOutlineContentPaste />,
      color:"#F2C351",
      title: "Updated Syllablus",
      description:
        "Designed syllablus focusing the sector as need of industries demand in which our students can compete.",
    },
    {
      icon: <BsPersonCircle/>,
      color:"#F2C351",
      title: "Personality Development training",
      description: "We not only provide skill,we create P.D of students by HR professionals",
    },
    {
      icon: <MdOutlineSupport />,
      color:"#1FA67A",
      title: "Support after training",
      description:
        "As I.T is upgraded every second our student needs support for new upgrade,we provide support after training also",
    },
    {
      icon: <MdLibraryBooks />,
      color:"#5A5ECA",
      title: "Access library",
      description:
        "Our online library provide students a vast refrence book which they may use in future also",
    },
  ];

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
          {data.map((item,i) => {
            return (
              <div key={i}>
                <div className="flex gap-5 ">
                  <div className={`p-3 mt-2 text-white h-full rounded-full text-2xl xxl:text-lg`} style={{
                    background:item.color
                  }}>
                    {item.icon}
                  </div>
                  <div className="h-full w-full flex flex-col ">
                  <div className=" xl:text-sm xxl:text-base w-full h-fit">
                    <h1 className=" text-xl font-medium">{item.title}</h1>
                  </div>
                  <div className="w-full h-full text-justify text-xs xl:text-xs  xxl:text-sm text-gray-500">
                    {item.description}
                  </div>
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
