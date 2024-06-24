import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import GetBirths, { StateGetBirths } from "./GetBirths";
import { AppContext } from "../../context/ContextProvider";
import utils from "../../utils/utils";

// Mock axios
jest.mock("axios");

// // Mock utils
// jest.mock("../../utils/utils", () => ({
//   getStateFriendly: (state: StateGetBirths) => state,
// }));

jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;
// Mock useContext
const mockSetBirths = jest.fn();
const mockContextValue = {
  setBirths: mockSetBirths,
  token: "mockToken",
  setToken: mockSetBirths,
  births: [],
};

const mockContextProvider = (props: { children: React.ReactNode }) => (
  <AppContext.Provider value={mockContextValue}>
    {props.children}
  </AppContext.Provider>
);

describe("GetBirths Component", () => {
  beforeEach(() => {
    // Here we configure the mock response for Axios using axios.mockResolvedValue.
    // This ensures that every call to Axios in every test returns the specified data.

    (axios as unknown as jest.Mock).mockResolvedValue({
      data: {
        births: [
          { text: "Test1", year: 1987 },
          { text: "Test2", year: 1986 },
        ],
      },
    });
  });
  it("should fetch and display births on button click", async () => {
    render(<GetBirths />, { wrapper: mockContextProvider });

    // mockedAxios.get.mockResolvedValue(mockBirths);
    // const button = screen.getByRole("button", { name: /init/i });
    expect(screen.getByRole("button")).toHaveTextContent(
      utils.getStateFriendly("init")
    );
    fireEvent.click(screen.getByRole("button"));
    // fireEvent.click(button);

    await waitFor(() => expect(axios).toHaveBeenCalledTimes(1));
    // await waitFor(() => expect(mockSetBirths).toHaveBeenCalledWith(mockBirths));
    // await waitFor(() => expect(button).toHaveTextContent("loaded"));
  });

  // it("should display an error when the token is missing", async () => {
  //   const contextValueWithoutToken = {
  //     setBirths: mockSetBirths,
  //     token: null,
  //   };

  //   const wrapper = ({ children }) => (
  //     <AppContext.Provider value={contextValueWithoutToken}>
  //       {children}
  //     </AppContext.Provider>
  //   );

  //   render(<GetBirths />, { wrapper });

  //   const button = screen.getByRole("button", { name: /init/i });
  //   fireEvent.click(button);

  //   await waitFor(() =>
  //     expect(screen.getByText(/Token is required/i)).toBeInTheDocument()
  //   );
  //   await waitFor(() => expect(button).toHaveTextContent("error"));
  // });

  // it("should display an error message on axios error", async () => {
  //   axios.mockRejectedValue({
  //     message: "Network Error",
  //     response: { data: { httpReason: "Bad Request" } },
  //   });

  //   render(<GetBirths />, { wrapper: mockContextProvider });

  //   const button = screen.getByRole("button", { name: /init/i });
  //   fireEvent.click(button);

  //   await waitFor(() =>
  //     expect(
  //       screen.getByText(/Network Error - Bad Request/i)
  //     ).toBeInTheDocument()
  //   );
  //   await waitFor(() => expect(button).toHaveTextContent("error"));
  // });

  // it("should display an unexpected error message on unknown error", async () => {
  //   axios.mockRejectedValue(new Error("Unexpected Error"));

  //   render(<GetBirths />, { wrapper: mockContextProvider });

  //   const button = screen.getByRole("button", { name: /init/i });
  //   fireEvent.click(button);

  //   await waitFor(() =>
  //     expect(screen.getByText(/Unexpected error/i)).toBeInTheDocument()
  //   );
  //   await waitFor(() => expect(button).toHaveTextContent("error"));
  // });
});

// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// // import GetBirths from "../components/births/GetBirths";
// import { AppContext } from "../../context/ContextProvider";
// import axios from "axios";
// import utils from "../../utils/utils";
// import GetBirths from "./GetBirths";
// // import Births from "./Births";
// // import Births from "./Births.type";
// import { Birth } from "./Birth.type";

// // Mock axios
// jest.mock("axios");
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// // Mock utils
// jest.mock("../../utils/utils");
// const mockedUtils = utils as jest.Mocked<typeof utils>;

// describe("GetBirths Component", () => {
//   const setBirths = jest.fn();
//   const births: Birth[] = [];
//   const token = "mocked_token";

