import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { MdHighQuality } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="bg-secondColor  flex flex-col justify-center gap-10 items-center py-[7%] lg:flex lg:flex-row">
      <div className="w-[70%] lg:w-[30%] p-5  border-2 rounded-lg  flex flex-col items-center gap-5 text-white">
        <div className="text-8xl border-2 rounded-full border-buttonColor p-1">
          <MdHighQuality className="border-2  rounded-full" />
        </div>
        <div className="text-3xl font-bold text-center">High Quality</div>
        <div className="font-bold px-5 text-center">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design.
        </div>
      </div>
      <div className="w-[70%] lg:w-[30%] p-5  border-2  rounded-lg flex flex-col items-center gap-5 text-white">
        <div className="text-8xl border-2 rounded-full border-buttonColor p-1">
          <HiLightBulb className="border-2  rounded-full text-buttonColor" />
        </div>
        <div className="text-3xl font-bold text-center">Awesome Ideas</div>
        <div className="font-bold px-5 text-center">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design.
        </div>
      </div>
      <div className="w-[70%] lg:w-[30%] p-5  border-2  rounded-lg flex flex-col items-center gap-5 text-white">
        <div className="text-8xl border-2 rounded-full border-buttonColor p-1">
          <VscWorkspaceTrusted className="border-2  rounded-full text-blue-600" />
        </div>
        <div className="text-3xl font-bold text-center">Reliability</div>
        <div className="font-bold px-5 text-center">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design.
        </div>
      </div>
    </div>
  );
};

export default Skills;
