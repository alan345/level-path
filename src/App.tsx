import SubApp from "./SubApp";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <SubApp />
    </ContextProvider>
  );
};

export default App;
