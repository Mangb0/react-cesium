import {
  Cartesian3,
  CallbackProperty,
  Color,
  JulianDate,
  Ellipsoid,
  Cartographic,
  EllipsoidGeodesic,
  Cartesian2,
} from "cesium";
import { Entity, Viewer, PolylineGraphics, Clock } from "resium";

const CallbackPropertyPreview = () => {
  const startLatitude = 35;
  const startLongitude = -120;
  const startTime = JulianDate.now();

  const redLinePositions = new CallbackProperty((time, result) => {
    const seconds = JulianDate.secondsDifference(time, startTime);
    const offset = seconds * 0.001;
    const endLongitude = startLongitude + offset;

    return Cartesian3.fromDegreesArray(
      [startLongitude, startLatitude, endLongitude, startLatitude],
      Ellipsoid.WGS84,
      result
    );
  }, false);

  const startCartographic = new Cartographic.fromDegrees(
    startLongitude,
    startLatitude
  );

  let endCartographic = new Cartographic();
  const stratch = new Cartographic();
  const geodesic = new EllipsoidGeodesic();

  const getLength = (time, result) => {
    const endPoint = redLinePositions.getValue(time, result)[1];
    endCartographic = Cartographic.fromCartesian(endPoint);

    geodesic.setEndPoints(startCartographic, endCartographic);
    const lengthInMeters = Math.round(geodesic.surfaceDistance);
    return `${(lengthInMeters / 1000).toFixed(1)} km`;
  };

  const getMidpoint = (time, result) => {
    const endPoint = redLinePositions.getValue(time, result)[1];
    endCartographic = Cartographic.fromCartesian(endPoint);

    geodesic.setEndPoints(startCartographic, endCartographic);
    const midpointCartographic = geodesic.interpolateUsingFraction(
      0.5,
      stratch
    );
    return Cartesian3.fromRadians(
      midpointCartographic.longitude,
      midpointCartographic.latitude
    );
  };

  return (
    <Viewer className="viewer-container">
      <Clock
        shouldAnimate // Animation on by default
      />
      <Entity name="MyEntity" selected>
        <PolylineGraphics
          positions={redLinePositions}
          width={5}
          material={Color.RED}
        />
      </Entity>
      <Entity
        name="Label"
        position={new CallbackProperty(getMidpoint, false)}
        label={{
          text: new CallbackProperty(getLength, false),
          font: "20px sans-serif",
          pixelOffset: new Cartesian2(0, 20),
        }}
        tracked
      />
    </Viewer>
  );
};

export default CallbackPropertyPreview;
