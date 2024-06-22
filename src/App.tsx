import Main from "./main/Main";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
};

export default App;
