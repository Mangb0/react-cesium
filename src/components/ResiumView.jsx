import { Route, Routes } from "react-router-dom";
import EntityPreview, { EntityGraphics } from "../pages/EntityPreview";
import Home from "../pages/Home";
import IonResourcePreview from "../pages/IonResourcePreview.jsx";
import BillboardPreview from "../pages/BillboardPreview";
import MapPinsPreview from "../pages/MapPinsPreview";
import NotFound from "../pages/NotFound";
import ClockPreview from "../pages/ClockPreview";
import GooglePhotorealistic3DTiles from "../pages/GooglePhotorealistic3DTilesPreview";
import Cesium3DTilesetPreview from "../pages/Cesium3DTilesetPreview";
import SnowPreview from "../pages/SnowPreview";
import EntityClusterPreview from "../pages/EntityClusterPreview";
import MoonPreview from "../pages/MoonPreview";

const ResiumView = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entity" element={<EntityPreview />} />
        <Route path="/graphics" element={<EntityGraphics />} />
        <Route path="/ion" element={<IonResourcePreview />} />
        <Route path="/billboard" element={<BillboardPreview />} />
        <Route path="/mapPins" element={<MapPinsPreview />} />
        <Route path="/clock" element={<ClockPreview />} />
        <Route path="/Cesium3DTileset" element={<Cesium3DTilesetPreview />} />
        <Route
          path="/GooglePhotorealistic3DTiles"
          element={<GooglePhotorealistic3DTiles />}
        />
        <Route path="/snow" element={<SnowPreview />} />
        <Route path="/CustomDataSource" element={<EntityClusterPreview />} />
        <Route path="/moon" element={<MoonPreview />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default ResiumView;
