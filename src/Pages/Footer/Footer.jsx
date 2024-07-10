import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../Hooks/useTheme";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}  mt-8 py-6`}
    >
      <div className="container mx-auto text-center">
       
        <div className="mt-4 flex justify-center">
          <a
            href="https://github.com/Atik-Sahariyar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white mx-3 transition duration-300"
          >
            <span className=" flex gap-2">
              <FaGithub size={24} />
              Github
            </span>{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/atik-sahariyar-a93500234/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white mx-3 transition duration-300"
          >
            <span className=" flex gap-2 my-5">
              <FaLinkedin size={24} />
              LinkedIn
            </span>{" "}
          </a>
          <a
            href="https://www.facebook.com/md.atiksahariyar?mibextid=9R9pXO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white mx-3 transition duration-300"
          >
            <span className=" flex gap-2">
              <FaFacebook size={24} />
              Facebook
            </span>{" "}
          </a>
          {/* Add more social links if needed */}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Atik Sahariyar. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
