import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";

import axios from "../../UI/Axios/Axios"
const Body = () => {
  const contact = [
    {
      title: "Call us",
      text: "071-532805,9827494116,9857045414",
      icon: (
        <BsFillTelephoneFill className="text-white w-10 h-10 bg-main rounded-[50%] p-1" />
      ),
    },
    {
      title: "Find us",
      text: "Butwal-09 (Ganesh Path), Milanchowk,Rupandehi Nepal",
      icon: (
        <GoLocation className="text-white w-10 h-10 bg-main rounded-[50%] p-1" />
      ),
    },
    {
      title: "Mail us",
      text: "info@hubit.com.np",
      icon: (
        <FiMail className="text-white w-10 h-10 bg-main rounded-[50%] p-1" />
      ),
    },
    {
      title: "Available time",
      text: "Sun-Fri, 6:00 am - 7:00 pm",
      icon: (
        <BiTime className="text-white w-10 h-10 bg-main rounded-[50%] p-1" />
      ),
    },
  ];

  return (
    <>
      <section className="bg-gray-100  ">
        <div className=" px-5 py-24 mx-auto flex xs:flex-col sm:flex-col  gap-36 md:gap-24 items-center">
          <div className="sm:w-full xs:w-full lg:w-[40vw] md:w-[30vw] xl:w-[40vw] xxl:w-[40vw] rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col items-center justify-center  md:mr-10">
            {contact.map((item, i) => {
              const { title, text, icon } = item;
              return (
                <div
                  className="flex gap-8 bg-white rounded-lg w-[25vw] h-[15vh] mx-10 my-5 p-4 items-center sm:w-full xs:w-full  "
                  key={i}
                >
                  {icon}
                  <div className="flex-col ">
                    <p>{title}</p>
                    <p>{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
              type: "contact"
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                const respose = await axios.post("/enquiry", values)
                if (respose.status === 200) {
                  resetForm()

                  alert("Message sent")
                }
              }
              catch (error) {
                console.log(error)
              }
            }}
          >
            <Form className="lg:w-1/2 md:w-1/2 xs:ml-10 sm:ml-10 md:ml-10 bg-white h-[80vh] flex flex-col  w-[40vw] sm:w-full xs:w-full md:py-8 mt-8 md:mt-0 border-2 border-gray-400 border-solid rounded-xl p-10 mr-10"
            >
              <h2 className="text-main text-lg mb-1 font-bold">Message Us </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                You can directly contact us by filling this form also
              </p>
              <div className="relative mb-4">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                  placeholder="Full Name"
                />
              </div>
              <div className="relative mb-4">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  required

                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Email Address"
                />
              </div>
              <div className="relative mb-4">
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  required

                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Phone"
                />
              </div>
              <div className="relative mb-4">
                <Field as="textarea"
                  id="message"
                  name="message"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Write a Message"
                />
              </div>
              <button
                className="text-white 
            w-48  bg-main border-0 py-2 px-6 focus:outline-none hover:bg-hoverMain rounded-[100px] text-lg sm:w-44 xs:w-44 "
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Body;
