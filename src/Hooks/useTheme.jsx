import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

export  const useTheme = () => useContext(ThemeContext);
