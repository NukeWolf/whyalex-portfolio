import { CSSProperties, ReactNode } from "react";
import styles from "./Navbar.module.css";

function NavLink(props: LinkProps) {
  return (
    <a href={props.href}>
      <div style={props.style} className={styles.navlinkdiv}>
        {props.children}
      </div>
    </a>
  );
}

interface LinkProps {
  href: string;
  children?: ReactNode;
  style?: CSSProperties;
}
export default NavLink;
