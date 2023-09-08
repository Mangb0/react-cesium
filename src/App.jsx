import { Link, useLocation } from "react-router-dom";
import ResiumView from "./pages/ResiumView";
import "./App.css";

function App() {
  const pageArray = ["/entity", "/ion", "/billboard", "/mapPins"];
  const location = useLocation();
  return (
    <div className="app-container">
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
      <ResiumView />
    </div>
  );
}

export default App;
