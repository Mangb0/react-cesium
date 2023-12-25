import { Viewer, CameraFlyTo, Globe } from "resium";
import { Cartesian3, HeadingPitchRoll } from "cesium";
import GoogleMapsOverlay from "../components/GoogleMapsOverlay";

const GooglePhotorealistic3DTilesPreview = () => {
  return (
    <Viewer timeline={false} animation={false}>
      <Globe show={false} />
      <CameraFlyTo
        duration={0}
        destination={
          new Cartesian3(
            -2693797.551060477,
            -4297135.517094725,
            3854700.7470414364
          )
        }
        orientation={
          new HeadingPitchRoll(
            4.6550106925119925,
            -0.2863894863138836,
            1.3561760425773173e-7
          )
        }
      />
      <GoogleMapsOverlay />
    </Viewer>
  );
};

export default GooglePhotorealistic3DTilesPreview;
