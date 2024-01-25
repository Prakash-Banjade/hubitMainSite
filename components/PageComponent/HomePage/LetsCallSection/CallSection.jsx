import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { IoPerson } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { toast, ToastContainer, toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Required!!!"),
  phone: yup
    .string()
    .min(10, "too short!!")
    .max(10, "too long!!")
    .required("Required!!"),
});
function CallSection() {
//   const FormFields=[{
//     name: "name",
//     type: "Text",
//     icon: <IoPerson/>,
//     placeholder: "fullname",
//   },
// {
//   name: "phone",
//   type: "Text",
//   icon: <BsTelephoneFill />,
//   placeholder: "phone no.",
// },]
  const postData = (val, resetForm) => {
    resetForm();
    toast.success("submitted successfully");
    try {
      axios.post("https://hubitbackend.onrender.com/quickcall", val);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full bg-[#EEEAEA] mt-7 lg:mt-14 xl:mt-14 xxl:mt-14 py-8 px-20  lg:py-24 xl:py-24 xxl:py-24 ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2">
          <div className="text-center items-center capitalize    ">
            <h2 className="h-fit  text-xl  xl:text-2xl xxl:text-2xl font-bold Poppins">
              {" "}
              let us give you a <span className="text-main">quick call</span>!
            </h2>
            <p className=" h-fit text-sm xl:text-sm xxl:text-base text-center font-normal text-gray-600">
              leave us your contact number so our administratives can contact
              you as soon as possible.
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              phone: "",
            }}
            validationSchema={schema}
            onSubmit={(val, { resetForm }) => {
              console.log(val);
              postData(val, resetForm);
              //toast.success("submitted successfully!!");
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="w-full  flex flex-col items-center ">
                  <div className=" grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xxl:grid-cols-2 mx-10 ">
                    <div className="flex flex-col  relative ">
                      <IoPerson className="text-xl absolute top-3 left-4 text-gray-400" />
                      <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full border-none py-2 px-5 rounded-2xl text-center"
                      />
                      <ErrorMessage
                        name="name"
                        component={"div"}
                        className="text-xs text-red-500"
                      />
                    </div>
                    <div className=" flex flex-col relative">
                      <IoIosCall className="text-xl absolute top-3 left-4 text-gray-400" />
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border-none py-2 px-5 rounded-2xl text-center"
                      />
                      <ErrorMessage
                        name="phone"
                        component={"div"}
                        className="text-xs text-red-500"
                      />
                    </div>
                  </div>
                  <div className=" md:mx-[14rem] lg:mx-[14rem] xl:mx-[14rem] xxl:mx-[14rem]    ">
                    <ToastContainer />
                    <button type="submit" className="bg-main text-white font-bold text-base rounded-3xl px-10 py-2  mt-5 w-fit ">
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
            {/* {({handlesubmit})=>{
              <Form>
                {FormFields.map((val,i)=>{
                  return (
                    <div key={i}>
                      <Field 
                      name={val.name}
                      type={val.type}
                      icon={val.icon}
                      placeholder={val.placeholder}
                      />
                    </div>
                  )
                })};
               
              </Form>
            }}; */}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default CallSection;
