import { Route, Routes } from "react-router-dom";
import EntityPreview, { EntityGraphics } from "../pages/EntityPreview";
import Home from "../pages/Home";
import IonResourcePreview from "../pages/IonResourcePreview.jsx";
import BillboardPreview from "../pages/BillboardPreview";
import MapPinsPreview from "../pages/MapPinsPreview";
import NotFound from "../pages/NotFound";

function ResiumView() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entity" element={<EntityPreview />} />
        <Route path="/graphics" element={<EntityGraphics />} />
        <Route path="/ion" element={<IonResourcePreview />} />
        <Route path="/billboard" element={<BillboardPreview />} />
        <Route path="/mapPins" element={<MapPinsPreview />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default ResiumView;
