import React from "react";
import levelpath from "./images/levelpath.png";
import { createContext } from "react";
import SubApp from "./SubApp";
import ThemeContextProvider from "./ThemeContextProvider";

const App = () => {
  // const [theme, setTheme] = React.useState<ThemeContextType>("light");
  return (
    <ThemeContextProvider>
      <SubApp />
    </ThemeContextProvider>
  );
};

export default App;
