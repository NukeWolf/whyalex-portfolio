import styles from "./Project.module.css";

function ProjectSection() {
  return (
    <div className={styles["projects-panel"]}>
      <h1 className={styles.header}>Work </h1>
      <WorkSection />
    </div>
  );
}

export default ProjectSection;

const WorkSection = () => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-text"]}>
        <h2>Project 1</h2>
        <div>
          <a>
            <div></div>
          </a>
        </div>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <img
        src="project_images/gapyearly-web.jpg"
        className={styles["project-image"]}
      ></img>
    </div>
  );
};