//   const renderComponent = () =>
//     render(
//       <AppContext.Provider
//         value={{ setBirths, births, token, setToken: jest.fn() }}
//       >
//         <GetBirths />
//       </AppContext.Provider>
//     );

//   it("should render the initial state correctly", () => {
//     mockedUtils.getStateFriendly.mockImplementation((state) => {
//       if (state === "init") return "Get Births";
//       if (state === "loaded") return "Try again";
//       if (state === "error")
//         return "Error. Please try again or refresh the page.";
//       if (state === "loading") return "Loading...";
//       return "";
//     });

//     renderComponent();
//     expect(screen.getByRole("button")).toHaveTextContent("Get Births");
//     expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
//   });

//   // it("should handle missing token error", () => {
//   //   mockedUtils.getStateFriendly.mockReturnValue("Error");

//   //   render(
//   //     <AppContext.Provider value={{ setBirths, births, token: "", setToken: jest.fn() }}>
//   //       <GetBirths />
//   //     </AppContext.Provider>
//   //   );
//   //   fireEvent.click(screen.getByRole("button"));
//   //   expect(screen.getByText("Token is required")).toBeInTheDocument();
//   //   expect(screen.getByRole("button")).toHaveTextContent("Error. Please try again or refresh the page.");
//   // });

//   it("should handle successful data fetch", async () => {
//     const birthsData = [
//       { text: "Sample Birth 1", year: 1990 },
//       { text: "Sample Birth 2", year: 1980 },
//     ];
//     (axios.get as jest.Mock).mockResolvedValueOnce({
//       data: { births: birthsData },
//     });

//     mockedUtils.getStateFriendly.mockImplementation((state) => {
//       if (state === "init") return "Get Births";
//       if (state === "loaded") return "Try again";
//       if (state === "error")
//         return "Error. Please try again or refresh the page.";
//       if (state === "loading") return "Loading...";
//       return "";
//     });

//     renderComponent();
//     fireEvent.click(screen.getByRole("button"));
//     await waitFor(() =>
//       expect(setBirths).toHaveBeenCalledWith(
//         birthsData.sort((a, b) => a.year - b.year)
//       )
//     );
//     expect(screen.getByRole("button")).toHaveTextContent("Try again");
//     expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
//   });

//   // it("should handle API error", async () => {
//   //   mockedAxios.mockRejectedValueOnce(new Error("API error"));

//   //   mockedUtils.getStateFriendly.mockImplementation((state) => {
//   //     if (state === "init") return "Get Births";
//   //     if (state === "loaded") return "Try again";
//   //     if (state === "error") return "Error. Please try again or refresh the page.";
//   //     if (state === "loading") return "Loading...";
//   //     return "";
//   //   });

//   //   renderComponent();
//   //   fireEvent.click(screen.getByRole("button"));
//   //   await waitFor(() => expect(screen.getByText("API error - undefined")).toBeInTheDocument());
//   //   expect(screen.getByRole("button")).toHaveTextContent("Error. Please try again or refresh the page.");
//   // });

//   // it("should handle unexpected error", async () => {
//   //   mockedAxios.mockRejectedValueOnce(new Error());

//   //   mockedUtils.getStateFriendly.mockImplementation((state) => {
//   //     if (state === "init") return "Get Births";
//   //     if (state === "loaded") return "Try again";
//   //     if (state === "error") return "Error. Please try again or refresh the page.";
//   //     if (state === "loading") return "Loading...";
//   //     return "";
//   //   });

//   //   renderComponent();
//   //   fireEvent.click(screen.getByRole("button"));
//   //   await waitFor(() => expect(screen.getByText("Unexpected error")).toBeInTheDocument());
//   //   expect(screen.getByRole("button")).toHaveTextContent("Error. Please try again or refresh the page.");
//   // });
// });

// // import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// // import GetBirths from "./GetBirths";
// // import { AppContext } from "../../context/ContextProvider";
// // import axios from "axios";
// // import utils from "../../utils/utils";
// // import { Birth } from "./Birth.type";

// // // Mock axios
// // jest.mock("axios");
// // const mockedAxios = axios as jest.Mocked<typeof axios>;

// // // Mock utils
// // jest.mock("../../utils/utils");
// // const mockedUtils = utils as jest.Mocked<typeof utils>;

