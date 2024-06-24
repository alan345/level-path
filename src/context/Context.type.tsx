import { Birth } from "../components/births/Birth.type";

export type ContextType = {
  setBirths: (births: Birth[]) => void;
  births: Array<{ text: string; year: number }>;
  token: string;
  setToken: (token: string) => void;
};
