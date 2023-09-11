import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const pageObj = {
    entity: ["/entity", "/graphics"],
    ion: ["/ion"],
    billboard: ["/billboard"],
    mapPins: ["/mapPins"],
  };
  const location = useLocation();

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
              >
                <Link to={page}>{[...page].splice(1, page.length - 1)}</Link>
              </button>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
