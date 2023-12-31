import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";
import { useMemo, useState, useRef, useEffect } from "react";

const initCanvas = () => {
  const can = document.createElement("canvas");
  can.width = 100;
  can.height = 100;
  return can;
};

const renderCanvas = (can: HTMLCanvasElement, p: number) => {
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

type CanvasEntityProps = {
  name?: string;
  description?: string;
  position?: Cartesian3;
  selected?: boolean;
};

const CanvasEntity = (props: CanvasEntityProps) => {
  const c1 = useMemo<HTMLCanvasElement>(initCanvas, []);
  const c2 = useMemo<HTMLCanvasElement>(initCanvas, []);
  const [image, setImage] = useState<HTMLCanvasElement>();
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
        position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        selected
      />
    </Viewer>
  );
};

export default AnimatedCanvasPreview;
