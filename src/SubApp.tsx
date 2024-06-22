import levelpath from "./images/levelpath.png";
import GetBirths from "./GetBirths";
import Births from "./Births";
import InputToken from "./InputToken";
import { useContext } from "react";
import { AppContext } from "./context/ContextProvider";

const SubApp = () => {
  const { token } = useContext(AppContext);
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EFF8E7] via-[#CEDBC9] to-[#F9FFEF]">
      <header className="text-center flex justify-center items-center">
        <img src={levelpath} alt="logo" className="w-96 object-center" />
      </header>

      <div className="text-center mt-2">
        <InputToken />
      </div>
      {token && (
        <div>
          <div className="text-center mt-10">
            <GetBirths />
          </div>
          <div className="ml-80 mt-10">
            <Births />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubApp;
