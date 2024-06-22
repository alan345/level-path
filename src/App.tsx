import SubApp from "./SubApp";
import ContextProvider from "./ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <SubApp />
    </ContextProvider>
  );
};

export default App;
