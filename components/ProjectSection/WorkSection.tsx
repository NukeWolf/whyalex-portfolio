import styles from "./Project.module.css";
import { useMediaQuery } from "react-responsive";

interface LinkTag {
  href: string;
  text: string;
}

interface WorkSectionTypes {
  href: string;
  img: string;
  title: string;
  desc: string;
  subtitle: string;
  links: Array<LinkTag>;
  left_aligned?: boolean;
}

const WorkSection = (props: WorkSectionTypes) => {
  const isMobile = useMediaQuery({ query: "(max-width:950px)" });
  return (
    <div className={styles["project-card"]}>
      {props.left_aligned && !isMobile ? (
        <>
          <Text {...props} />
          <Img {...props} />
        </>
      ) : (
        <>
          <Img {...props} />
          <Text {...props} />
        </>
      )}
    </div>
  );
};

const Text = (props: WorkSectionTypes) => {
  return (
    <div className={styles["project-text"]}>
      <a href={props.href} style={{ textDecoration: "none", lineHeight: "0" }}>
        <h2 className={styles["project-title"]}>{props.title}</h2>
      </a>
      <br />
      <i>{props.subtitle}</i>

      <p>{props.desc}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        {props.links.map((link, index) => {
          return (
            <a href={link.href} key={`${link.href}-${index}`}>
              <div>{link.text}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Img = (props: WorkSectionTypes) => {
  return (
    <a href={props.href}>
      <div className={styles["img-container"]}>
        <img src={props.img} className={styles["project-image"]}></img>

        <div className={styles.overlay}></div>
      </div>
    </a>
  );
};

export default WorkSection;
export type { WorkSectionTypes as WorkSectionType };
