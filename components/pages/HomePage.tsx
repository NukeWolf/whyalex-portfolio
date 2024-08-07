// import BrooklynBG from "./assets/brooklyn.png";

import Layout from "../Layout";
import Hero from "../Hero";
import MapWrapper from "../MapWrapper";

function HomePage() {
  return (
    <Layout>
      {/* <div
        style={{
          backgroundImage: `url(${BrooklynBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
        }}
      ></div> */}
      <MapWrapper />
      <Hero />
    </Layout>
  );
}

export default HomePage;
