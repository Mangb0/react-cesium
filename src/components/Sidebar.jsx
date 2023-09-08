import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const pages = ["/", "/entity", "/ion", "/billboard"];
  const location = useLocation();

  return (
    <div className="sidebar">
      <h3>Sidebar</h3>
      <ul>
        {pages.map((item, index) => {
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
    </div>
  );
};

export default Sidebar;
