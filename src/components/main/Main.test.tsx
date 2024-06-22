import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { AppContext } from "../../context/ContextProvider";

describe("Main Component", () => {
  it("renders without crashing", () => {
    render(
      <AppContext.Provider
        value={{
          token: "",
          setToken: jest.fn(),
          births: [],
          setBirths: jest.fn(),
        }}
      >
        <Main />
      </AppContext.Provider>
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(
      screen.getByText("Levelpath frontend take-home task")
    ).toBeInTheDocument();
  });
});
