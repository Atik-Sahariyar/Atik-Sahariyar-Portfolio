import { useTheme } from '../../Hooks/useTheme';

const Skills = () => {
  const { darkMode } = useTheme();

  const skillsList = [
    { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' },
    { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { name: 'Node.js', badge: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white' },
    { name: 'Express.js', badge: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' },
    { name: 'MongoDB', badge: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
    { name: 'HTML5', badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'CSS3', badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'Tailwind CSS', badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
    { name: 'Firebase', badge: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
    { name: 'Mongoose', badge: 'https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white' },
    { name: 'DaisyUI', badge: 'https://img.shields.io/badge/DaisyUI-FFD700?style=for-the-badge&logo=tailwind-css&logoColor=black' },
    // Add other skills as needed
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl font-bold">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 border rounded-md ${
              darkMode ? 'bg-gray-800 text-white border border-blue-500' : 'bg-white text-gray-900'
            }`}
          >
            <img src={skill.badge} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
