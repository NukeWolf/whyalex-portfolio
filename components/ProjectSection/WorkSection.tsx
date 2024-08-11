import styles from "./Project.module.css";

interface proptypes {
  href: string;
  img: string;
  title: string;
  desc: string;
  subtitle: string;
  links: Array<object>;
  left_aligned: boolean;
}

const WorkSection = (props: proptypes) => {
  return (
    <div className={styles["project-card"]}>
      <Text {...props} />
      <Img {...props} />
    </div>
  );
};

const Text = (props: proptypes) => {
  return (
    <div className={styles["project-text"]}>
      <a href={props.href} style={{ textDecoration: "none" }}>
        <h2 className={styles["project-title"]}>{props.title}</h2>
      </a>
      <i>{props.subtitle}</i>

      <p>{props.desc}</p>
      <div>
        <a href="/">
          <div>Github Repo</div>
        </a>
      </div>
    </div>
  );
};

const Img = (props: proptypes) => {
  return (
    <a href={props.href}>
      <img src={props.img} className={styles["project-image"]}></img>
    </a>
  );
};

export default WorkSection;
