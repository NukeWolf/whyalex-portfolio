import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles["hero-panel"]}>
      <div className={styles["hero-card"]}>
        <img src="/me.jpg" className={styles["hero-image"]} />
        <div className={styles["hero-text"]}>
          <h1>Welcome!</h1>
          <p>
            I'm Alex. I'm a current Master's Student studying computer science
            at Yale University. I have a passion for building things and
            managing complex systems.
          </p>
          <p>
            This page is still a work in progress, but take a look around what I
            have already!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
