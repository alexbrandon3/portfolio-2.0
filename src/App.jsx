import "./App.css";
import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import WIP from "./components/WIP";
import Completed from "./components/Completed";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const renderChosenTab = () => {
    switch (selectedTab) {
      case "Work":
        return <Home />;
      case "About Me":
        return <About />;
      case "Works in Progress":
        return <WIP />;
      case "Completed Projects":
        return <Completed />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      <TopBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {renderChosenTab()}
      <Footer />
    </>
  );
}

export default App;
