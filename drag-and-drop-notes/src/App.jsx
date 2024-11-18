import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "I am Biduru Chandan Tejaswi trying to get a job",
    },
    {
      id: 2,
      text: "I am Surekha and I am a goddess.",
    },
  ]);
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes}></Notes>
    </div>
  );
}

export default App;
