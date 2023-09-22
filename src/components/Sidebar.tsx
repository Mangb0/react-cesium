import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const pageObj: Record<string, string[]> = {
    entity: ["/entity", "/graphics", "/AnimatedCanvas", "/CallbackProperty"],
    ion: ["/ion", "/IonPointCloud"],
    billboard: ["/billboard"],
    mapPins: ["/mapPins"],
    Clock: ["/clock"],
    tiles: ["/GooglePhotorealistic3DTiles", "/Cesium3DTileset"],
    camera: ["/camera"],
    particle: ["/snow"],
  };
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      {Object.keys(pageObj).map((key) => (
        <div key={key}>
          <h3>{key}</h3>
          <ul>
            {pageObj[key].map((page, index) => (
              <button
                key={index}
                className={[
                  "btn",
                  location.pathname === page ? "active" : "",
                ].join(" ")}
                onClick={() => navigate(page)}
              >
                {/* <Link to={page}>{[...page].splice(1, page.length - 1)}</Link> */}
                {[...page].splice(1, page.length - 1)}
              </button>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
