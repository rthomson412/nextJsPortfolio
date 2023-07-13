import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Express from "../public/assets/skills/xpress.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Node from "../public/assets/skills/node.png";
import Github from "../public/assets/skills/gh6.png";
import Mongo from "../public/assets/skills/mongo.png";
import NextJS from "../public/assets/skills/nextt.png";
import AWS from "../public/assets/skills/aws.png";
import Bash from "../public/assets/skills/bashh.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl tracking-widest text-[#bc986a]">
          Technical Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h7>JavaScript</h7>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Bash} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bash</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={AWS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>AWS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Express} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300 mix-blend-plus-lighter hover:mix-blend-screen">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
