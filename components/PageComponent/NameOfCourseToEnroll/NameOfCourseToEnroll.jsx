// import { Formik, Form } from "formik";
// import React, { useState } from "react";
// import { IoOptions } from "react-icons/io5";
// import * as yup from "yup";
// import { MultiSelect } from "react-multi-select-component";

// function NameOfCourseToEnroll({
//   SelectData,
//   errors,
//   touched,
//   values,
//   Field,
//   description,
// }) {
//   const [selected, setSelected] = useState([]);
//   const [appearBorder, setAppearBorder] = useState(false);

//   return (
//     <div className="mb-16 px-40">
//       {" "}
//       <div className="     ">
//         <div className="flex justify-between    ">
//           {SelectData.map((val, i) => {
//             if (val.Shift) {
//               return (
//                 <div className="col-span-5">
//                   <div className="  flex flex-col items-center-2  gap-3  h-9  pr-2 ">
//                     <div
//                       className="Poppins flex  justify-center items-center   w-fit    py-1
//                 rounded-sm outline-none border-none text-sm capitalize"
//                     >
//                       {" "}
//                       {val.label}
//                     </div>
//                     <div className=" flex gap-4 items-center">
//                       {val.Shift.map((val, i) => {
//                         return (
//                           <div className="flex gap-2 " key={i}>
//                             <div className="capitalize text-sm Poppins text-gray-500">
//                               {val.label}
//                             </div>
//                             <Field
//                               type={val.type}
//                               value={val.value}
//                               name={val.apikey}
//                             />
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   <div
//                     className={`text-red-400  ${
//                       errors[val.apikey] && touched[val.apikey]
//                         ? " my-2  bg-red-100"
//                         : ""
//                     }  px-2 py-1 text-xs font-medium`}
//                   >
//                     {errors[val.apikey] && touched[val.apikey] ? (
//                       <div>{errors[val.apikey]}</div>
//                     ) : null}
//                   </div>
//                 </div>
//               );
//             } else {
//               return (
//                 <div className="  col-span-5 ">
//                   <Field
//                     as={"select"}
//                     // onChange={(e) => MultiSelectCourses(e)}
//                     name={val.apikey}
//                     className=" w-full bg-[#EEEAEA] Poppins text-sm h-9 capitalize px-3 py-1 mx-7
//           rounded-md outline-none border-none"
//                   >
//                     {val?.options?.map((val, i) => {
//                       console.log(val);

//                       return <option key={i}>{val?.course_name}</option>;
//                     })}
//                   </Field>
//                   {/* <div
//                     className={`${
//                       appearBorder
//                         ? "border-2 border-main px-4 py-2 w-fit "
//                         : ""
//                     }`}
//                   >
//                     {selected}
//                   </div> */}
//                   <div
//                     className={`text-red-400  ${
//                       errors[val.apikey] && touched[val.apikey]
//                         ? " my-2  bg-red-100"
//                         : ""
//                     }  px-2 py-1 text-xs font-medium`}
//                   >
//                     {errors[val.apikey] && touched[val.apikey] ? (
//                       <div>{errors[val.apikey]}</div>
//                     ) : null}
//                   </div>
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NameOfCourseToEnroll;
