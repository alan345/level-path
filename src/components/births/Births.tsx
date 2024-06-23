import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

const Births = () => {
  const { births } = useContext(AppContext);
  if (!births.length) return null;
  return (
    <div>
      <h3>
        On this day ({new Date().toDateString()}), there were {births.length}{" "}
        Births.
      </h3>
      <div className="mt-4">
        <ul className="list-discmarker:text-green list-outside list-disc">
          {births.map((birth: any, i) => (
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
