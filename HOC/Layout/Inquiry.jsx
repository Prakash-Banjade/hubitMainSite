import React, { useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "../../components/UI/Axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
//import CourseOption from "./CourseOption";

const schema = yup.object().shape({
  name: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("not a valid email address")
    .required("email is required"),
  phone: yup
    .string()
    .required("contact number is required")
    .max(10, "invalid number"),
  message: yup.string().required("type your message"),
});

function Inquiry() {
  const [Show, setShow] = useState(false);

  const FormFields = [
    {
      position: "center",
      icon: <FaUser />,
      name: "name",
      type: "text",
    },
    {
      position: "center",
      icon: <MdEmail />,
      name: "email",
      type: "email",
    },
    {
      position: "center",
      icon: <MdCall />,
      name: "phone",
      type: "text",
    },
    // {
    //   name: "course",
    //   as: "select",
    //   option: [],
    // },
    {
      pad: "10px",
      icon: <BsChatSquareTextFill />,
      name: "message",
      as: "textarea",
    },
  ];

  // post data
  const postData = (val, resetForm) => {
    //  test
    try {
      axios
        .post("/enquiry", val)
        .then((res) => {
          if (res.status == 200) {
            resetForm()
            toast.success("submitted successfully");
          }
        })
        .catch((err) => {
          toast.error(err?.message || "Something went wrong")
        });
    } catch (error) { }
  };


  // useEffect(() => {
  //   FormFields[3].option = course;
  // }, [course]);
  // let data = [
  //   {
  //     _id: "0",
  //     title: "select course name",
  //   },
  // ];

  // FormFields[3].option.push(...data, ...course);

  return (
    <>
      <div>
        <ToastContainer />
        {/* send us inquiry button */}
        <div>
          <button
            onClick={() => setShow(true)}
            className="capitalize bg-main shadow-md shadow-gray-400 text-white fixed top-32 bottom-50 right-8 border-none rounded-full py-2 px-4"
          >
            send us inquiry
          </button>
        </div>
        {/* form body */}
        <div
          className={`border-none rounded-lg fixed top-32 bottom-48 right-0 w-72 h-fit bg-white  shadow-[0_35px_60px_-15px_rgba(0.5,0,0,0.5)] text-center py-5 Poppins  cursor-pointer ${Show
            ? "transition-all duration-500 delay-100 "
            : "ease-in-out duration-500 delay-100 -mr-96"
            }`}
        >
          <div className="flex justify-between px-5">
            <p className="capitalize text-center text-main text-2xl font-medium pb-2 Poppins">
              get in touch
            </p>
            <RiCloseFill
              onClick={() => setShow(false)}
              className="text-2xl text-white border-none rounded-full bg-gray-800 -mt-7 -mr-5"
            />
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
              type: "enquiry"
            }}
            validationSchema={schema}
            onSubmit={(val, { resetForm }) => {
              postData(val, resetForm);
            }}
          >
            {({ handleSubmit, values }) => {
              return (
                <Form

                  className="px-5 flex flex-col  "
                >
                  {FormFields.map((val, i) => {

                    return (
                      <div key={i} className="flex flex-col py-2  ">
                        <ErrorMessage
                          name={val.name}
                          component={"div"}
                          className="text-red-700 poppins text-[10px] w-full text-left capitalize"
                        />
                        <div
                          className="w-full h-fit text-gray-600  rounded-md bg-gray-200  pl-3  "
                          style={{
                            display: "flex",
                            alignItems: val.position,
                          }}
                        >
                          <div style={{ paddingTop: val.pad }}>
                            {val.icon}
                          </div>
                          <Field
                            as={val.as}
                            type={val.type}
                            placeholder={`Enter your ${val.name}`}
                            name={val.name}
                            className=" outline-none  border-b text-xs bg-transparent  py-2 px-3 "
                          />

                        </div>
                      </div>
                    );

                  })}

                  <button
                    type="submit"
                    className="w-full h-fit px-5 py-2 mt-5
                    bg-main text-white text-[14px] border-none rounded-full capitalize"
                  >
                    send request
                  </button>
                  {/* <div className="fixed top-[20%] z-20"> */}
                  {/* </div> */}
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Inquiry;
