import { Route, Routes } from "react-router-dom";
import EntityPreview from "../pages/EntityPreview";
import Home from "../pages/Home";
import IonResourcePreview from "../pages/IonResourcePreview.jsx";
import BillboardPreview from "../pages/BillboardPreview";
import MapPinsPreview from "../pages/MapPinsPreview";
import EntityGraphics from "../pages/EntityGraphics";
import NotFound from "../pages/NotFound";

function ResiumView() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entity" element={<EntityPreview />} />
        <Route path="/ion" element={<IonResourcePreview />} />
        <Route path="/billboard" element={<BillboardPreview />} />
        <Route path="/mapPins" element={<MapPinsPreview />} />
        <Route path="/graphics" element={<EntityGraphics />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default ResiumView;
