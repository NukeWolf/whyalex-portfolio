import styles from "./Navbar.module.css";
import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav className={styles.navbar} id="navbar">
      <h1 className={styles.logo}>WhyAlex</h1>

      <NavLink href="/">ABOUT</NavLink>
      <NavLink href="/">PROJECTS</NavLink>
    </nav>
  );
}

export default NavBar;
