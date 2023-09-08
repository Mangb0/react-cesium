import { Route, Routes, Link, useLocation } from "react-router-dom";
import EntityPreview from "./pages/EntityPreview";
import Home from "./pages/Home";
import IonResourcePreview from "./pages/IonResourcePreview.jsx";
import BillboardPreview from "./pages/BillboardPreview";

function App() {
  const pageArray = ["/entity", "/ion", "/billboard"];
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entity" element={<EntityPreview />} />
        <Route path="/ion" element={<IonResourcePreview />} />
        <Route path="/billboard" element={<BillboardPreview />} />
      </Routes>
      <ul>
        {pageArray.map((item, index) => {
          return (
            <li
              key={index}
              className={location.pathname === item ? "active" : ""}
            >
              <Link to={item}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
