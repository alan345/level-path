import { StateGetBirths } from "./GetBirths";

const utils = {
  getStateFriendly: (state: StateGetBirths) => {
    if (state === "init") return "Get Births";
    if (state === "loaded") return "Try again";
    if (state === "error")
      return "Error. Please try again or refresh the page.";
    if (state === "loading") return "Loading...";
    return "a";
  },
};

export default utils;
