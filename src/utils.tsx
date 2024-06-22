import { StateGetBirths } from "./GetBirths";

const utils = {
  getStateFriendly: (state: StateGetBirths) => {
    if (state === "init") return "Get Births";
    if (state === "loading") return "Loading...";
    return "a";
  },
};

export default utils;
