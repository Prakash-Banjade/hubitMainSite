import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
export const schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  email: yup.string().email().required("email is Required"),
  phone: yup.number().required("phone is Required"),
  course: yup.string().required("Course is Required"),
  // date: yup.time().required("Tell me your time"),
  location: yup.string(),
  message: yup.string().required("Tell me your time"),
});
const EnquiryForm = () => {
  const formFields = [
    // {
    //   label: "Username:",
    //   type: "text",
    //   key: "username",
    // },
    {
      label: "Email:",
      type: "email",
      key: "email",
    },
    {
      label: "Phone No. :",
      type: "number",
      key: "phone",
    },
    // {
    //   label: "Course:",
    //   type: "text",
    //   key: "course",
    // },
    // {
    //   label: "Date and Time:",
    //   type: "time",
    //   key: "datetime",
    // },
    {
      label: "Location:",
      type: "text",
      key: "location",
    },
    {
      label: "Message:",
      type: "text",
      key: "message",
    },
  ];
  return (
    <div className="shadow shadow-gray-300 my-8 p-4">
      <h1 className="text-pink-600 text-lg text-left mb-10">Enquiry Form</h1>
      <Formik
        initialValues={{
          email: "",
          phone: "",
          location: "",
          message: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values)
        }}
      />
      {({ errors, touched, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit}>
            {formFields?.map((val, i) => {
              return (
                <div key={i} className="flex flex-col text-left mt-4">
                  <label className="text-md mb-2">{val.label}</label>
                  <Field
                    type={val.type}
                    name={val.key}
                    className="border rounded-sm bg-stone-200 outline-none h-8"
                  />
                  <ErrorMessage
                    name={val.key}
                    component={"div"}
                    className="text-red-500"
                  />
                </div>
              );
            })}
            <button
              type="button"
              className="w-full hover:shadow-xl hover:shadow-pink-200 hover:opacity-80 transition-all duration-300 ease-in-out mt-4 py-2 bg-main text-white Poppins cursor-pointer "
            >
              Sign In
            </button>
          </Form>
        );
      }}

    </div>
  );
};

export default EnquiryForm;
