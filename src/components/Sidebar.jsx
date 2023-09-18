import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const pageObj = {
    entity: ["/entity", "/graphics", "/CallbackProperty"],
    ion: ["/ion"],
    billboard: ["/billboard"],
    mapPins: ["/mapPins"],
    Clock: ["/clock"],
    tiles: ["/GooglePhotorealistic3DTiles", "/Cesium3DTileset"],
    particle: ["/snow"],
    CustomDataSource: ["/CustomDataSource"],
    etc: ["/moon"],
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
