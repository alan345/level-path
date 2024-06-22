import React, { useContext } from "react";
import { AppContext } from "./ContextProvider";
import axios from "axios";

const GetBirths = () => {
  const { setBirths } = useContext(AppContext);
  const getBirths = async () => {
    console.log("This is a testa");
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

    try {
      const { data } = await axios(url, {
        headers: {
          "Api-User-Agent": "Example",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJlODEwMGQyNjQwNjNjYmUzODljZWQwNzg5ZTQwMmVlZiIsImp0aSI6ImJhYTQ1ZTk1MGIxNjU1YTcxZWEyZjQzNWFhMDM1Y2VlZTYxOWM1ZDM2ZTFjMzhlNjFhNzYwZDQ0OTU5OWY3MWI2NDI1NDA2OGYyZGM0MDE0IiwiaWF0IjoxNzE5MDM4Mjg4LjI5OTc1NCwibmJmIjoxNzE5MDM4Mjg4LjI5OTc1NywiZXhwIjozMzI3NTk0NzA4OC4yOTYzNjQsInN1YiI6Ijc1OTI3OTAzIiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.SWtfjEjK0Uj4UT4eEM8UL_YVQ3df8dy99pCHBR_flagQWZNbsg4rJJ5AZmr5oCBJ45AElQXvF0bPhEezs6K8gBzw6q4WI-3n9Pfsc3hOKc_G2UCk6LggV06P8LqypbWwevnnh28vJuxpT6K3a2vAjuOdQOqhpaXanKvwg-tKyDlmsBWQFjDYRDYsXn7XPHK3Xd9kp_J9BxaAqQmthXKRIr3Q87bKp-\_QShbVEWQrPNA-qQbuxnb8JU0OQsCSHq4C7ExTU3yU7lzqxcTQwJIeONSEfc6zdC9JAEQBfOJfSIk8QSy7vTESSyHOvaEnjYR6NHGtTEjZqSzfeOqsVvoDpAQs3irHjaGJhR7Ib1jF31sO7NPlCmFfC-zNtiI13MZgzn2ih9QTwU8TxY3wnYuc7UOA7Y0VaWFdAupr0lv06EltBkIQH1pJaJRhCY1uoX4zVZM71Drw3prRjUMZFLwDh85p9TcgLlUGHGL8RgfG596IHIr-Hd5cVORxf9C_0BTR_r3Ki71LE1kGH89o96yaK8E8F-zmsRLvrSeMHj09sZ0dYqWicubZWrI44dirBmpW8IxV1vNxPbBs-kwSYDT4kAPGKZ-1kPQmweQBtUUiCwoGB0WUTm3BBe4220W1qPMoSG7PJ3C9k9VxOKypiAwFek1BMVmY0cTZuWd3kTIYAp0`,
        },
      });
      console.log(data);
      console.log(data.births);
      setBirths(data.births);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={getBirths}>getInfo</button>;
};

export default GetBirths;
