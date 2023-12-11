import { Link } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa";

function NavBar() {
  const { darkMode, toggleTheme } = useTheme();

  const navLinks = (
    <>
      <Link to="/">
        <li className=" mx-2 text-xl">Home</li>
      </Link>

      <a href="#about" className="mx-2 text-xl">
        
      </a>
      <a href="#skills" className="mx-2 text-xl">
        Skills
      </a>
      <a href="#projects" className="mx-2 text-xl">
        Projects
      </a>
      <a href="#contact" className="mx-2 text-xl">
        Contact
      </a>
      <button className=" block md:hidden btn btn-sm mx-3">
        {" "}
        <FaDownload></FaDownload> Resume
      </button>
    </>
  );

  return (
    <div
      className={
        darkMode
          ? "navbar bg-gray-900 text-white"
          : "navbar bg-white text-gray-900"
      }
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] flex gap-2  p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-3xl font-bold">
          Atik Sahariyar
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        <button className=" hidden text-white md:block btn btn-sm mx-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800">
          {" "}
          <span className=" flex gap-2 ">
            <FaDownload></FaDownload> Resume
          </span>
        </button>
        <button onClick={toggleTheme} className="  btn btn-sm ">
          {" "}
          {darkMode ? (
            <FaSun className=" text-xl" />
          ) : (
            <FaMoon className=" text-xl" />
          )}{" "}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
