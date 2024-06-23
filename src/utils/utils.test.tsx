import utils from "./utils";
import { StateGetBirths } from "../components/births/GetBirths";

describe("utils.getStateFriendly", () => {
  it("returns 'Get Births' when state is 'init'", () => {
    expect(utils.getStateFriendly("init")).toBe("Get Births");
  });

  it("returns 'Try again' when state is 'loaded'", () => {
    expect(utils.getStateFriendly("loaded")).toBe("Try again");
  });

  it("returns 'Error. Please try again or refresh the page.' when state is 'error'", () => {
    expect(utils.getStateFriendly("error")).toBe(
      "Error. Please try again or refresh the page."
    );
  });

  it("returns 'Loading...' when state is 'loading'", () => {
    expect(utils.getStateFriendly("loading")).toBe("Loading...");
  });

  it("returns '' for any other state", () => {
    expect(utils.getStateFriendly("unknown" as StateGetBirths)).toBe("");
  });
});
