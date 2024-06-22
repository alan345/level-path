import { FC, createContext, useState } from "react";

type Theme = "light" | "dark";

export const MyContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};
const ThemeContextProvider = (props: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default ThemeContextProvider;

// import React from "react";
// import levelpath from "./images/levelpath.png";
// import { createContext } from "react";
// import SubApp from "./SubApp";

// type Props = {
//   children: React.ReactNode;
// };
// export type ThemeContextType = {
//   theme: "light" | "dark";
//   onChangeTheme: () => void;
// };

// let themeInit: ThemeContextType = {
//   onChangeTheme: () => {
//     console.log("onChangeTheme");
//   },
//   theme: "light",
// };
// export const ThemeContext = createContext<ThemeContextType>(themeInit);

// export const ThemeContextProvider = ({ children }: Props) => {
//     const [theme, setTheme] = React.useState<ThemeContextType>(themeInit);
//   return (
//     <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
//   );
// };
