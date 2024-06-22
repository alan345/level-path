import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./InputToken";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Token for the API/i);
  expect(linkElement).toBeInTheDocument();
});
