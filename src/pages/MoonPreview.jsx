import { Viewer, Moon } from "resium";
import { Ellipsoid, Math as CesiumMath } from "cesium";

const MoonPreview = () => {
  let radius = 10;
  return (
    <Viewer className="viewer-container">
      <Moon
        ellipsoid={
          new Ellipsoid(
            CesiumMath.LUNAR_RADIUS * radius,
            CesiumMath.LUNAR_RADIUS * radius,
            CesiumMath.LUNAR_RADIUS * radius
          )
        }
      />
    </Viewer>
  );
};

export default MoonPreview;
