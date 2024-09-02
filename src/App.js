import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css"; // Assuming global styles or additional styles for App
import Content from "./Components/Content";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        {/* Main content of the app goes here */}
        <Content />
      </div>
    </div>
  );
};

export default App;
