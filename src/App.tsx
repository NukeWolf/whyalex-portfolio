import "./App.css";
import HomePage from "../components/pages/HomePage";
import ContactPage from "../components/pages/Contact";
import { ParallaxProvider } from "react-scroll-parallax";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HomePage />,
  },
]);
function App() {
  return (
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  );
}

export default App;
