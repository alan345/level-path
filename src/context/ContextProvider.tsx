import { createContext, useState } from "react";
import { Birth } from "../components/births/Birth.type";
import { ContextType } from "./Context.type";

export const AppContext = createContext<ContextType>({
  setBirths: () => {},
  births: [],
  token: "",
  setToken: () => {},
});

type Props = {
  children: React.ReactNode;
};
const ContextProvider = (props: Props) => {
  const [births, setBirths] = useState<Birth[]>([]);
  const [token, setToken] = useState("");

  return (
    <AppContext.Provider value={{ setBirths, births, token, setToken }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
