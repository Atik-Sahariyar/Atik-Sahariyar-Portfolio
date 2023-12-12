import { useTheme } from "../../Hooks/useTheme";
import profilePicture from "../../assets/Atik.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { darkMode } = useTheme();
  return (
    <div className=" my-8">
      <h2 className=" text-center text-4xl font-bold">About Me</h2>

      <div className=" flex flex-col md:flex-row items-center justify-center">
        <div className="p-8 md:flex-1 text-center md:text-start">
          <span className="flex justify-center md:justify-start">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 border border-blue-500 rounded-tl-2xl rounded-br-2xl mb-4"
            />
          </span>
          <h2 className="text-2xl font-bold mb-2">Atik Sahariyar</h2>
          <p className={darkMode ? "text-gray-200" : "text-gray-600"}>
            Web Developer
          </p>
          <p
            className={
              darkMode
                ? "mt-4 text-lg text-gray-300"
                : "mt-4 text-lg text-gray-700"
            }
          >
            {`I'm a passionate web developer with a focus on front-end technologies. I love creating beautiful and user-friendly interfaces using modern frameworks.`}
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-6  md:flex-1 items-center justify-center md:justify-start gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/Atik-Sahariyar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
           <span className=" flex gap-2">
           <FaGithub size={24} />
            Github
           </span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/atik-sahariyar-a93500234/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
          <span className=" flex gap-2 my-5">
          <FaLinkedin size={24} />
            LinkedIn
          </span>
          </a>
          {/* facebook */}
          <a
            href="https://www.facebook.com/md.atiksahariyar?mibextid=9R9pXO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            <span className=" flex gap-2">
             
              <FaFacebook size={24} />
              Facebook
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
