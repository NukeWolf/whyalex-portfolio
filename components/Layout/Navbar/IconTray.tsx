import styles from "./Navbar.module.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiFilePaperFill } from "react-icons/ri";

interface proptypes {
  iconSize: number;
  className: string;
}

const IconTray = (props: proptypes) => {
  return (
    <div className={props.className}>
      <a href="https://github.com/NukeWolf">
        <FaGithub size={`${props.iconSize}rem`} className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/whyalexhuang/">
        <FaLinkedin size={`${props.iconSize}rem`} className={styles.icon} />
      </a>
      <a href="/resume.pdf">
        <RiFilePaperFill
          size={`${props.iconSize}rem`}
          className={styles.icon}
        />
      </a>
      <a href="mailto:ahuang@whyalex.is">
        <IoIosMail
          size={`${props.iconSize * 1.15}rem`}
          className={styles.icon}
        />
      </a>
    </div>
  );
};

export default IconTray;
