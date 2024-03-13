import {  FaGithub, FaInternetExplorer } from "react-icons/fa";
import { useTheme } from "../../Hooks/useTheme.jsx";

const Project = () => {
  const { darkMode } = useTheme();

  const projectsList = [
    {
      title: "Boi-Binimoy",
      description:
        "Book exchange & buy-sell platform. This is my team project",
      liveLink: "https://boibinimoy.netlify.app/",
      frontEndCode: "https://github.com/ShahreyarRafi/BoiBinimoy",
      backEndCode: "https://github.com/ShahreyarRafi/BoiBinimoy-Server",
      image: "https://i.ibb.co/2N6vvvS/boibinimoy-netlify-app-3.png",
      technologies: ["Next.js", "Tailwind CSS", "Redux", "Node.js", "Express", "Firebase",  "MongoDB", "Mongoose", "SSLCommerz"], 
    },
    {
      title: "FriendFusion",
      description:
        "A social networking platform built using React and Node.js/Express.",
      liveLink: "https://glossy-anger.surge.sh/",
      frontEndCode: "https://github.com/Atik-Sahariyar/FriendFusion-client",
      backEndCode: "https://github.com/Atik-Sahariyar/FriendFusion-server",
      image: "https://i.ibb.co/9pVVSmP/glossy-anger-surge-sh-1.png",
      technologies: ["React" , "Node.js", "Express", "Firebase", "Tailwind CSS", "MongoDB"], 
    },
    // {
    //   title: "Online Grope Study",
    //   description:
    //     "Interactive React-based study platform for seamless group sessions and resource access.",
    //   liveLink: "https://dist-nine-navy.vercel.app/",
    //   frontEndCode: "https://github.com/Atik-Sahariyar/online-group-study-client-side",
    //   backEndCode: "https://github.com/Atik-Sahariyar/online-group-study-server",
    //   image: "https://i.ibb.co/d4yZfHZ/dist-nine-navy-vercel-app.png",
    //   technologies: ["React" , "Node.js", "Express", "Firebase", "Tailwind CSS", "MongoDB"], 
    // },
    {
      title: " Online Course Management",
      description:
        "React-based platform for courses, offering user-friendly browsing, enrollment, and payments..",
      liveLink: "https://disillusioned-rabbit.surge.sh/",
      frontEndCode: "https://github.com/Atik-Sahariyar/online-course-client",
      backEndCode: "https://github.com/Atik-Sahariyar/online-course-server ",
      image: "https://i.ibb.co/wLZNYrH/disillusioned-rabbit-surge-sh-2.png",
      technologies: ["React" , "Node.js", "Express", "Firebase", "Tailwind CSS" , "Stripe"], 
    },
  ];

  return (
    <div id ="projects"
      className={`  p-8 ${
        darkMode ? "text-white bg-gray-900" :  "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4 text-center"> My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className={` rounded-lg p-6 shadow-md ${
              darkMode ? "text-white bg-gray-700 " : "text-gray-900"
            }`}
          >
            <div
              className="mb-4 rounded-lg"
              style={{ maxHeight: "200px", overflow: "auto" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              
              Technologies: {project.technologies.map((tech, index) => (
                <span
                  key={index}
    
                >
                  {tech},
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 flex items-center gap-1 hover:underline"
              >
                <FaInternetExplorer /> Live Link
              </a>
              <span className=" flex">
                <a
                  href={project.frontEndCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center gap-1 hover:underline mx-2"
                >
                  <FaGithub /> Frontend
                </a>
                <a
                  href={project.backEndCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Backend
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
