import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


function CourseCuriculum({ data }) {
  const [toggle, setToggle] = useState(false);

  const [secID, setsecID] = useState(data);


  return (
    <div>
      <div className=" bg-gray-50 p-3 overflow-y-auto rounded-md shadow-sm max-h-[800px]">
        {data?.map((val, i) => {
          return (
            <section key={val?.id}>
              <h2 className="my-0 text-sm font-medium text-gray-500">Chapter {i + 1}</h2>
              <div
                key={i}
                id="content"
                onClick={() => {
                  setToggle(!toggle), setsecID(prev => prev === val.id ? '' : val.id);
                }}
                className={` border rounded-md border-gray-400 my-8 mt-2 shadow-sm`}
              >
                <div className="text-main Poppins  text-lg px-6  py-4 cursor-pointer flex items-center justify-between  ">
                  <div>{val?.title}</div>
                  <div>
                    {toggle && secID === val.id ? (
                      <MdKeyboardArrowUp className="w-7 h-7" />
                    ) : (
                      <MdKeyboardArrowDown className="w-7 h-7" />
                    )}
                  </div>
                </div>
                {secID === val.id && <div
                  aria-hidden={
                    toggle && secID === val.id ? "false" : "true"
                  }
                >
                  <div className="prose lg:prose-xl p-4 pt-0" dangerouslySetInnerHTML={{ __html: val?.description }} />
                </div>}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default CourseCuriculum;
