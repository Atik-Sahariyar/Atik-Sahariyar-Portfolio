import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider.jsx";

export  const useTheme = () => useContext(ThemeContext);
