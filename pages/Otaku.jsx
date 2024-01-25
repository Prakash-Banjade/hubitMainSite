import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toas, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import Logo from "../public/images/hubitLogo1.svg";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  address: yup.string().required("Address is required"),
  contact: yup.string().required("Contact is required"),
});
function Otaku() {
  const [Active, setActive] = useState(0);
  const [Vote, setVote] = useState("");

  const Cosplay = [
    {
      id: "amanrai",
      name: "Aman Rai",
      link: "https://i.gifer.com/79dh.gif",
    },
    {
      id: "rushalshrestha",
      name: "Rushal Shrestha",
      link: "https://i.gifer.com/31Kl.gif",
    },
    {
      id: "bishantmanandhar",
      name: "Bishant Manandhar",
      link: "https://i.gifer.com/7AW.gif",
    },
    {
      id: "apilrai",
      name: "Apil Rai",
      link: "https://i.gifer.com/IP7w.gif",
    },
    {
      id: "abiskarrai",
      name: "Abiskar Rai",
      link: "https://i.gifer.com/5IUl.gif",
    },
    {
      id: "Nischal",
      name: "Nischal",
      link: "https://i.gifer.com/Gzgk.gif",
    },
    {
      id: "aldeep",
      name: "Aldeep",
      link: "https://i.gifer.com/AEWu.gif",
    },
    {
      id: "xitiz",
      name: "Xitiz",
      link: "https://i.gifer.com/TR28.gif",
    },
    {
      id: "yangjee",
      name: "Yangjee",
      link: "https://i.gifer.com/4NnH.gif",
    },
    {
      id: "anshu",
      name: "Anshu",
      link: "https://i.gifer.com/BsAV.gif",
    },
    {
      id: "anjulipmagar",
      name: "Anjuli p Magar",
      link: "https://i.gifer.com/7tsM.gif",
    },
    {
      id: "sonitmagar",
      name: "Soni T Magar",
      link: "https://i.gifer.com/61Ah.gif",
    },
    {
      id: "muskangurung",
      name: "Muskan Gurung",
      link: "https://i.gifer.com/8WWo.gif",
    },
    {
      id: "jarmitmagar",
      name: "Jarmit Magar",
      link: "https://i.gifer.com/2HNh.gif",
    },
    {
      id: "kiesthapa",
      name: "Kies Thapa",
      link: "https://i.gifer.com/EsMO.gif",
    },
  ];

  const data = [
    {
      id: 0,
      title: "PubG Mobiles",
    },
    {
      id: 1,
      title: "Singing",
    },
    {
      id: 2,
      title: "PubG Mobiles",
    },
    {
      id: 3,
      title: "PubG Mobiles",
    },
    {
      id: 1,
      title: "Singing",
    },
    {
      id: 2,
      title: "PubG Mobiles",
    },
    {
      id: 3,
      title: "PubG Mobiles",
    },
  ];

  let mode;
  const FormData = [
    {
      label: "Name",
      apikey: "name",
      type: "text",
    },
    {
      label: "Email",
      apikey: "email",
      type: "email",
    },
    {
      label: "Address",
      apikey: "address",
      type: "text",
    },
    {
      label: "Contact",
      apikey: "contact",
      type: "text",
    },
  ];
  if (Vote) {
    mode = (
      <div className="bg-black fixed top-0 left-0 right-0 w-screen z-50 h-screen bg-opacity-30 flex items-center justify-center ">
        <div className="w-[400px] h-fit p-4 px-6 bg-white rounded-xl">
          <h3 className="w-full bg-purple-700 text-white py-2 text-center">
            {Vote.name}
          </h3>
          <Formik
            initialValues={{
              name: "",
              email: "",
              address: "",
              contact: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
              values.VoteTo = Vote;
              try {
                axios
                  .post("https://hubitbackendstudentltd.onrender.com/otakuvoters", values)
                  .then((res) => {
                    console.log(res);
                  toast.info('congratulations your vote has been counted');
                  })
                  .catch((err) => {
                    console.log(err.response);
                    toast.error(err.response.data.message);
                  });
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ handleSubmit }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    {FormData.map((val, i) => {
                      return (
                        <div key={i} className="w-full">
                          <label>{val.label}</label>
                          <Field
                            type="text"
                            name={val.apikey}
                            placeholder={val.label}
                            className="w-full py-2 px-2 border outline-none"
                          />
                          <ErrorMessage
                            name={val.apikey}
                            component={"div"}
                            className="text-red-500 text-sm"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex   gap-3 py-5">
                    <button className="bg-green-400 px-6 w-fit py-3 border-0 text-white">
                      Vote Now
                    </button>
                    <button
                      onClick={() => {
                        setVote("");
                      }}
                      className="bg-red-400 px-6 py-3 w-fit border-0 text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ToastContainer />
      <div>
        {mode}
        <div
          style={{
            backgroundImage: `url('https://i.gifer.com/DRU.gif ')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 90%",
          }}
          className="h-96 w-11/12 mx-auto px-10 relative  "
        >
          <div
            style={{
              backgroundImage: `url("https://w0.peakpx.com/wallpaper/610/922/HD-wallpaper-one-piece-monkey-d-luffy-gear-5-one-piece.jpg" )`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="absolute top-7  font-extrabold text-red-700 capitalize bg-white w-24 h-24 flex justify-center items-center  rounded-full left-4 "
          >
            Otaku Jatra
          </div>
          <div className="w-24 h-24   cursor-pointer absolute bottom-7 right-4  ">
            <Image
              src={Logo}
              priority
              layout="fill"
              objectFit="contain"
              quality={100}
              alt="logo"
              className="absolute rounded-full bg-white w-44 flex justify-center items-center "
            />
          </div>
        </div>
      </div>
      <div className="grid  lg:grid-cols-12 xl:grid-cols-12 xxl:grid-cols-12 gap-4 px-6">
        <div
          style={{
            backgroundImage: `url('https://i.gifer.com/Paw.gif')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-screen w-full  lg:col-span-2  xl:col-span-2 xxl:col-span-2 "
        ></div>
        <div className="lg:col-span-8 xl:col-span-8 xxl:col-span-8 pt-10 items-center flex flex-col gap-8">
          <div className="">
            <div className="py-5 text-xl font-semibold ">
              Select and Vote here For Your Cosplay{" "}
            </div>
            {/* <div className='grid grid-cols-6 gap-0 gap-y-6 relative'>
                        {
                            data.map((val, i) => {
                                return <div key={i} onClick={() => setActive(val.id)} className={`border flex items-center justify-center font-semibold border-gray-300 px-6 py-4 ${Active === val.id ? "bg-purple-500 text-white" : 'bg-transparent'}`}>
                                    {val.title}
                                </div>
                            })
                        }


                    </div> */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-6 py-5">
              {Cosplay.map((val, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setVote(val);
                    }}
                    className="h-44 flex items-center justify-center w-48   bg-cover  text-xl font-semibold text-white  "
                    style={{
                      backgroundImage: `url(${val.link})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="bg-red-700 w-32 mx-auto h-fit text-center px-3 py-2 flex items-center justify-center text-white">
                      {val.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* just for show */}
          <div className="">
            <div className="py-5 text-xl font-semibold ">
              Events happening today !! Checkout{" "}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-0 gap-y-6 relative">
              {data.map((val, i) => {
                return (
                  <div
                    key={i}
                    className={`border flex items-center justify-center font-semibold border-gray-300 px-6 py-4 ${
                      Active === val.id
                        ? "bg-purple-500 text-white"
                        : "bg-transparent"
                    }`}
                  >
                    {val.title}
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-6 py-5">
              {data.map((val, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setVote(val.id);
                    }}
                    className="h-44 flex items-center justify-center w-48   bg-cover  text-xl font-semibold text-white  "
                    style={{
                      backgroundImage: `url('https://i.gifer.com/79uF.gif')`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    Pubg Mobiles
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url('https://i.gifer.com/Paw.gif')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-screen w-full lg:col-span-2 xl:col-span-2 xxl:col-span-2   "
        ></div>
      </div>
    </div>
  );
}

export default Otaku;
