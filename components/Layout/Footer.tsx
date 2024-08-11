import styles from "./Footer.module.css";
import IconTray from "./Navbar/IconTray";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width:950px)" });
  const iconSize = isMobile ? 1.7 : 0.9;
  const fontSize = isMobile ? "1.3rem" : "1rem";
  return (
    <footer className={styles.footer}>
      <p style={{ fontSize }}>
        Copyright © 2024 Alex Huang | All rights reserved
      </p>
      <IconTray iconSize={iconSize} className={styles["icon-tray"]} />
    </footer>
  );
};

export default Footer;
