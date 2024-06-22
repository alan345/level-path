import { useContext, useState } from "react";
import { AppContext } from "./ContextProvider";

const InputToken = () => {
  const [input, setInput] = useState("");
  const { saveToken, token } = useContext(AppContext);

  if (token)
    return (
      <div>
        Token saved:. ({token.substring(0, 5)}...
        {token.substring(token.length - 5, token.length)})
      </div>
    );
  return (
    <form>
      <label
        htmlFor="input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Token for the API{" "}
        <a
          href="https://api.wikimedia.org/wiki/Feed_API/Reference/On_this_day"
          target="_blank"
          rel="noreferrer"
        >
          On this day
        </a>
      </label>
      <input
        id="input"
        type="text"
        required
        placeholder="Enter your token"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="mt-2">
        <button type="submit" onClick={() => saveToken(input)}>
          Save
        </button>
      </div>
    </form>
  );
};

export default InputToken;
