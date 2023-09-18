import { Cartesian3, CallbackProperty, Color, JulianDate } from "cesium";
import { Entity, Viewer, PolylineGraphics, BillboardGraphics } from "resium";
import { useEffect, useState } from "react";

const CallbackPropertyPreview = () => {
  const [entityPosition, setEntityPosition] = useState(new Cartesian3());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = new JulianDate.now();
      const offset = Math.sin(time.secondsOfDay) * 3000.0;
      setEntityPosition(new Cartesian3.fromDegrees(-75.59777, offset, 100));
      console.log(offset);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Viewer className="viewer-container">
      <Entity name="MyEntity" position={entityPosition} selected>
        <BillboardGraphics image={"/src/assets/testImg.png"} scale={0.5} />
      </Entity>
    </Viewer>
  );
};

export default CallbackPropertyPreview;
