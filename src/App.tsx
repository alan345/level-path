import Main from "./components/main/Main";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
};

export default App;
