import styles from "./Project.module.css";
import WorkSection from "./WorkSection";
import { WorkSectionType } from "./WorkSection";

const Projects: Array<WorkSectionType> = [
  {
    title: "Neurobit Headset ",
    href: "https://www.neurobittech.com/",
    img: "/project_images/neurobit.jpg",
    subtitle: "Intern | 2023 | Taipei",
    desc: `Worked during my Study Abroad experience at a Taiwanese Biomedical Tech startup focusing on diagnosing eye diseases using machine learning. 
          Mainly worked on improving gyroscope to video calibration on headsets and developing tools for annotation.`,
    links: [],
  },
  {
    title: "Interactive Machines Lab @ Yale University",
    href: "https://interactive-machines.gitlab.io/",
    img: "/project_images/shutter_becton.jpg",
    subtitle: "Undergraduate Researcher | 2022-2023 | New Haven",
    desc: `Worked in Dr. Marynel Vázquez's lab during the summer doing Robotics research with Shutter, a robot designed ot investigate social interactions. 
            After the Summer, I continued working during the school year to develop ID persistence in images, culminating in part-authorship for a paper about intent recognition.`,
    links: [
      {
        href: "https://shutter.interactive-machines.com/documents/hri_2024_shutter_demo.pdf",
        text: "More About Shutter",
      },
    ],
  },
  {
    title: "BBot @ Doordash App",
    href: "https://app.bbot.menu/",
    img: "/project_images/bbot.png",
    subtitle: "Full-Stack Engineering Intern | 2021 | NYC",
    desc: `Interned at a startup prototyping Google Maps Integration for chain vendors and new menu search features using React and Django Backend. 
    Also migrated and refactored Angular codebase into React while resolving critical caching and XSS bugs preventing launch.`,
    links: [],
  },
  {
    title: "Gapyearly Website",
    href: "https://gapyearly.netlify.app/",
    img: "/project_images/gapyearly-web.jpg",
    subtitle: "Lead Architect & Full-Stack Dev | 2020-2021 | NYC",
    desc: `Gapyearly is a student organization whose mission is to connect gappers across the globe, provide gap year resources, and create a gap year community. 
      Built and architected a custom-designed web app from scratch along with a UX designer using Next.JS, an headless backend and full user and chat support.`,
    links: [
      {
        href: "https://github.com/NukeWolf/Gapyearly-Front",
        text: "Github Repo",
      },
    ],
  },
];

function ProjectSection() {
  const WorkSections = Projects.map((project, index) => {
    return (
      <WorkSection {...project} left_aligned={index % 2 == 0} key={index} />
    );
  });

  return (
    <div className={styles["projects-panel"]}>
      <h1 className={styles.header} id="work">
        Work{" "}
      </h1>
      {WorkSections}
    </div>
  );
}

export default ProjectSection;
