import { useContext } from "react";
import NameContext from "./NameContext";

export default function ScreenTwo() {
  const { name, setName } = useContext(NameContext);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem"
      }}
    >
      Screen Two
      <hr />
      {name}
      <div
        style={{
          marginTop: "2rem"
        }}
      >
        Change Name:
        <input
          type="text"
          style={{
            marginLeft: "1rem"
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}
