import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import axios from "../../../UI/Axios/Axios";
import { useRouter } from "next/router";


function CourseCuriculum() {
  const [toggle, setToggle] = useState(false);
  const [courseCuriculumData, setCourseCuriculumData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [secID, setsecID] = useState([]);

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      getCuriculumData(id);
    }
  }, [router.isReady, router.query]);

  function getCuriculumData(id) {
    setLoading(true)
    try {
      axios
        .get(`/courses/${id}`)
        .then((res) => {
          console.log(res?.data?.syllabus, 'syllabus');
          setsecID(res.data[0]);
          setCourseCuriculumData(res.data?.syllabus);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)

        });
    } catch (error) {
      console.log(error);
      setLoading(false)

    }
  };

  return (
    <div>
      <div className=" bg-gray-50 p-3 overflow-y-auto rounded-md shadow-sm max-h-[800px]">
        <div className="flex flex-col gap-8">
          {
            loading && new Array(5).fill(0).map((_, i) => <div key={i} className="h-12 bg-gray-300 rounded-md w-full animate-pulse"></div>)
          }
        </div>
        {!loading && courseCuriculumData?.map((val, i) => {
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
