import styles from "./Navbar.module.css";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import debounce from "../../util/debounce.js";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiFilePaperFill } from "react-icons/ri";

// How far the user has to scroll in px for nav to reappear
const SCROLL_LENGTH = 50;
// How often it checks for scroll
const DEBOUNCE_DELAY = 50;

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(0);

  /**
   * Changes the visiblitiy state based off if the user scrolled up.
   * @see{https://www.prwhite.io/blog/sticky-navbar-hides-scroll}
   *  */
  const checkScroll = () => {
    const currentScrollPos = window.scrollY;
    // Checks if the previous scroll pos is greater than the current pos, which signifys a scroll up.
    // The second line checks if they scrolled a significant ammount
    // Third line makes sure visibility is constant at the top of page.
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > SCROLL_LENGTH) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  const handleScroll = debounce(checkScroll, DEBOUNCE_DELAY);

  // When component is loaded, create an event listener to detect scrolls
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, handleScroll]);

  // Gets CSS Variable for Navbar height
  useEffect(() => {
    const height = getComputedStyle(document.documentElement).getPropertyValue(
      "--navbarHeight"
    );
    setNavbarHeight(height.trim());
  }, []);
  console.log(prevScrollPos, visible, navbarHeight);
  return (
    <nav
      className={styles.navbar}
      style={{ top: visible ? "0" : `-${navbarHeight}` }}
      id="navbar"
    >
      <Logo className={styles.logo} />

      <NavLink href="/">ABOUT</NavLink>
      <div className={styles.divider} />
      <NavLink href="/">PROJECTS</NavLink>
      <div className={styles.divider} />
      <NavLink href="/">CONTACT</NavLink>

      <div className={styles["icon-tray"]}>
        <a href="https://github.com/NukeWolf">
          <FaGithub size="2em" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/whyalexhuang/">
          <FaLinkedin size="2em" className={styles.icon} />
        </a>
        <a href="/resume.pdf">
          <RiFilePaperFill size="2em" className={styles.icon} />
        </a>
        <a href="mailto:ahuang@whyalex.is">
          <IoIosMail size="2.2em" className={styles.icon} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
