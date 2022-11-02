import "./styles.css";
import ScreenOne from "./ScreenOne";
import NameContext from "./NameContext";
import { useMemo, useState } from "react";
import ScreenTwo from "./ScreenTwo";

export default function App() {
  const [name, setName] = useState("Hello");

  // Menambahkan useMemo
  const globalName = useMemo(() => ({ name, setName }), [name]);

  return (
    <NameContext.Provider value={globalName}>
      <div className="App">
        <div>
          Name:
          <input
            type="text"
            style={{
              marginLeft: "1rem"
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <ScreenOne />
        <ScreenTwo />
      </div>
    </NameContext.Provider>
  );
}
