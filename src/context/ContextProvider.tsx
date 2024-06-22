import { createContext, useState } from "react";
// import axios from "axios";

export type Births = any;
export const AppContext = createContext<{
  setBirths: (births: Births[]) => void;
  births: Array<{ text: string; year: number }>;
  token: string;
  saveToken: (token: string) => void;
}>({
  setBirths: () => {},
  births: [],
  token: "",
  saveToken: () => {},
});

type Props = {
  children: React.ReactNode;
};
const ContextProvider = (props: Props) => {
  const [births, setBirths] = useState<any>([]);
  const [token, saveToken] = useState("");

  return (
    <AppContext.Provider value={{ setBirths, births, token, saveToken }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
