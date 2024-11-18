import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);

  return (
    <div className="main">
      <Folder explorerData={explorerData} />
    </div>
  );
}

export default App;
