import React from "react";

import SubApp from "./SubApp";
import ContextProvider from "./ContextProvider";

const App = () => {
  // const [theme, setTheme] = React.useState<ThemeContextType>("light");
  return (
    <ContextProvider>
      <SubApp />
    </ContextProvider>
  );
};

export default App;
