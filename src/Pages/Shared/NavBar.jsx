import { useTheme } from "../../Hooks/useTheme.jsx";
import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
import resumePDF from "../../../public/Atik_Sahariyar.resume.pdf";
import { Link } from "react-scroll";
import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState("home");
  const { darkMode, toggleTheme } = useTheme();

  console.log(active);
  const handleDownload = () => {
    fetch(resumePDF)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Atik_Sahariyar.resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading the file: ", error);
      });
  };

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <div
      className={`${
        darkMode
          ? "navbar bg-gray-900 text-white"
          : "navbar bg-white text-gray-900"
      }
          sticky top-0 z-50 `}
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
            className={`menu menu-sm dropdown-content mt-3 z-[1] flex gap-2  p-2 shadow bg-base-100 rounded-box w-52 ${
              darkMode ? " bg-gray-800" : ""
            }`}
          >
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link
                  to={nav.id}
                  activeClass="text-gray-300"
                  smooth={true}
                  spy={true}
                  duration={100}
                  className={` hover:text-gray-300 text-[18px] font-medium cursor-pointer ${
                    darkMode ? " text-white" : "text-gray-900"
                  } `}
                  onClick={() => setActive(nav.id)}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl md:text-3xl font-bold">
          Atik Sahariyar
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                to={nav.id}
                activeClass="text-white"
                smooth={true}
                spy={true}
                duration={100}
                className={` hover:text-white text-[18px] font-medium cursor-pointer ${
                  darkMode ? " text-gray-200" : "text-gray-900"
                } `}
                onClick={() => setActive(nav.id)}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={handleDownload}
          className={` text-white  hidden md:block btn btn-sm mx-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800`}
        >
          {" "}
          <span className=" flex gap-2 ">
            <FaDownload></FaDownload> Resume
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className={`btn btn-sm   ${
            darkMode ? "bg-gray-700 text-white border-blue-500" : ""
          }`}
        >
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
