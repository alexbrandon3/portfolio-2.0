import "./App.css";
import React, { useState } from "react";
import TopBar from "./components/TopBar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <TopBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </>
  );
}

export default App;
