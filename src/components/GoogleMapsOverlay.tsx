import { useEffect, useRef } from "react";
import { useCesium } from "resium";
import { createGooglePhotorealistic3DTileset, Cesium3DTileset } from "cesium";

const GoogleMapsOverlay = () => {
  const { viewer } = useCesium();

  const googleMaps3DTilesetRef = useRef<Cesium3DTileset>();

  useEffect(() => {
    const getGoogleMaps = async () => {
      try {
        const tileset = await createGooglePhotorealistic3DTileset();
        googleMaps3DTilesetRef.current = tileset;
        viewer?.scene.primitives.add(tileset);
      } catch {
        console.error("failed to load tiles");
      }
    };

    getGoogleMaps();

    // clean up
    return () => {
      viewer?.scene.primitives.remove(googleMaps3DTilesetRef.current);
    };
  }, [viewer]);

  return null;
};

export default GoogleMapsOverlay;
