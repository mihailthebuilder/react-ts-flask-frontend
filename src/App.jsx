import { useState } from "react";
import axios from "axios";

import "./App.scss";

function App() {
  const [romanNumeral, setRomanNumeral] = useState("");
  const [calculating, setCalculating] = useState(false);
  const [serverResults, setServerResults] = useState({});

  const getServerResults = () => {
    setCalculating(true);
    axios.get("http://localhost:5000/" + romanNumeral).then((res) => {
      setCalculating(false);
      setServerResults(res.data);
    });
  };

  return (
    <main>
      <h1>Input a Roman numeral</h1>
      <input
        type="text"
        value={romanNumeral}
        onChange={(event) => setRomanNumeral(event.target.value)}
      />
      <button onClick={getServerResults}>Calculate</button>
      <div className="output">
        {calculating
          ? "Calculating..."
          : Object.keys(serverResults).length > 0 &&
            Object.entries(serverResults).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
      </div>
    </main>
  );
}

export default App;
