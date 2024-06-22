import React, { useContext } from "react";
import levelpath from "./images/levelpath.png";
import { AppContext } from "./ContextProvider";

const SubApp = () => {
  const { getBirths, births } = useContext(AppContext);
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EFF8E7] via-[#CEDBC9] to-[#F9FFEF]">
      <header className="text-center flex justify-center items-center">
        <img src={levelpath} alt="logo" className="w-96 object-center" />
      </header>
      <div className="text-center mt-10">
        <button onClick={getBirths}>getInfo</button>
        {births.map((birth: any, i) => (
          <p key={i}>
            {birth.year}: {birth.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SubApp;
