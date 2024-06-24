import { render, screen } from "@testing-library/react";
import { AppContext } from "../../context/ContextProvider";
import Births from "./Births";
import { ContextType } from "../../context/Context.type";

const renderWithContext = (contextValue: ContextType) => {
  return render(
    <AppContext.Provider value={contextValue}>
      <Births />
    </AppContext.Provider>
  );
};

describe("Births Component", () => {
  test("renders correctly with births", () => {
    const contextValue: ContextType = {
      births: [
        { text: "Person A", year: 1990 },
        { text: "Person B", year: 1985 },
      ],
      setBirths: () => {},
      setToken: () => {},
      token: "",
    };

    // Render the Births component with the provided context value
    renderWithContext(contextValue);

    // Check if the component renders the expected text for births
    expect(
      screen.getByText(/On this day, there were 2 Births./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/1990: Person A/i)).toBeInTheDocument();
    expect(screen.getByText(/1985: Person B/i)).toBeInTheDocument();
  });

  test("renders null when no births", () => {
    const contextValue: ContextType = {
      births: [],
      setBirths: () => {},
      setToken: () => {},
      token: "",
    };

    // Render the Births component with an empty births array
    renderWithContext(contextValue);

    // Check that the main text indicating births is not present in the document
    expect(
      screen.queryByText(/On this day, there were/i)
    ).not.toBeInTheDocument();
  });
});
