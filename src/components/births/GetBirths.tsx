import { useContext, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import axios, { AxiosResponse } from "axios";
import utils from "../../utils/utils";
import { Birth } from "./Birth.type";

// Define the possible states for the getBirths function
export type StateGetBirths = "init" | "loading" | "loaded" | "error";

const GetBirths = () => {
  // Set up local state for the component
  const [state, setState] = useState<StateGetBirths>("init");
  const [error, setError] = useState("");

  // Extract setBirths and token from the context
  const { setBirths, token } = useContext(AppContext);

  // Function to fetch birth data from the API
  const getBirths = async () => {
    if (!token) {
      // Handle missing token error
      setError("Token is required");
      setState("error");
      return;
    }

    // Set state to loading while fetching data
    setState("loading");

    // Get the current date
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    // Construct the URL for the API request
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`;

    // Clean the token by removing backslashes
    const tokenClean = token.replace(/\\/g, "");

    try {
      // Make the API request
      const response: AxiosResponse = await axios(url, {
        headers: {
          "Api-User-Agent": "User",
          Authorization: `Bearer ${tokenClean}`,
        },
      });

      // Handle case where no data is returned
      if (!response?.data) {
        setError("No data found");
        setState("error");
        return;
      }

      // Extract and sort the births data
      const births: Birth[] = response.data.births;
      births.sort((a, b) => a.year - b.year);

      // Update the context with the fetched data
      setBirths(births);
      setState("loaded");
    } catch (error) {
      // Handle errors during the API request
      setState("error");
      if (axios.isAxiosError(error)) {
        setError(`${error.message} - ${error.response?.data.httpReason}`);
      } else {
        setError("Unexpected error");
      }
    }
  };

  return (
    <>
      {/* Button to trigger the getBirths function */}
      <button disabled={state === "loading"} onClick={getBirths}>
        {utils.getStateFriendly(state)}
      </button>

      {/* Display error message if there is an error */}
      {error && (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
    </>
  );
};

export default GetBirths;
