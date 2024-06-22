import { FC, createContext, useState } from "react";

type Theme = "light" | "dark";

export const AppContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};
const ContextProvider = (props: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
