import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import GetBirths from "./GetBirths";
import { AppContext } from "../../context/ContextProvider";
import utils from "../../utils/utils";

// Mock axios for API requests
jest.mock("axios");

// Mock useContext hook
const mockSetBirths = jest.fn();
const mockContextValue = {
  setBirths: mockSetBirths,
  token: "mockToken",
  setToken: mockSetBirths,
  births: [],
};

// Mock context provider for testing
const mockContextProvider = (props: { children: React.ReactNode }) => (
  <AppContext.Provider value={mockContextValue}>
    {props.children}
  </AppContext.Provider>
);

describe("GetBirths Component", () => {
  it("should fetch and display births on button click", async () => {
    // Mock successful axios response
    (axios as unknown as jest.Mock).mockResolvedValue({
      data: {
        births: [
          { text: "Test1", year: 1987 },
          { text: "Test2", year: 1986 },
        ],
      },
    });

    // Render component with mocked context
    render(<GetBirths />, { wrapper: mockContextProvider });

    // Check initial button text
    expect(screen.getByRole("button")).toHaveTextContent(
      utils.getStateFriendly("init")
    );

    // Simulate button click
    fireEvent.click(screen.getByRole("button"));

    // Wait for axios to be called once
    await waitFor(() => expect(axios).toHaveBeenCalledTimes(1));

    // Check button text during loading state
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent(
        utils.getStateFriendly("loading")
      );
    });

    // Check button text after loading state
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent(
        utils.getStateFriendly("loaded")
      );
    });
  });

  it("should display an error message on axios error", async () => {
    // Mock axios error response
    (axios as unknown as jest.Mock).mockRejectedValue({
      message: "Network Error",
      response: { data: { httpReason: "Bad Request" } },
    });

    // Render component with mocked context
    render(<GetBirths />, { wrapper: mockContextProvider });

    // Check initial button text
    expect(screen.getByRole("button")).toHaveTextContent(
      utils.getStateFriendly("init")
    );

    // Simulate button click
    fireEvent.click(screen.getByRole("button"));

    // Wait for axios to be called once
    await waitFor(() => expect(axios).toHaveBeenCalledTimes(1));

    // Check button text during loading state
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent(
        utils.getStateFriendly("loading")
      );
    });

    // Check button text after error state
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent(
        utils.getStateFriendly("error")
      );
    });
  });
});
