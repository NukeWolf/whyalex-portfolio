import Layout from "../Layout";
import Hero from "../Hero";
import MapWrapper from "../MapWrapper";

function HomePage() {
  return (
    <Layout>
      <MapWrapper />
      <Hero />
      <Buffer height={"300vh"} />
    </Layout>
  );
}

export default HomePage;

const Buffer = (props: BufferProps) => {
  return (
    <div
      style={{
        height: props.height,
        width: "100vw",
        margin: 0,
        zIndex: 2,
        position: "relative",
      }}
    />
  );
};
interface BufferProps {
  height: number | string;
}