// // describe("GetBirths Component", () => {
// //   const setBirths = jest.fn();
// //   const births: Birth[] = [];
// //   const token = "mocked_token";

// //   const renderComponent = () =>
// //     render(
// //       <AppContext.Provider
// //         value={{ setBirths, births, token, setToken: jest.fn() }}
// //       >
// //         <GetBirths />
// //       </AppContext.Provider>
// //     );

// //   // it("should render the initial state correctly", () => {
// //   //   renderComponent();
// //   //   expect(screen.getByRole("button")).toHaveTextContent(
// //   //     utils.getStateFriendly("init")
// //   //   );
// //   //   expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
// //   // });

// //   it("should handle missing token error", () => {
// //     render(
// //       <AppContext.Provider
// //         value={{ setBirths, births, token: "", setToken: jest.fn() }}
// //       >
// //         <GetBirths />
// //       </AppContext.Provider>
// //     );
// //     fireEvent.click(screen.getByRole("button"));
// //     expect(screen.getByText("Token is required")).toBeInTheDocument();
// //     expect(screen.getByRole("button")).toHaveTextContent(
// //       utils.getStateFriendly("error")
// //     );
// //   });

// //   it("should handle successful data fetch", async () => {
// //     const birthsData = [
// //       { text: "Sample Birth 1", year: 1990 },
// //       { text: "Sample Birth 2", year: 1980 },
// //     ];
// //     (axios.get as jest.Mock).mockResolvedValueOnce({
// //       data: { births: birthsData },
// //     });
// //     mockedUtils.getStateFriendly.mockReturnValue(
// //       utils.getStateFriendly("loading")
// //     );

// //     renderComponent();
// //     fireEvent.click(screen.getByRole("button"));
// //     await waitFor(() =>
// //       expect(setBirths).toHaveBeenCalledWith(
// //         birthsData.sort((a, b) => a.year - b.year)
// //       )
// //     );
// //     expect(screen.getByRole("button")).toHaveTextContent("Loaded");
// //     expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
// //   });

// // it("should handle API error", async () => {
// //   (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API error"));
// //   mockedUtils.getStateFriendly.mockReturnValue(
// //     utils.getStateFriendly("loading")
// //   );

// //   renderComponent();
// //   fireEvent.click(screen.getByRole("button"));
// //   await waitFor(() =>
// //     expect(screen.getByText("API error - undefined")).toBeInTheDocument()
// //   );
// //   expect(screen.getByRole("button")).toHaveTextContent("Error");
// // });

// // it("should handle unexpected error", async () => {
// //   mockedAxios.mockRejectedValueOnce(new Error());
// //   mockedUtils.getStateFriendly.mockReturnValue("Loading");

// //   renderComponent();
// //   fireEvent.click(screen.getByRole("button"));
// //   await waitFor(() =>
// //     expect(screen.getByText("Unexpected error")).toBeInTheDocument()
// //   );

// //   expect(screen.getByRole("button")).toHaveTextContent("Error");
// // });
// // });

// // import React from "react";
// // import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// // // import "@testing-library/jest-dom/extend-expect";
// // import GetBirths from "./GetBirths";
// // import ContextProvider, { AppContext } from "../../context/ContextProvider";
// // import axios from "axios";
// // import utils from "../../utils/utils";

// // jest.mock("axios");

// // const mockSetBirths = jest.fn();
// // const setToken = jest.fn();
// // const mockToken = "mock-token";

// // const renderWithContext = (token: string) => {
// //   return render(
// //     <ContextProvider>
// //       <GetBirths />
// //     </ContextProvider>
// //   );
// // };

// // // Mock jest and set the type
// // jest.mock("axios");
// // const mockedAxios = axios as jest.Mocked<typeof axios>;

// // describe("GetBirths component", () => {
// //   it("should handle API call and set state to loaded", async () => {
// //     (axios.get as jest.Mock).mockResolvedValue({
// //       data: {
// //         births: [{ year: 2000, text: "Test Birth" }],
// //       },
// //     });

// //     const { container } = renderWithContext(mockToken);
// //     console.log(container);

// //     fireEvent.click(screen.getByRole("button"));
// //     mockedAxios.get.mockResolvedValue({
// //       data: [
// //         {
// //           id: 1,
// //           name: "Joe Doe",
// //         },
// //         {
// //           id: 2,
// //           name: "Jane Doe",
// //         },
// //       ],
// //     });
// //     await waitFor(() => {
// //       expect(mockSetBirths).toHaveBeenCalledWith([
// //         { year: 2000, text: "Test Birth" },
// //       ]);
// //     });
// //     await waitFor(() => {
// //       expect(screen.getByRole("button")).toHaveTextContent("Loaded");
// //     });
// //   });

