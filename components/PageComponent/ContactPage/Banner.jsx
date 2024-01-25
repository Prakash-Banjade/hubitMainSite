import React from "react";

const Banner = () => {
  return (
    <>
      <div className=" text-center bg-main">
        <div className='bg-[url("https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581__480.jpg")] h-96   bg-cover bg-center p-20 opacity-70  '>
          <h1 className="text-5xl font-bold text-white ">Contact Us </h1>
          <br />

          <p className="text-4xl  ">
            You can contact us if you have any query
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
