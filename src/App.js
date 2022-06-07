import "./App.css";
import Feed from "./Feed";
import Post from "./Post";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
