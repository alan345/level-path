import { useContext } from "react";
import { AppContext } from "./ContextProvider";

const Births = () => {
  const { births } = useContext(AppContext);
  if (!births.length) return null;
  return (
    <div>
      <h3>{births.length} Births</h3>
      <div className="mt-4">
        <ul className="list-discmarker:text-green list-outside list-disc ml-6">
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