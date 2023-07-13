import Image from "next/image";
import React from "react";
import blogImg from "../public/assets/projects/blog2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[100vh] relative">
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-black/75 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={blogImg}
          alt="/"
        />
        <div className="absolute top-[60%] max-w-3xl w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Ross&#39;s Tech Blog</h2>
          <h3>Vanilla Javascript / CSS / Render</h3>
          {/* <h2>Overview</h2> */}
          <h3 className="py-8">
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
          </h3>
          <a
            href="https://github.com/rthomson412/RossBlog"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 opacity-80 text-black">Code</button>
          </a>
          <a
            href="https://rosscraigblog.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 opacity-80 text-black">Demo</button>
          </a>
        <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-8 py-8 z-11">
        <div className="col-span-4">
          
        </div>
        
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default property;

{/* <div className="col-span-4 md:col-span-1 shadow-xl shadow-orange-100 rounded-xl py-4"> */}
          {/* <div className="p-2 ">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express Router
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pure CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Render
              </p>
            </div>
          </div> */}
        {/* </div> */}
