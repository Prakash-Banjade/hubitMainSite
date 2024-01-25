import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

function CoursesScheme() {
  const CoursesSchemSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required"),
    phone: yup.string().required("phone is required"),
    site: yup.string().required("site is required"),
  });
  return (
    <div
      className=" grid  lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 bg-gray-200
     py-16 lg:py-20 xl:py-28 xxl:py-28  px-8 lg:px-14 xl:px-14 xxl:px-14"
    >
      <div
        className=" bg-white shadow-xl shadow-gray-400  xl:col-start-1 xl:row-start-1  col-span-1  rounded-lg  w-full  capitalize
        px-8 lg:px-10 xl:px-14 xxl:px-14  py-5 "
      >
        <div
          className="  text-xl md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl Poppins font-bold
        text-gray-600 py-8"
        >
          courses for free
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            site: "",
          }}
          validationSchema={CoursesSchemSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div
                className=" flex flex-col md:grid md:grid-cols-1  lg:grid lg:grid-cols-1  xl:grid xl:grid-cols-1 xxl:grid xxl:grid-cols-1 gap-8
              xxl:gap-8 py-2    w-full mx-auto "
              >
                <div className=" w-full  ">
                  <Field
                    name="name"
                    placeholder="name"
                    className="h-10 rounded-md  px-5 capitalize text-sm  w-full
                      font-normal border"
                  />
                  {/* md:w-11/12 lg:w-11/12 xl:w-11/12  xxl:w-11/12  */}
                  {errors.name && touched.name ? (
                    <div className="text-red-500 text-xs my-2">
                      {errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="w-full  mx-auto">
                  <Field
                    name="email"
                    placeholder="Email"
                    className="border h-10  px-5 w-full capitalize text-xs
                      font-normal rounded-md "
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500 text-xs my-2">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="w-full ">
                  <Field
                    name="phone"
                    placeholder="phone"
                    className="border h-10  px-5 capitalize
                     text-xs  font-normal rounded-md  w-full"
                  />
                  {errors.phone && touched.phone ? (
                    <div className="text-red-500 text-xs my-2">
                      {errors.phone}
                    </div>
                  ) : null}
                </div>
                <div className="w-full  ">
                  <Field
                    name="site"
                    placeholder="site"
                    className="border h-10 px-5 capitalize text-sm w-full
                      font-normal  rounded-md"
                  />
                  {errors.site && touched.site ? (
                    <div className="text-red-500 text-xs my-2">
                      {errors.site}
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                className="
                border-none outline-none
                  mt-5 pb-8"
              >
                <button
                  className=" px-8  hover:shadow-gray-500 hover:shadow-xl transition-all  duration-300 ease-in-out  mx-auto py-2 text-lg text-white
                  rounded-md bg-blue-400 "
                  type="submit"
                >
                  SEND MESSAGE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className="  w-full
       lg:px-8  xl:px-12 xxl:px-12 pb-10  row-start-1 lg:row-start-2 xl:row-start-1 xl:col-start-2   xxl:row-start-1 xxl:col-start-2"
      >
        <div
          className=" xl:pt-8 xxl:pt-8 pb-5  capitalize text-3xl Poppins font-bold
         text-gray-700"
        >
          register now
        </div>
        <div className="text-base text-gray-500 Poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          laborum culpa eos, explicabo placeat nobis commodi assumenda
          temporibus obcaecati soluta, optio provident doloribus iusto impedit
          illo minus hic quas unde.
        </div>
        {/* <div>time</div> */}
      </div>
    </div>
  );
}

export default CoursesScheme;
