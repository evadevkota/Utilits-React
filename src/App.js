import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alerts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // Function to display temporary alerts
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // Functions to change the color theme and display corresponding alerts
  const changegreen = () => {
    // Change color green and display a success alert

    document.body.style.backgroundColor = "#3A4D39";
    document.body.style.color = "#ECE3CE";
    document.body.style.fontFamily = "Times";

    showAlert("Green Mode has been enabled", "success");
  };

  const changeyellow = () => {
    // Change color yellow and display a success alert
    setMode("yellow");
    document.body.style.backgroundColor = "#F4C430";
    document.body.style.color = "black";
    document.body.style.fontFamily = "Times";
    showAlert("Yellow Mode has been enabled", "success");
  };
  const changered = () => {
    // Change color red and display a success alert
    setMode("red");
    document.body.style.backgroundColor = "#3D0C11";
    document.body.style.color = "#F9DEC9";
    document.body.style.fontFamily = "Times";
    showAlert("Red Mode has been enabled", "success");
  };
  const changeBlue = () => {
    // Change color blue and display a success alert
    setMode("blue");
    document.body.style.backgroundColor = "#264d73";
    document.body.style.color = "#F9DEC9";
    document.body.style.fontFamily = "Times";
    showAlert("Blue Mode has been enabled", "success");
  };

  return (
    <>
      <Router>
        {/* Navbar component with navigation and theme change options */}
        <Navbar
          title="Text Utils"
          about="About Utils"
          mode={mode}
          changeBlue={changeBlue}
          changegreen={changegreen}
          changered={changered}
          changeyellow={changeyellow}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/about"
            element={
              <div style={containerStyle}>
                <About mode={mode} />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div style={containerStyle}>
                <TextForm
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
// CSS styling for container elements
const containerStyle = {
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  minHeight: "20vh", // Ensure it takes up the full viewport height
};

export default App;
