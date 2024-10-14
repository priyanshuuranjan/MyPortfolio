import { BiLogoNetlify } from "react-icons/bi";
import { BsFiletypeJson, BsFiletypeXml } from "react-icons/bs";
import cppImage from "../../assets/cpp.png";
import { FiFigma } from "react-icons/fi";
import {
  FaAws,
  FaBootstrap,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaNode,
} from "react-icons/fa";

import {
  RiFirebaseFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRender,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={cppImage} alt="C++ logo" className="h-16 w-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-yellow-700" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-blue-800" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDatabase className="text-7xl text-yellow-700" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-white-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiFirebaseFill className="text-7xl text-yellow-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNode className="text-7xl text-green-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsFiletypeXml className="text-7xl text-cyan-200" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsFiletypeJson className="text-7xl text-slate-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-white-100" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoNetlify className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRender className="text-7xl text-white-200" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-red-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FiFigma className="text-7xl text-red-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
