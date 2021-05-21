import { useState } from "react";

import "./App.scss";

function App() {
  const [romanNumeral, setRomanNumeral] = useState("");
  const [serverResults, setServerResults] = useState({});

  const getServerResults = () => {};

  return (
    <main>
      <h1>Input a Roman numeral</h1>
      <input
        type="text"
        value={romanNumeral}
        onChange={(event) => setRomanNumeral(event.target.value)}
      />
      <button onCLick={getServerResults}>Calculate</button>
    </main>
  );
}

export default App;
