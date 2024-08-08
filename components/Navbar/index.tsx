import styles from "./Navbar.module.css";
import NavLink from "./NavLink";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav className={styles.navbar} id="navbar">
      <Logo className={styles.logo} />

      <NavLink href="/">ABOUT</NavLink>
      <NavLink href="/">PROJECTS</NavLink>
    </nav>
  );
}

export default NavBar;
