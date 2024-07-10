import { useTheme } from "../../Hooks/useTheme";
import profilePicture from "../../assets/Atik.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { darkMode } = useTheme();
  return (
    <div id ="about" className=" my-5">
      <h2 className=" text-center text-4xl font-bold">About Me</h2>

      <div className=" flex flex-col md:flex-row items-center justify-center">
        <div className="p-8 md:flex-1 text-center md:text-start">
          <span className="flex justify-center md:justify-start">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-64 h-64 md:w-48 md:h-48 border border-blue-500 rounded-tl-2xl rounded-br-2xl mb-4"
            />
          </span>
          <h2 className="text-2xl font-bold mb-2">Atik Sahariyar</h2>
          <p className={darkMode ? "text-gray-200" : "text-gray-600"}>
           Jr. Web Developer
          </p>
         
        </div>
          
        {/* Social Links */}
        <div className=" md:flex-1  justify-center md:justify-start gap-4">
        <p
            className={
            `${  darkMode
              ? "mt-4 text-lg text-gray-300"
              : "mt-4 text-lg text-gray-700"} mb-5`
            }
          >
            {`Hi, I'm Atik Sahariyar, a Jr. Web Developer from Dhaka, Bangladesh. I specialize in JavaScript, React.js, and Node.js. With a focus on creating seamless digital experiences, I've contributed to many projects. Currently pursuing BSC in Computer Science and Engineering, I'm passionate about continual learning. Let's connect for exciting opportunities!`}
          </p>
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





