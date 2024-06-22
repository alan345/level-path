import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("renders learn react link", () => {
  render(<Main />);
  const linkElement = screen.getByText(/Levelpath frontend take-home task/i);
  expect(linkElement).toBeInTheDocument();
});
