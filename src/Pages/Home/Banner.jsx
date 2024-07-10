import { useTheme } from "../../Hooks/useTheme";

function Banner() {
    const { darkMode } = useTheme()
    return (
      <div  className={darkMode ? 'bg-gray-900 text-white text-center' : 'text-center bg-gradient-to-r from-blue-500 to-indigo-500'}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className={darkMode ? 'text-4xl sm:text-5xl font-bold mb-4 text-blue-300' : 'text-4xl sm:text-5xl font-bold text-white mb-4'}>
            Welcome to My Portfolio
          </h1>
          <p className={darkMode ? 'text-lg sm:text-xl text-gray-200' : 'text-lg sm:text-xl text-white'}>
            Explore my work and skills
          </p>
        </div>
    
      </div>
    );
  }
  
  export default Banner;
  