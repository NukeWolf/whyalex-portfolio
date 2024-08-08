import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";

const MapWrapper: React.FC = () => {
  const [viewState, setViewState] = useState({
    longitude: 114.19,
    latitude: 22.27,
    zoom: 11.9,
  });

  return (
    <Map
      {...viewState}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        margin: 0,
      }}
      mapStyle="/positron.json"
    />
  );
};

export default MapWrapper;
