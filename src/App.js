import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [mode,setMode] = useState("light")
  const [icon,setIcon] = useState("moon")
  const [progress,setProgress] = useState(0)


  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    const newIcon = icon === "moon" ? "sun" : "moon";
    setIcon(newIcon);
    setMode(newMode);
    document.body.style.backgroundColor = newMode === "dark" ? "#001121" : "#fff";
  };


    let pgsize = 10;
    let apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          
          />
          <Navbar
            mode={mode}
            toggleMode={toggleMode}
            icon={icon}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress = {setProgress} apikey = {apiKey}
                  key="general"
                  pageSize={pgsize}
                  mode={mode}
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/Business"
              element={
                <News setProgress = {setProgress} apikey = {apiKey}
                  key="business"
                  pageSize={pgsize}
                  mode={mode}
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/Entertainment"
              element={
                <News setProgress = {setProgress} apikey = {apiKey}
                  key="entertainment"
                  pageSize={pgsize}
                  mode={mode}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/Health"
              element={
                <News setProgress = {setProgress} apikey = {apiKey}
                  key="health"
                  pageSize={pgsize}
                  mode={mode}
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/Science"
              element={
                <News setProgress = {setProgress} apikey = {apiKey}
                  key="science"
                  pageSize={pgsize}
                  mode={mode}
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/Sports"
              element={
                <News setProgress = {setProgress} apikey = {apiKey}
                  key="sports"
                  pageSize={pgsize}
                  mode={mode}
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/Technology"
              element={
                <News setProgress = {setProgress} apikey = {apiKey}
                  key="technology"
                  pageSize={pgsize}
                  mode={mode}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }

export default App;