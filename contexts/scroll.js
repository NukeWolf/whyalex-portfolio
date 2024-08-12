import { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext({});

export const ScrollProvider = ({ children }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const checkScroll = () => {
    setScrollPos(window.scrollY);
  };

  const handleScroll = debounce(checkScroll, DEBOUNCE_DELAY);

  // Scroll Detection
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos, handleScroll]);
  return <ScrollContext.Provider value={{}}>{children}</ScrollContext.Provider>;
};

export const useAuth = () => useContext(ScrollContext);
