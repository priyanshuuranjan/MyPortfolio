import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <div className="mx-2 w-10 text-xl">Priyanshu</div>
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open mt-7"/>

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close mt-7"
        />
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
      <div className="m-8 flex item-center justify-center gap-5 text-2xl ">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