// //   it("should render correctly", () => {
// //     renderWithContext(mockToken);
// //     expect(screen.getByRole("button")).toHaveTextContent(
// //       utils.getStateFriendly("init")
// //     );
// //   });

// //   it("should display error when token is not provided", async () => {
// //     renderWithContext("");
// //     fireEvent.click(screen.getByRole("button"));

// //     await waitFor(() => {
// //       expect(screen.getByText("Token is required")).toBeInTheDocument();
// //     });
// //   });

// //   it("should handle loading state", async () => {
// //     renderWithContext(mockToken);

// //     fireEvent.click(screen.getByRole("button"));

// //     await waitFor(() => {
// //       expect(screen.getByRole("button")).toHaveTextContent("Loading");
// //     });
// //   });

// //   it("should handle API error", async () => {
// //     (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

// //     renderWithContext(mockToken);

// //     fireEvent.click(screen.getByRole("button"));

// //     await waitFor(() => {
// //       expect(
// //         screen.getByText(utils.getStateFriendly("error"))
// //       ).toBeInTheDocument();
// //     });
// //     await waitFor(() => {
// //       expect(screen.getByRole("button")).toHaveTextContent("Error");
// //     });
// //   });

// //   it("should handle no data found error", async () => {
// //     (axios.get as jest.Mock).mockResolvedValue({
// //       data: {},
// //     });

// //     renderWithContext(mockToken);

// //     fireEvent.click(screen.getByRole("button"));

// //     await waitFor(() => {
// //       expect(screen.getByText("No data found")).toBeInTheDocument();
// //     });
// //     await waitFor(() => {
// //       expect(screen.getByRole("button")).toHaveTextContent("Error");
// //     });
// //   });
// // });

// // // import React from "react";
// // // import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// // // import GetBirths from "./GetBirths";
// // // import { AppContext } from "../../context/ContextProvider";
// // // import axios from "axios";
// // // import utils from "../../utils/utils";

// // // jest.mock("axios");

// // // const mockSetBirths = jest.fn();
// // // const mockSetToken = jest.fn();
// // // const mockToken = "mock-token";

// // // const renderWithContext = (token: string) => {
// // //   return render(
// // //     <AppContext.Provider
// // //       value={{
// // //         setBirths: mockSetBirths,
// // //         token,
// // //         births: [],
// // //         setToken: mockSetToken,
// // //       }}
// // //     >
// // //       <GetBirths />
// // //     </AppContext.Provider>
// // //   );
// // // };

// // // describe("GetBirths component", () => {
// // //   it("should render correctly", () => {
// // //     renderWithContext(mockToken);
// // //     expect(screen.getByRole("button")).toHaveTextContent(
// // //       utils.getStateFriendly("init")
// // //     );
// // //   });

// // //   it("should display error when token is not provided", async () => {
// // //     renderWithContext("");
// // //     fireEvent.click(screen.getByRole("button"));

// // //     await waitFor(() => {
// // //       expect(screen.getByText("Token is required")).toBeInTheDocument();
// // //     });
// // //   });

// // //   it("should handle loading state", async () => {
// // //     renderWithContext(mockToken);

// // //     fireEvent.click(screen.getByRole("button"));

// // //     await waitFor(() => {
// // //       expect(screen.getByRole("button")).toHaveTextContent("Loading");
// // //     });
// // //   });

// // //   it("should handle API call and set state to loaded", async () => {
// // //     (axios.get as jest.Mock).mockResolvedValue({
// // //       data: {
// // //         births: [{ year: 2000, text: "Test Birth", pages: [] }],
// // //       },
// // //     });

// // //     renderWithContext(mockToken);

// // //     fireEvent.click(screen.getByRole("button"));

// // //     await waitFor(() => {
// // //       expect(screen.getByRole("button")).toHaveTextContent(
// // //         utils.getStateFriendly("error")
// // //       );
// // //     });
// // //     await waitFor(() => {
// // //       expect(mockSetBirths).toHaveBeenCalledWith([
// // //         { year: 2000, text: "Test Birth", pages: [] },
// // //       ]);
// // //     });
// // //   });

