import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import Layout from "../../HOC/Layout/Layout";
import Image from "next/image";
import * as Yup from "yup";
import { ADToBS } from "bikram-sambat-js"
import { useRouter } from 'next/router'


// import { BiVial } from "react-icons/bi";
// import RulesAndRegulations from "../../components/PageComponent/RulesAndRegulations/RulesAndRegulations";
//import NameOfCourseToEnroll from "../../components/PageComponent/NameOfCourseToEnroll/NameOfCourseToEnroll";
import axios from "../../components/UI/Axios/Axios";
import { format } from "date-fns";
function AdmissionForm({ }) {
  const router = useRouter()
  const [course, setCourse] = useState([]);
  const [clickedCheckBox, setClickedCheckBox] = useState(false);
  const getCourse = () => {
    try {
      axios
        .get(`/courses`)
        .then((res) => {
          setCourse(res?.data?.result);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);
  let courseName = [];
  {
    course.map((val, i) => {
      courseName.push({ id: val.id, title: val.title });
      return <div key={i}>{val.title}</div>;
    });
  }

  const admissionForm = [
    {
      label: "full name:",
      name: "name",
      type: "text",
      apikey: "fullname",
      placeholder: " Enter your full name",
    },
    {
      label: "address:",
      name: "address",
      type: "text",
      apikey: "address",
      placeholder: " Address",
    },

    {
      label: "date of birth:",
      name: "dateOfBirth",
      type: "date",
      apikey: "dob",
    },
    {
      label: "email:",
      name: "email",
      type: "email",
      apikey: "email",
      placeholder: "Email ",
    },

    {
      label: "phone no:",
      name: "phone",
      type: "text",
      apikey: "phNo",
      placeholder: "E.g:9878765432 ",
    },
    {
      label: "gender:",
      name: "gender",
      apikey: "gender",
      as: "select",
      genderOptions: [],
    },
    {
      label: "level of education:",
      apikey: "levelOfEducation",
      as: "radio",
      Gender: [
        {
          label: "slc",
          type: "radio",
          apikey: "levelOfEducation",
          value: "slc",
        },
        {
          label: "+2",
          type: "radio",
          apikey: "levelOfEducation",
          value: "+2",
        },
        {
          label: "bachelor",
          type: "radio",
          apikey: "levelOfEducation",
          value: "Bachelor",
        },
        {
          label: "master",
          type: "radio",
          apikey: "levelOfEducation",
          value: "master",
        },
        {
          label: "vocational",
          type: "radio",
          apikey: "levelOfEducation",
          value: "Vocational",
        },
      ],
    },
    {
      grid: [
        {
          label: "guardians_name:",
          name: "guardianName",
          type: "text",
          apikey: "guardianName",
          placeholder: "Enter your guardian name ",
        },

        {
          label: "guardian_number:",
          name: "guardianNumber",
          type: "text",
          apikey: "guardianNumber",
          placeholder: "Enter your guardian number ",
        },
        {
          label: " name of school/college:",
          name: "collegeOrSchoolName",
          type: "text",
          apikey: "college",
          placeholder: "School/college name ",
        },
      ],
    },
  ];

  const genderOptions = [
    {
      value: "select your gender",
    },
    {
      value: "male",
    },
    {
      value: "female",
    },
    {
      value: "other",
    },
  ];

  const SelectData = [
    {
      as: "select",
      apikey: "courseIds",
      options: [
        {
          id: "0",
          title: "choose any course name",
          //   apikey: "course_names",
        },
        ...courseName,
      ],
    },

    {
      label: "shift(Time):",
      apikey: "shift",
      Shift: [
        {
          label: "Morning",
          type: "radio",
          apikey: "shift",
          value: "morning",
        },
        {
          label: "Mid Day",
          type: "radio",
          apikey: "shift",
          value: "midday",
        },
        {
          label: "Day",
          type: "radio",
          apikey: "shift",
          value: "day",
        },
      ],
    },
  ];

  const FormImage = [
    {
      type: "file",
      apikey: "avatar",
      //   placeholder: "image ",
    },
  ];
  // append code
  // const postFormData = (e) => {
  //   try {
  //   } catch (error) {}
  // };
  // const handleChange = (e) => {
  //   console.log(e.target.files);
  // };

  const AdmissionFormSchema = Yup.object().shape({
    regNo: Yup.string(),
    fullname: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phNo: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    guardianName: Yup.string().optional(),
    guardianNumber: Yup.string().optional(),
    college: Yup.string().required("Required"),
    levelOfEducation: Yup.string().required("Required"),
    courseIds: Yup.string().required("Required"),
    shift: Yup.string().required("Required"),
    avatar: Yup.mixed(),
    payment: Yup.mixed(),
  });
  const Submit = (e, resetForm) => {
    try {
      const formData = new FormData();
      formData.append("fullname", e.fullname);
      formData.append("email", e.email);
      formData.append("phNo", e.phNo);
      formData.append("address", e.address);
      formData.append("dob", e.dob);
      formData.append("gender", e.gender);
      formData.append("guardianName", e.guardianName);
      formData.append("guardianNumber", e.guardianNumber);
      formData.append("college", e.college);
      formData.append("levelOfEducation", e.levelOfEducation);
      formData.append("courseIds", e.courseIds);
      formData.append("shift", e.shift);
      formData.append("shiftTime", null);
      formData.append("avatar", e.avatar);
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'yyyy-MM-dd');
      formData.append("joinDate", formattedDate)
      formData.append("remarks", "")

      axios
        .post("/admission", formData)

        .then((res) => {
          if (res.status === 200) {
            resetForm()
            alert("Data added successfully")
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) { }
  };

  if (router.query.id)
    return (
      <Layout>
        <div className="relative bg-main px-6 py-12">
          {/* <div className=" w-full h-44  bg-main ">
          <Image
            src={bg}
            layout="fill"
            objectfit="cover"
            alt="Loading ..."
            className=" opacity-75 "
          />
        </div> */}
          <div className=" text-white capitalize">
            <h1 className="font-bold  text-3xl"> Student Admission Form</h1>
            <p className="Poppins text-xs w-2/3 font-light mt-2 ">
              Enter your admission information below to enroll to your interested
              IT Course at your comfort, we have made available the Online
              Admission Form below!
            </p>
            <div className="Poppins text-sm mt-2">home/courses</div>
            {/* <button className="px-6 py-2 bg-[#FACC15] Poppins text-black font-medium text-xs mt-2 rounded-lg">View Form</button> */}
          </div>
        </div>
        <div className="px-2">
          <div className="  rounded-t-2xl">
            <div className="flex flex-col w-full justify-center items-center pb-5 pt-16 gap-2">
              <div className=" w-full   Poppins  text-center uppercase text-xl  text-black font-medium">
                {" "}
                student enrollment registration form:
              </div>
              {/* <div className="text-xs Poppins capitalize ">
              <p>
                Fill out the form carefully for registration. All Asterisks (*)
                fields are mandatory to fill-up.
              </p>
            </div> */}
              <div className="flex bg-[#EEEAEA] py-2 px-4 rounded-lg text-xs gap-8 mt-5 Poppins">
                <button>Personel Information</button>
                <button>Payment Option</button>
                <button>Review Details</button>
              </div>
            </div>
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                phNo: "",
                address: "",
                dob: "",
                gender: "",
                guardianName: "",
                guardianNumber: "",
                levelOfEducation: "",
                college: "",
                avatar: "",
                courseIds: router.query.id || "3c975a0f-57cb-464a-823c-f95101d11c4c",
                shift: "",
              }}
              // validationSchema={AdmissionFormSchema}
              onSubmit={(values, { resetForm }) => {
                values = {
                  ...values, dob: ADToBS(values.dob)
                }
                console.log(values);

                //   alert(5);
                Submit(values, resetForm);
                // resetForm();
                // postFormData(values);
              }}
            >
              {({ errors, touched, handleSubmit, values, setFieldValue }) => (
                <div>
                  <Form onSubmit={handleSubmit}>
                    <div className="flex flex-col  px-7 mb-16">
                      <div className={`  flex justify-center  `}>
                        {FormImage.map((val, i) => {
                          let AllImage = val.apikey;
                          return (
                            <div key={i}>
                              <div className=" capitalize font-semibold text-lg text-gray-700">
                                <label
                                  className="cursor-pointer "
                                  htmlFor={val.apikey}
                                >
                                  {val.label}
                                </label>
                              </div>
                              <div className="   ">
                                <label
                                  htmlFor={val.apikey}
                                  className={`cursor-pointer`}
                                >
                                  <Image
                                    objectFit="cover"
                                    objectPosition={"top"}
                                    src={
                                      values[val.apikey]
                                        ? URL.createObjectURL(values[AllImage])
                                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeH9llEv5AAEqHYkOwwIjcJa0VFPVERRUuw&usqp=CAU"
                                    }
                                    alt="Loading ..."
                                    layout="responsive"
                                    height={100}
                                    width={100}
                                    className="m-auto h-60 laptop:h-80 rounded-lg "
                                  //onChange={handleChange}
                                  />
                                </label>
                              </div>
                              <div className="">
                                {" "}
                                <label
                                  htmlFor={val.apikey}
                                  className="px-4   capitalize cursor-pointer  border-none outline-none   text-black font-medium "
                                >
                                  choose your profile
                                </label>
                              </div>
                              <div className="hidden">
                                <input
                                  name={val.apikey}
                                  id={val.apikey}
                                  type={val.type}
                                  accept={val.accept}
                                  onChange={(e) => {
                                    let file = e.target.files[0];
                                    console.log(file, AllImage);
                                    setFieldValue(AllImage, e.target.files[0]);
                                  }}
                                />
                              </div>
                              <div
                                className={`${errors[val.apikey] && touched[val.apikey]
                                  ? "bg-red-100 my-2"
                                  : ""
                                  } text-red-400 py-1 px-2 text-xs rounded-lg text-center font-medium`}
                              >
                                {errors[val.apikey] && touched[val.apikey]
                                  ? errors[val.apikey]
                                  : ""}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="grid grid-cols-2 gap-6 col-start-3  px-40 mt-5 ">
                        {admissionForm.map((val, i) => {
                          if (val.as === "select") {
                            return (
                              <div key={i}>
                                <div

                                  className="flex col-span-5 flex-col  h-14  gap-3  "
                                >
                                  <div className="  px-2  capitalize Poppins text-sm  w-fit flex  items-center">
                                    {val.label}
                                  </div>
                                  <div>
                                    <div>
                                      <div className=" flex   px-1 h-full items-center justify-center ">
                                        <Field
                                          as={val.as}
                                          value={val.value}
                                          name={val.apikey}
                                          className=" w-full bg-[#EEEAEA] rounded-lg     px-4 py-3  "
                                        >
                                          {genderOptions?.map((val, i) => {
                                            return (
                                              <option
                                                key={i}
                                                value={val.value}
                                                className="w-full p-2  bg-slate-200 text-slate-600"
                                              >
                                                {val?.value}
                                              </option>
                                            );
                                          })}
                                        </Field>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className={`text-red-400  ${errors[val.apikey] && touched[val.apikey]
                                    ? " my-5  bg-red-100"
                                    : ""
                                    }  px-1 py-1 text-xs text-center rounded-lg font-medium`}
                                >
                                  {errors[val.apikey] && touched[val.apikey]
                                    ? errors[val.apikey]
                                    : ""}
                                </div>
                              </div>
                            );
                          }

                          if (val.Gender) {
                            return (
                              <div key={i}>
                                <div className="flex col-span-5 flex-col  h-14  gap-3  ">
                                  <div className="  px-2  capitalize Poppins text-sm  w-fit flex  items-center">
                                    {val.label}
                                  </div>
                                  <div className="flex  gap-5   ">
                                    {val.Gender.map((val, i) => {
                                      return (
                                        <div key={i} className=" ">
                                          <div className=" flex   px-1 h-full items-center justify-center ">
                                            <div className="w-full ">
                                              <Field
                                                type={val.type}
                                                value={val.value}
                                                name={val.apikey}
                                                className=" w-full  checked:bg-main   px-4 py-3  "
                                              />
                                            </div>
                                            <div className="w-fit ml-2 ">
                                              <div className="  capitalize w-fit Poppins text-sm text-gray-500 flex justify-center  items-center">
                                                <label>{val.label}</label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                                <div
                                  className={`text-red-400 ${errors[val.apikey] && touched[val.apikey]
                                    ? " bg-red-100 my-2"
                                    : ""
                                    }  px-1.5 py-1 text-center rounded-lg text-xs font-medium`}
                                >
                                  {errors[val.apikey] && touched[val.apikey]
                                    ? errors[val.apikey]
                                    : ""}
                                </div>
                              </div>
                            );
                          } else {
                            if (val.grid) {
                              return val.grid.map((val, i) => {
                                return (
                                  <div key={i} className="b  w-full">
                                    <div className="flex flex-col gap-3  ">
                                      <div className="w-fit">
                                        <div className="  px-2 h-full capitalize text-sm Poppins w-fit flex  items-center">
                                          <label>{val.label}</label>
                                        </div>{" "}
                                      </div>
                                      <div className="w-full">
                                        <Field
                                          type={val.type}
                                          placeholder={val.placeholder}
                                          name={val.apikey}
                                          className=" w-full bg-[#EEEAEA] rounded-lg   px-4 py-3  "
                                        />
                                      </div>
                                    </div>
                                    <div
                                      className={`text-red-400  ${errors[val.apikey] && touched[val.apikey]
                                        ? " bg-red-100 my-2"
                                        : ""
                                        }  px-2 py-1 text-xs text-center rounded-lg font-medium`}
                                    >
                                      {errors[val.apikey] && touched[val.apikey]
                                        ? errors[val.apikey]
                                        : ""}
                                    </div>
                                  </div>
                                );
                              });
                            } else {
                              return (

                                <div key={i} className=" ">
                                  <div className="flex flex-col gap-3 ">
                                    <div className="w-fit">
                                      <div className="  px-2 h-full capitalize text-sm Poppins  w-fit flex  items-center">
                                        <label>{val.label}</label>
                                      </div>{" "}
                                    </div>
                                    <div className="w-full">
                                      <Field
                                        type={val.type}
                                        placeholder={val.placeholder}
                                        name={val.apikey}
                                        className=" w-full bg-[#EEEAEA] rounded-lg  px-4 py-3  "
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className={`text-red-400  ${errors[val.apikey] && touched[val.apikey]
                                      ? " my-2  bg-red-100"
                                      : ""
                                      }  px-2 py-1 text-xs  text-center rounded-lg font-medium`}
                                  >
                                    {errors[val.apikey] && touched[val.apikey]
                                      ? errors[val.apikey]
                                      : ""}
                                  </div>
                                </div>
                              );
                            }
                          }
                        })}

                        {/* for images or document */}
                      </div>
                      <div className="">
                        <div className=" mt-10 mb-7 px-40">
                          <div className="  ">
                            <div className="grid grid-cols-2 gap-6 justify-between  ">
                              {SelectData.map((val, i) => {
                                if (val.Shift) {
                                  return (
                                    <div key={i} className="">
                                      <div className="">
                                        <div className="">{val.label}</div>
                                        <div className=" flex gap-4 items-center">
                                          {val.Shift.map((val, i) => {
                                            return (
                                              <div
                                                className="flex gap-2 "
                                                key={i}
                                              >
                                                <div className="capitalize text-sm Poppins text-gray-500">
                                                  {val.label}
                                                </div>
                                                <Field
                                                  type={val.type}
                                                  value={val.value}
                                                  name={val.apikey}
                                                  className="w-4 bg-red-700"
                                                />
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>

                                      <div
                                        className={`text-red-400  ${errors[val.apikey] &&
                                          touched[val.apikey]
                                          ? " my-2  bg-red-100"
                                          : ""
                                          }  px-1 py-1 text-xs font-medium`}
                                      >
                                        {errors[val.apikey] &&
                                          touched[val.apikey] ? (
                                          <div>{errors[val.apikey]}</div>
                                        ) : null}
                                      </div>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={i} className="">
                                      <Field
                                        as={"select"}
                                        name={val.apikey}
                                        className=" w-full bg-[#EEEAEA] Poppins text-sm  capitalize px-4 py-3
                                                     rounded-md outline-none border-none"
                                      >
                                        {val?.options?.map((val, i) => {

                                          return (
                                            <option key={i} value={val.id}>
                                              {val?.title}
                                            </option>
                                          );
                                        })}
                                      </Field>

                                      <div
                                        className={`text-red-400  ${errors[val.apikey] &&
                                          touched[val.apikey]
                                          ? " my-2  bg-red-100"
                                          : ""
                                          }  px-2 py-1 text-xs font-medium`}
                                      >
                                        {errors[val.apikey] &&
                                          touched[val.apikey] ? (
                                          <div>{errors[val.apikey]}</div>
                                        ) : null}
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between ">
                          <div className=" items-center Poppins mb-5 px-44   text-gray-600 mt-5">
                            <div className="flex gap-3 items-center">
                              <input
                                type="checkbox"
                                className="w-4 h-4 "
                                onClick={() =>
                                  setClickedCheckBox(!clickedCheckBox)
                                }
                              />
                              <div className="text-xs Poppins font-regular capitalize">
                                I agree to the
                                <button className="text-main capitalize mx-1">
                                  {" "}
                                  terms and conditions
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="mr-7 px-7">
                            <button
                              type="submit"
                              className={`px-5 py-2 capitalize bg-main text-white w-fit 
                        
                      ${clickedCheckBox
                                  ? "opacity-100 cursor-pointer transition-all hover:scale-105 ease-in-out duration-300 "
                                  : " opacity-50 cursor-not-allowed"
                                } rounded-md
                     `}
                              disabled={clickedCheckBox ? "" : "disabled "}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </Layout>
    );
  else return null
}

export default AdmissionForm;
