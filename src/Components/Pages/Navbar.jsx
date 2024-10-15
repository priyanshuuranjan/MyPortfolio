import { SiLeetcode } from "react-icons/si";
import "./Navbar.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="mx-2 w-10 text-2xl">Priyanshu</div>
      </div>

      <div className="m-5 flex item-center justify-center gap-5 text-2xl">
        <a
          href="https://www.linkedin.com/in/priyanshuranjan45/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/priyanshuuranjan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/priyanshu_45/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
