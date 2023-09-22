import { Viewer, CameraFlyTo } from "resium";
import { Cartesian3 } from "cesium";

const CameraPreview = () => {
  return (
    <Viewer className="viewer-container">
      <CameraFlyTo
        duration={5}
        destination={Cartesian3.fromDegrees(127.024612, 37.5326, 100)}
      />
    </Viewer>
  );
};

export default CameraPreview;
