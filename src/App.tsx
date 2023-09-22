import ResiumView from "./components/ResiumView";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <ResiumView />
    </div>
  );
};

export default App;
