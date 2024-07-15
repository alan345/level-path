import levelpath from "../../images/levelpath.png";
import GetBirths from "../births/GetBirths";
import Births from "../births/Births";
import InputToken from "../token/InputToken";
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import BackgroundPage from "./BackgroundPage";
import MainContext from "./MainContext";

const Main = () => {
  const { token } = useContext(AppContext); // Extract token from the context

  return (
    <BackgroundPage>
      {/* Header with the levelpath logo */}
      <header className="text-center flex justify-center items-center">
        <img src={levelpath} alt="logo" className="w-96 object-center" />
      </header>
      {/* Title */}
      <div className="text-center mt-2">
        <h1>Levelpath frontend take-home task</h1>
      </div>
      {/* InputToken component to enter the token */}
      <div className="text-center mt-8">
        <InputToken />
      </div>
      {/* Conditionally render GetBirths and Births components if token is present */}
      {token && (
        <div>
          {/* Button to trigger fetching of birth data */}
          <div className="text-center mt-10">
            <GetBirths />
          </div>
          {/* Display the fetched birth data */}
          <div className="mt-10 w-1/2 m-auto">
            <Births />
          </div>
        </div>
      )}
      MainContext
      <MainContext />
    </BackgroundPage>
  );
};

export default Main;
