import React from "react";
import Head from "next/head"
const MidSectionNav = () => {
  return (
    <>
      <Head>
        <title>Notice - Hub It</title>
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">All</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">General</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Administrative
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">classNamees</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Places</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Training</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MidSectionNav;
