import Map, { MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { forwardRef, Ref } from "react";
import { ViewStateChangeEvent } from "react-map-gl";

interface proptypes {
  viewState: object;
  onMove: (evt: ViewStateChangeEvent) => void;
}

const MapWrapper = (props: proptypes, ref: Ref<MapRef>) => {
  return (
    <Map
      {...props.viewState}
      onMove={props.onMove}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        margin: 0,
      }}
      ref={ref}
      mapStyle="/positron.json"
    />
  );
};
const FinalMap = forwardRef(MapWrapper);
export default FinalMap;
