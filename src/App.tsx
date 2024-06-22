import React from "react";
import levelpath from "./images/levelpath.png";

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-[#EFF8E7] via-[#CEDBC9] to-[#F9FFEF]">
      <header className="text-center flex justify-center items-center">
        <img src={levelpath} alt="logo" className="w-96 object-center" />
      </header>
      <div className="text-center mt-10">
        <button>Click me</button>
      </div>
    </div>
  );
}

export default App;
