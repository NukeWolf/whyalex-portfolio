import styles from "./Project.module.css";
import WorkSection from "./WorkSection";

function ProjectSection() {
  return (
    <div className={styles["projects-panel"]}>
      <h1 className={styles.header}>Work </h1>
      <WorkSection />
    </div>
  );
}

export default ProjectSection;
