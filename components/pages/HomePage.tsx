import Layout from "../Layout";
import Hero from "../Hero";
import MapWrapper from "../MapWrapper";
import { useParallax } from "react-scroll-parallax";
import { useState, createRef } from "react";

function HomePage() {
  const mapref = createRef();

  const [viewState, setViewState] = useState({
    longitude: 114.19,
    latitude: 22.27,
    zoom: 11.9,
  });

  const changeView = (progress: number) => {
    console.log(progress);
    const start_coords = {
      longitude: 114.19,
      latitude: 22.27,
      zoom: 11.9,
    };
    const end_coords = {
      longitude: -78.4850039,
      latitude: 38.0400874,
      zoom: 10,
    };
    const current_coords = calculate_current_coords(
      start_coords,
      end_coords,
      progress * 1.333,
      3
    );

    console.log(progress * 1.33);
    console.log(current_coords);
    setViewState(current_coords);
  };

  return (
    <Layout>
      <MapWrapper
        ref={mapref}
        viewState={viewState}
        onMove={(evt) => setViewState(evt.viewState)}
      />
      <Hero />
      <Buffer height="50vh" />
      <Buffer height={"100vh"} onProgressChange={changeView} />
      <Buffer height="50vh" />
    </Layout>
  );
}

export default HomePage;

const Buffer = (props: BufferProps) => {
  const [current_progress, setProgress] = useState(0);

  const { ref } = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      if (ref.current) {
        // set progress to CSS variable
        if (current_progress != progress && props.onProgressChange) {
          props.onProgressChange(progress);
          setProgress(progress);
        }
      }
    },
    // onEnter: () => {
    //   if (props.onEnter) props.onEnter();
    // },
  });
  return (
    <div
      ref={ref}
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
  onProgressChange?: (progress: number) => void;
  onEnter?: (a: void) => void;
}

interface Coordinates {
  latitude: number;
  longitude: number;
  zoom: number;
}

const calculate_current_coords = (
  start: Coordinates,
  end: Coordinates,
  progress: number,
  min_zoom: number,
  reverse = false
) => {
  if (reverse) {
    const copy: Coordinates = start;
    start = end;
    end = copy;
  }
  let coord_progress = progress;
  coord_progress -= 0.3;
  coord_progress = Math.min(coord_progress, 0.7);
  coord_progress = Math.max(coord_progress, 0);

  const latitude =
    (end.latitude - start.latitude) * coord_progress * 1.4285 + start.latitude;
  const longitude =
    (end.longitude - start.longitude) * coord_progress * 1.4285 +
    start.longitude;

  // const zoom =
  //   (1 - progress) ** 2 * start.zoom +
  //   2 * (1 - progress) * min_zoom +
  //   progress * progress * end.zoom;
  let zoom = 0;
  const transition_time = 0.8;

  if (progress < 1 - transition_time) {
    const drop = start.zoom - min_zoom;
    const k = 8;
    zoom =
      (-2 * drop) / (1 + Math.pow(Math.E, -k * progress)) + drop + start.zoom;
  } else {
    const rise = end.zoom - min_zoom;
    const k = 8;
    const x = -progress + 1;
    zoom = (-2 * rise) / (1 + Math.pow(Math.E, -k * x)) + 2 * rise + min_zoom;
  }

  return { latitude, longitude, zoom };
};
// const latitude =
//   Math.pow(1 - progress, 3) * start.latitude +
//   3 * Math.pow(1 - progress, 2) * progress * start.latitude +
//   3 * (1 - progress) * Math.pow(progress, 2) * end.latitude +
//   Math.pow(progress, 3) * end.latitude;
// const longitude =
//   Math.pow(1 - progress, 3) * start.longitude +
//   3 * Math.pow(1 - progress, 2) * progress * start.longitude +
//   3 * (1 - progress) * Math.pow(progress, 2) * end.longitude +
//   Math.pow(progress, 3) * end.longitude;
