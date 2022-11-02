import { useContext } from "react";
import NameContext from "./NameContext";

export default function ScreenOne() {
  const { name } = useContext(NameContext);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem"
      }}
    >
      Screen One
      <hr />
      {name}
    </div>
  );
}
