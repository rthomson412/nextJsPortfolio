import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Hero from "../public/assets/about.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-2xl tracking-widest text-[#bc986a]">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-min shadow-md shadow-orange-100 rounded-xl p-4 border-t-2 border-orange-200">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-3xl hover:scale-105 ease-in opacity-70 duration-300"
                  src={Hero}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Ross Thomson</h2>
                {/* <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p> */}
              </div>
              <div>
                <p className="pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/ross-thomson-a6081122a/"
                    target="_blank"
                    rel="noreferrer"
                    title="Linkedin Link"
                  >
                    <div className="rounded-full shadow-md shadow-orange-100 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/rthomson412"
                    target="_blank"
                    rel="noreferrer"
                    title="Github Link"
                  >
                    <div className="rounded-full shadow-md shadow-orange-100 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="mailto:rosscraigthomson@outlook.com" 
                  title="Email Link">
                  <div className="rounded-full shadow-md shadow-orange-100 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  </a>
                  <Link href="/resume">
                    <a title="Resume Link">
                      <div className="rounded-full shadow-md shadow-orange-100 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-md shadow-orange-100 rounded-xl lg:p-4 border-t-2 border-orange-200" >
            <div className="p-4 opacity-80">
              <form
                action="https://getform.io/f/e14f8edc-aaa2-4e26-9825-6b09329e94c6"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className=" text-sm">Name</label>
                    <input
                      className="border-1 rounded-lg p-1 flex text-lg text-slate-600 border-orange-100 focus:outline-none"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className=" text-sm">Phone Number</label>
                    <input
                      className="border-1 rounded-lg p-1 flex text-lg text-slate-600 border-orange-100 focus:outline-none"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-sm">Email</label>
                  <input
                    className="border-1 rounded-lg p-1 flex text-lg text-slate-600 border-orange-100 focus:outline-none"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-sm">Subject</label>
                  <input
                    className="border-1 rounded-lg p-1 flex text-lg text-slate-600 border-orange-100 focus:outline-none"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className=" text-sm">Message</label>
                  <textarea
                    className="border-1 rounded-lg p-1 text-lg text-slate-600 border-orange-100 focus:outline-none"
                    rows="3"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="w-3/4 p-3 mt-6 font-bold text-xl">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-orange-100 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#bc986a]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
