import { Viewer, Entity, PointGraphics, EntityDescription } from "resium";
import { Cartesian3 } from "cesium";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

function App() {
  return (
    <Viewer full>
      <Entity position={position} name="Country">
        <PointGraphics pixelSize={10} />
        <EntityDescription>
          <h1>Hello, world.</h1>
          <p>JSX is available here!</p>
        </EntityDescription>
      </Entity>
    </Viewer>
  );
}

export default App;
