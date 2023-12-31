import { Route, Routes } from "react-router-dom";
import EntityPreview, { EntityGraphics } from "../pages/EntityPreview";
import Home from "../pages/Home";
import IonResourcePreview from "../pages/IonResourcePreview";
import BillboardPreview from "../pages/BillboardPreview";
import MapPinsPreview from "../pages/MapPinsPreview";
import NotFound from "../pages/NotFound";
import ClockPreview from "../pages/ClockPreview";
import GooglePhotorealistic3DTiles from "../pages/GooglePhotorealistic3DTilesPreview";
import CameraPreview from "../pages/CameraPreview";
import IonPointCloudPreview from "../pages/IonPointCloudPreview";
import SnowPreview from "../pages/SnowPreview";
import Cesium3DTilesetPreview from "../pages/Cesium3DTilesetPreview";
import CallbackPropertyPreview from "../pages/CallbackPropertyPreview";
import AnimatedCanvasPreview from "../pages/AnimatedCanvasPreview";
import FileUpload from "../pages/FileUpload";
import BillboardPreviewCesium from "../pages/cesium/BillboardPreviewCesium";
import Cesium3DTilesetPreviewCesium from "../pages/cesium/Cesium3DTilesetPreviewCesium";
import CesiumCameraPreview from "../pages/cesium/CesiumCameraPreview";
import IonPointCloudPreviewCesium from "../pages/cesium/IonPointCloudPreviewCesium";
import IonResourcePreviewCesium from "../pages/cesium/IonResourcePreviewCesium";
import MapPinsPreviewCesium from "../pages/cesium/MapPinsPreviewCesium";

const ResiumView = () => {
  return (
    <>
      <Routes>
        <Route path="/fileUpload" element={<FileUpload />} />
        <Route path="/cesiumCamera" element={<CesiumCameraPreview />} />
        <Route path="/" element={<Home />} />
        <Route path="/entity" element={<EntityPreview />} />
        <Route path="/graphics" element={<EntityGraphics />} />
        <Route path="/ion" element={<IonResourcePreview />} />
        <Route path="/ionCesium" element={<IonResourcePreviewCesium />} />"
        <Route path="/billboard" element={<BillboardPreview />} />
        <Route path="/billboardCesium" element={<BillboardPreviewCesium />} />
        <Route path="/mapPins" element={<MapPinsPreview />} />
        <Route path="/mapPinsCesium" element={<MapPinsPreviewCesium />} />
        <Route path="/clock" element={<ClockPreview />} />
        <Route
          path="/GooglePhotorealistic3DTiles"
          element={<GooglePhotorealistic3DTiles />}
        />
        <Route path="/camera" element={<CameraPreview />} />
        <Route path="/IonPointCloud" element={<IonPointCloudPreview />} />
        <Route
          path="/IonPointCloudCesium"
          element={<IonPointCloudPreviewCesium />}
        />
        <Route path="/snow" element={<SnowPreview />} />
        <Route path="/Cesium3DTileset" element={<Cesium3DTilesetPreview />} />
        <Route
          path="/Cesium3DTilesetPreviewCesium"
          element={<Cesium3DTilesetPreviewCesium />}
        />
        <Route path="/CallbackProperty" element={<CallbackPropertyPreview />} />
        <Route path="/AnimatedCanvas" element={<AnimatedCanvasPreview />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default ResiumView;
