import { Cartesian3, Color, EntityCluster } from "cesium";
import { CustomDataSource, Viewer, Entity } from "resium";

export const EntityClusterPreview = () => {
  return (
    <Viewer className="viewer-container">
      <CustomDataSource
        clustering={
          new EntityCluster({
            enabled: true,
            pixelRange: 20,
            minimumClusterSize: 3,
            clusterPoints: true,
          })
        }
      >
        {new Array(100).fill().map((_, i) => {
          return (
            <Entity
              key={i}
              position={Cartesian3.fromDegrees(
                Math.random() * 180 - 90,
                Math.random() * 360 - 180,
                100
              )}
              point={{ pixelSize: 10, color: Color.RED }}
            />
          );
        })}
      </CustomDataSource>
    </Viewer>
  );
};

export default EntityClusterPreview;
