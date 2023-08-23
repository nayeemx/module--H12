import Link from "next/link";
import React from "react";

const hedars = () => {
  return (
    <div
      className="bg-slate-400 md:w-12/12 h-16 shadow-md flex justify-center
     items-center flex-col md:flex-row rounded md:m-3"
    >
      <div className=" flex justify-center items-center ml-3"></div>
      <ul className="flex  justify-center items-center w-full md:w-1/2 lg:w-1/3 mr-0 md:mr-5 md:py-0">
        <Link
          href={"/"}
          className="hover:bg-emerald-600 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer  "
        >
          Home
        </Link>

        <Link
          href={"/blog"}
          className="hover:bg-emerald-600 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer  "
        >
          Blog
        </Link>

        <Link
          href={"/contact"}
          className="hover:bg-emerald-600 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer  "
        >
          Contact
        </Link>
        <Link
          href={"/about"}
          className="hover:bg-emerald-600 px-3 py-1 rounded text-gray-700 hover:text-white font-semibold cursor-pointer  "
        >
          About
        </Link>
      </ul>
    </div>
  );
};

export default hedars;
