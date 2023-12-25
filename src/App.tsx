import ResiumView from "./components/ResiumView";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Ion } from "cesium";

Ion.defaultAccessToken = import.meta.env.VITE_TEST_DATA;

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <ResiumView />
    </div>
  );
};

export default App;
