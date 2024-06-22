import React, { useContext } from "react";
import levelpath from "./images/levelpath.png";
import { MyContext } from "./ThemeContextProvider";

const SubApp = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div className="h-screen bg-gradient-to-r from-[#EFF8E7] via-[#CEDBC9] to-[#F9FFEF]">
      <header className="text-center flex justify-center items-center">
        <img src={levelpath} alt="logo" className="w-96 object-center" />
      </header>
      <div className="text-center mt-10">
        <p>The current theme is {theme}.</p>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Change theme
        </button>
      </div>
    </div>
  );
};

export default SubApp;
