import levelpath from "../../images/levelpath.png";
import GetBirths from "../births/GetBirths";
import Births from "../births/Births";
import InputToken from "../token/InputToken";
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import BackgroundPage from "./BackgroundPage";

const Main = () => {
  const { token } = useContext(AppContext);
  return (
    <BackgroundPage>
      <header className="text-center flex justify-center items-center">
        <img src={levelpath} alt="logo" className="w-96 object-center" />
      </header>

      <div className="text-center mt-2">
        <h1>Levelpath frontend take-home task</h1>
      </div>
      <div className="text-center mt-8">
        <InputToken />
      </div>
      {token && (
        <div>
          <div className="text-center mt-10">
            <GetBirths />
          </div>
          <div className="mt-10 w-1/2 m-auto">
            <Births />
          </div>
        </div>
      )}
    </BackgroundPage>
  );
};

export default Main;
