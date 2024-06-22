import React from "react";
import { render, screen } from "@testing-library/react";
import InputToken from "./InputToken";

describe("InputToken", () => {
  it("renders form when token is not set", () => {
    render(<InputToken />);

    expect(screen.getByLabelText(/Token for the API/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your token/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
  });

  it("renders token display when token is set", () => {
    const token = "1234567890abcdef";
    const setToken = jest.fn();

    // Mock the context values
    React.useContext = jest.fn().mockReturnValue({
      token,
      setToken,
    });

    render(<InputToken />);

    expect(
      screen.getByText(
        `Token saved:. (${token.substring(0, 5)}...${token.substring(
          token.length - 5,
          token.length
        )})`
      )
    ).toBeInTheDocument();
  });
});
