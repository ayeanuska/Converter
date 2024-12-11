import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LengthConverter from "./LengthConverter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LengthConverter />
    </>
  );
}

export default App;
