import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";
import { useMemo, useState, useRef, useEffect } from "react";

const initCanvas = () => {
  const can = document.createElement("canvas");
  can.width = 100;
  can.height = 100;
  return can;
};

const renderCanvas = (can, p) => {
  const c = can.getContext("2d");
  if (!c) return;
  c.clearRect(0, 0, can.width, can.height);
  c.fillStyle = "rgba(100,0,0,0.8)";
  c.beginPath();
  c.arc(
    can.width / 2,
    can.height / 2,
    (p * can.width) / 2,
    0,
    Math.PI * 2,
    false
  );
  c.fill();
};

const CanvasEntity = (props) => {
  const c1 = useMemo(initCanvas, []);
  const c2 = useMemo(initCanvas, []);
  const [image, setImage] = useState();
  const progress = useRef(0);

  useEffect(() => {
    const i = window.setInterval(() => {
      progress.current = Math.min(progress.current + 0.01, 1);
      setImage((image) => {
        const canvas = image === c1 ? c2 : c1;
        if (canvas) {
          renderCanvas(canvas, progress.current);
        }
        return canvas;
      });
      if (progress.current >= 1) {
        clearInterval(i);
      }
    }, 10);
    return () => window.clearInterval(i);
  }, [c1, c2]);

  return (
    <Entity
      {...props}
      billboard={{
        image,
      }}
    />
  );
};

const AnimatedCanvasPreview = () => {
  return (
    <Viewer className="viewer-container">
      <CanvasEntity
        name="test"
        description="test"
        position={Cartesian3.fromDegrees(0, 0, 0)}
      />
    </Viewer>
  );
};

export default AnimatedCanvasPreview;
