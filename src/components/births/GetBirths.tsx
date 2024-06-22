import { useContext, useState } from "react";
import { AppContext } from "../../context/ContextProvider";
import axios, { AxiosResponse } from "axios";
import utils from "../../utils/utils";

export type StateGetBirths = "init" | "loading" | "loaded" | "error";

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJlODEwMGQyNjQwNjNjYmUzODljZWQwNzg5ZTQwMmVlZiIsImp0aSI6ImJhYTQ1ZTk1MGIxNjU1YTcxZWEyZjQzNWFhMDM1Y2VlZTYxOWM1ZDM2ZTFjMzhlNjFhNzYwZDQ0OTU5OWY3MWI2NDI1NDA2OGYyZGM0MDE0IiwiaWF0IjoxNzE5MDM4Mjg4LjI5OTc1NCwibmJmIjoxNzE5MDM4Mjg4LjI5OTc1NywiZXhwIjozMzI3NTk0NzA4OC4yOTYzNjQsInN1YiI6Ijc1OTI3OTAzIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.SWtfjEjK0Uj4UT4eEM8UL_YVQ3df8dy99pCHBR_flagQWZNbsg4rJJ5AZmr5oCBJ45AElQXvF0bPhEezs6K8gBzw6q4WI-3n9Pfsc3hOKc_G2UCk6LggV06P8LqypbWwevnnh28vJuxpT6K3a2vAjuOdQOqhpaXanKvwg-tKyDlmsBWQFjDYRDYsXn7XPHK3Xd9kp_J9BxaAqQmthXKRIr3Q87bKp-\_QShbVEWQrPNA-qQbuxnb8JU0OQsCSHq4C7ExTU3yU7lzqxcTQwJIeONSEfc6zdC9JAEQBfOJfSIk8QSy7vTESSyHOvaEnjYR6NHGtTEjZqSzfeOqsVvoDpAQs3irHjaGJhR7Ib1jF31sO7NPlCmFfC-zNtiI13MZgzn2ih9QTwU8TxY3wnYuc7UOA7Y0VaWFdAupr0lv06EltBkIQH1pJaJRhCY1uoX4zVZM71Drw3prRjUMZFLwDh85p9TcgLlUGHGL8RgfG596IHIr-Hd5cVORxf9C_0BTR_r3Ki71LE1kGH89o96yaK8E8F-zmsRLvrSeMHj09sZ0dYqWicubZWrI44dirBmpW8IxV1vNxPbBs-kwSYDT4kAPGKZ-1kPQmweQBtUUiCwoGB0WUTm3BBe4220W1qPMoSG7PJ3C9k9VxOKypiAwFek1BMVmY0cTZuWd3kTIYAp0
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
    console.log("This is a testa");
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`;

    try {
      const response: AxiosResponse = await axios(url, {
        headers: {
          "Api-User-Agent": "User",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJlODEwMGQyNjQwNjNjYmUzODljZWQwNzg5ZTQwMmVlZiIsImp0aSI6ImJhYTQ1ZTk1MGIxNjU1YTcxZWEyZjQzNWFhMDM1Y2VlZTYxOWM1ZDM2ZTFjMzhlNjFhNzYwZDQ0OTU5OWY3MWI2NDI1NDA2OGYyZGM0MDE0IiwiaWF0IjoxNzE5MDM4Mjg4LjI5OTc1NCwibmJmIjoxNzE5MDM4Mjg4LjI5OTc1NywiZXhwIjozMzI3NTk0NzA4OC4yOTYzNjQsInN1YiI6Ijc1OTI3OTAzIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.SWtfjEjK0Uj4UT4eEM8UL_YVQ3df8dy99pCHBR_flagQWZNbsg4rJJ5AZmr5oCBJ45AElQXvF0bPhEezs6K8gBzw6q4WI-3n9Pfsc3hOKc_G2UCk6LggV06P8LqypbWwevnnh28vJuxpT6K3a2vAjuOdQOqhpaXanKvwg-tKyDlmsBWQFjDYRDYsXn7XPHK3Xd9kp_J9BxaAqQmthXKRIr3Q87bKp-\_QShbVEWQrPNA-qQbuxnb8JU0OQsCSHq4C7ExTU3yU7lzqxcTQwJIeONSEfc6zdC9JAEQBfOJfSIk8QSy7vTESSyHOvaEnjYR6NHGtTEjZqSzfeOqsVvoDpAQs3irHjaGJhR7Ib1jF31sO7NPlCmFfC-zNtiI13MZgzn2ih9QTwU8TxY3wnYuc7UOA7Y0VaWFdAupr0lv06EltBkIQH1pJaJRhCY1uoX4zVZM71Drw3prRjUMZFLwDh85p9TcgLlUGHGL8RgfG596IHIr-Hd5cVORxf9C_0BTR_r3Ki71LE1kGH89o96yaK8E8F-zmsRLvrSeMHj09sZ0dYqWicubZWrI44dirBmpW8IxV1vNxPbBs-kwSYDT4kAPGKZ-1kPQmweQBtUUiCwoGB0WUTm3BBe4220W1qPMoSG7PJ3C9k9VxOKypiAwFek1BMVmY0cTZuWd3kTIYAp0`,
        },
      });

      setBirths(response.data.births);
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
