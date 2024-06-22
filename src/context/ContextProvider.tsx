import { createContext, useState } from "react";
// import axios from "axios";

export type Births = any;
export const AppContext = createContext<{
  setBirths: (births: Births[]) => void;
  births: Array<{ text: string; year: number }>;
  token: string;
  setToken: (token: string) => void;
}>({
  setBirths: () => {},
  births: [],
  token: "",
  setToken: () => {},
});

type Props = {
  children: React.ReactNode;
};
const ContextProvider = (props: Props) => {
  const [births, setBirths] = useState<any>([]);
  const [token, setToken] = useState("");

  return (
    <AppContext.Provider value={{ setBirths, births, token, setToken }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