// // //   it("should handle API error", async () => {
// // //     (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

// // //     renderWithContext(mockToken);

// // //     fireEvent.click(screen.getByRole("button"));

// // //     await waitFor(() => {
// // //       expect(screen.getByText("No data found")).toBeInTheDocument();
// // //     });
// // //     await waitFor(() => {
// // //       expect(screen.getByRole("button")).toHaveTextContent("Error");
// // //     });
// // //   });
// // // });

// // // // import React from "react";
// // // // import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// // // // import axios from "axios";
// // // // import GetBirths from "./GetBirths";
// // // // import { AppContext } from "../../context/ContextProvider";
// // // // import utils from "../../utils/utils";

// // // // // Mock axios
// // // // jest.mock("axios");

// // // // describe("GetBirths Component", () => {
// // // //   const setBirths = jest.fn();
// // // //   const token = "mock-token";
// // // //   const mockResponse = {
// // // //     data: {
// // // //       births: [
// // // //         {
// // // //           text: "Sample Birth",
// // // //           pages: [
// // // //             {
// // // //               title: "Sample Page",
// // // //               thumbnail: {
// // // //                 source: "sample-image.jpg",
// // // //               },
// // // //             },
// // // //           ],
// // // //         },
// // // //       ],
// // // //     },
// // // //   };

// // // //   afterEach(() => {
// // // //     jest.clearAllMocks();
// // // //   });

// // // //   const renderComponent = () =>
// // // //     render(
// // // //       <AppContext.Provider
// // // //         value={{ setBirths, births: [], token, setToken: () => {} }}
// // // //       >
// // // //         <GetBirths />
// // // //       </AppContext.Provider>
// // // //     );

// // // //   it("renders the button and handles successful fetch", async () => {
// // // //     renderComponent();

// // // //     const button = screen.getByRole("button", {
// // // //       name: utils.getStateFriendly("init"),
// // // //     });
// // // //     fireEvent.click(button);

// // // //     await waitFor(() => expect(axios).toHaveBeenCalledTimes(1));
// // // //     expect(setBirths).toHaveBeenCalledWith(mockResponse.data.births);
// // // //     expect(button).not.toBeDisabled();
// // // //   });

// // // //   it("shows error message when token is missing", async () => {
// // // //     render(
// // // //       <AppContext.Provider
// // // //         value={{ setBirths, births: [], token: "", setToken: () => {} }}
// // // //       >
// // // //         <GetBirths />
// // // //       </AppContext.Provider>
// // // //     );

// // // //     const button = screen.getByRole("button", {
// // // //       name: utils.getStateFriendly("init"),
// // // //     });
// // // //     fireEvent.click(button);
// // // //     await screen.findByText("Token is required");
// // // //     expect(screen.getByText("Token is required")).toBeInTheDocument();
// // // //     expect(button).not.toBeDisabled();
// // // //     expect(axios).not.toHaveBeenCalled();
// // // //   });

// // // //   // it("shows error message on axios error", async () => {
// // // //   //   axios.mockRejectedValueOnce({
// // // //   //     isAxiosError: true,
// // // //   //     message: "Request failed",
// // // //   //     response: { data: { httpReason: "Not Found" } },
// // // //   //   });

// // // //   //   renderComponent();

// // // //   //   const button = screen.getByRole("button", {
// // // //   //     name: utils.getStateFriendly("init"),
// // // //   //   });
// // // //   //   fireEvent.click(button);

// // // //   //   await waitFor(() => screen.getByText("Request failed - Not Found"));
// // // //   //   expect(screen.getByText("Request failed - Not Found")).toBeInTheDocument();
// // // //   //   expect(button).not.toBeDisabled();
// // // //   // });

// // // //   // it("shows unexpected error message on non-axios error", async () => {
// // // //   //   axios.mockRejectedValueOnce(new Error("Unexpected error"));

// // // //   //   renderComponent();

// // // //   //   const button = screen.getByRole("button", {
// // // //   //     name: utils.getStateFriendly("init"),
// // // //   //   });
// // // //   //   fireEvent.click(button);

// // // //   //   await waitFor(() => screen.getByText("Unexpected error"));
// // // //   //   expect(screen.getByText("Unexpected error")).toBeInTheDocument();
// // // //   //   expect(button).not.toBeDisabled();
// // // //   // });
// // // // });
