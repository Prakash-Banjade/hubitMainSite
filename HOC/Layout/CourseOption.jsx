// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CourseOption() {
//   const [course, setCourse] = useState([]);
//   const getData = () => {
//     try {
//       axios
//         .get("https://himal-hubitbackend.adaptable.app/course")
//         .then((res) => {
//           console.log(res);
//           setCourse(res.data.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   let courseName = [];
//   {
//     course.map((val, i) => {
//       courseName.push({
//         id: val.id,
//         course_name: val.course_name,
//       });
//       return <div key={i}>{val.course_name}</div>;
//     });
//   }
//   console.log(courseName);
//   // options
//   const options = [
//     {
//       id: "0",
//       course_name: "choose any course name",
//       apikey: "course_names",
//     },
//     ...courseName,
//   ];
//   return (
//     <div>
//       <select className=" px-6 py-2 outline-none text-gray-600 capitalize  w-full border-b-2 border-main  bg-[#EEEAEA]  rounded-sm">
//         {options.map((val, i) => {
//           return <option key={i}>{val.course_name}</option>;
//         })}
//       </select>
//     </div>
//   );
// }

// export default CourseOption;
