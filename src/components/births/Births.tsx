import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

const Births = () => {
  const { births } = useContext(AppContext);
  if (!births.length) return null;
  return (
    <div>
      <h3>On this day, there were {births.length} Births.</h3>
      <div className="mt-4 ml-4">
        <ul className="list-discmarker:text-green list-outside list-disc">
          {births.map((birth, i) => (
            <li key={i}>
              {birth.year}: {birth.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Births;
