import "./App.css";
import HomePage from "../components/pages/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <HomePage />
    </ParallaxProvider>
  );
}

export default App;
