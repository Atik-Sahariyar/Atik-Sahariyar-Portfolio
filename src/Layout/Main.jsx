import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import { useTheme } from "../Hooks/useTheme";

const Main = () => {
  const { darkMode } = useTheme();
  return (
    <div

      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      <div className=" max-w-screen-xl mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;




                  

