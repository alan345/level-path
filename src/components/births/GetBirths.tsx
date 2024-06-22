import { useContext, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import axios, { AxiosResponse } from "axios";
import utils from "../../utils/utils";
import { Birth } from "./Birth.type";

export type StateGetBirths = "init" | "loading" | "loaded" | "error";

const GetBirths = () => {
  const [state, setState] = useState<StateGetBirths>("init");
  const [error, setError] = useState("");
  const { setBirths, token } = useContext(AppContext);
  const getBirths = async () => {
    if (!token) {
      setError("Token is required");
      setState("error");
      return;
    }
    setState("loading");
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`;

    try {
      const response: AxiosResponse = await axios(url, {
        headers: {
          "Api-User-Agent": "User",
          Authorization: `Bearer ${token}`,
        },
      });
      const births: Birth[] = response.data.births;
      setBirths(births);
      setState("init");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(`${error.message} - ${error.response?.data.httpReason}`);
      } else {
        setError("Unexpected error");
      }
      setState("error");
      console.log(error);
    }
  };

  return (
    <>
      <button disabled={state === "loading"} onClick={getBirths}>
        {utils.getStateFriendly(state)}
      </button>
      {error && (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
    </>
  );
};

export default GetBirths;
