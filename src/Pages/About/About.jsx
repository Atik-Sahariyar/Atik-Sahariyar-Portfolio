import { useTheme } from '../../Hooks/useTheme';
import profilePicture from '../../assets/Atik.png'; // Import your profile picture

const  About = () => {
    const { darkMode } = useTheme()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-8">
        <img src={profilePicture} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-2xl font-bold mb-2">Atik Sahariyar</h2>
        <p className={darkMode? ' text-gray-200' : "text-gray-600"}>Web Developer</p>
        <p className={darkMode ?"mt-4 text-lg text-gray-300" : "mt-4 text-lg text-gray-700"}>
        {
        `  I'm a passionate web developer with a focus on front-end technologies. I love creating 
            beautiful and user-friendly interfaces using modern frameworks.`
        }
        </p>
      </div>
    </div>
  );
}

export default About;
