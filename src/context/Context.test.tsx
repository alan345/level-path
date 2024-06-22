import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContext } from "./ContextProvider";
import ContextProvider from "./ContextProvider";

describe("ContextProvider", () => {
  it("provides default values", () => {
    const TestComponent = () => {
      const { births, token } = React.useContext(AppContext);
      return (
        <div>
          <div data-testid="births">{JSON.stringify(births)}</div>
          <div data-testid="token">{token}</div>
        </div>
      );
    };

    render(
      <ContextProvider>
        <TestComponent />
      </ContextProvider>
    );

    expect(screen.getByTestId("births").textContent).toBe("[]");
    expect(screen.getByTestId("token").textContent).toBe("");
  });

  it("allows updating births and token", () => {
    const TestComponent = () => {
      const { births, setBirths, token, setToken } =
        React.useContext(AppContext);

      React.useEffect(() => {
        setBirths([{ text: "Test Birth", year: 2024 }]);
        setToken("test-token");
      }, [setBirths, setToken]);

      return (
        <div>
          <div data-testid="births">{JSON.stringify(births)}</div>
          <div data-testid="token">{token}</div>
        </div>
      );
    };

    render(
      <ContextProvider>
        <TestComponent />
      </ContextProvider>
    );

    expect(screen.getByTestId("births").textContent).toBe(
      '[{"text":"Test Birth","year":2024}]'
    );
    expect(screen.getByTestId("token").textContent).toBe("test-token");
  });
});
