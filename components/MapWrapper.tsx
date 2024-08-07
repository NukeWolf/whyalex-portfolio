import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const MapWrapper: React.FC = () => {
  return (
    <Map
      initialViewState={{
        longitude: 114.19,
        latitude: 22.27,
        zoom: 11.9,
      }}
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
