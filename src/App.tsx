import { useState } from "react";
import BrooklynBG from "./assets/brooklyn.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${BrooklynBG})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1>WhyAlex?.is</h1>

      </div>
    </main>
  );
}

export default App;
