import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import GetBirths from "./GetBirths";
import { AppContext } from "../../context/ContextProvider";
import utils from "../../utils/utils";

// Mock axios
jest.mock("axios");

describe("GetBirths Component", () => {
  const setBirths = jest.fn();
  const token = "mock-token";
  const mockResponse = {
    data: {
      births: [
        {
          text: "Sample Birth",
          pages: [
            {
              title: "Sample Page",
              thumbnail: {
                source: "sample-image.jpg",
              },
            },
          ],
        },
      ],
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () =>
    render(
      <AppContext.Provider
        value={{ setBirths, births: [], token, setToken: () => {} }}
      >
        <GetBirths />
      </AppContext.Provider>
    );

  it("renders the button and handles successful fetch", async () => {
    renderComponent();

    const button = screen.getByRole("button", {
      name: utils.getStateFriendly("init"),
    });
    fireEvent.click(button);

    await waitFor(() => expect(axios).toHaveBeenCalledTimes(1));
    expect(setBirths).toHaveBeenCalledWith(mockResponse.data.births);
    expect(button).not.toBeDisabled();
  });

  it("shows error message when token is missing", async () => {
    render(
      <AppContext.Provider
        value={{ setBirths, births: [], token: "", setToken: () => {} }}
      >
        <GetBirths />
      </AppContext.Provider>
    );

    const button = screen.getByRole("button", {
      name: utils.getStateFriendly("init"),
    });
    fireEvent.click(button);
    await screen.findByText("Token is required");
    expect(screen.getByText("Token is required")).toBeInTheDocument();
    expect(button).not.toBeDisabled();
    expect(axios).not.toHaveBeenCalled();
  });

  // it("shows error message on axios error", async () => {
  //   axios.mockRejectedValueOnce({
  //     isAxiosError: true,
  //     message: "Request failed",
  //     response: { data: { httpReason: "Not Found" } },
  //   });

  //   renderComponent();

  //   const button = screen.getByRole("button", {
  //     name: utils.getStateFriendly("init"),
  //   });
  //   fireEvent.click(button);

  //   await waitFor(() => screen.getByText("Request failed - Not Found"));
  //   expect(screen.getByText("Request failed - Not Found")).toBeInTheDocument();
  //   expect(button).not.toBeDisabled();
  // });

  // it("shows unexpected error message on non-axios error", async () => {
  //   axios.mockRejectedValueOnce(new Error("Unexpected error"));

  //   renderComponent();

  //   const button = screen.getByRole("button", {
  //     name: utils.getStateFriendly("init"),
  //   });
  //   fireEvent.click(button);

  //   await waitFor(() => screen.getByText("Unexpected error"));
  //   expect(screen.getByText("Unexpected error")).toBeInTheDocument();
  //   expect(button).not.toBeDisabled();
  // });
});
