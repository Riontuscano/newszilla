import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
      icon: "moon",
      progress:0,
    };
  }

  toggleMode = () => {
    const newMode = this.state.mode === "light" ? "dark" : "light";
    const newIcon = this.state.icon === "moon" ? "sun" : "moon";
    this.setState({ mode: newMode, icon: newIcon });
    document.body.style.backgroundColor =
      newMode === "dark" ? "#001121" : "#fff";
  };

  render() {
    let pgsize = 10;
    let apiKey = proc
    this.setProgress = (progress) => {
      this.setState({progress:progress})
    }
  
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          
          />
          <Navbar
            mode={this.state.mode}
            toggleMode={this.toggleMode}
            icon={this.state.icon}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress = {this.setProgress} apikey = {this.apikey}
                  key="general"
                  pageSize={pgsize}
                  mode={this.state.mode}
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/Business"
              element={
                <News setProgress = {this.setProgress} apikey = {this.apikey}
                  key="business"
                  pageSize={pgsize}
                  mode={this.state.mode}
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/Entertainment"
              element={
                <News setProgress = {this.setProgress} apikey = {this.apikey}
                  key="entertainment"
                  pageSize={pgsize}
                  mode={this.state.mode}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/Health"
              element={
                <News setProgress = {this.setProgress} apikey = {this.apikey}
                  key="health"
                  pageSize={pgsize}
                  mode={this.state.mode}
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/Science"
              element={
                <News setProgress = {this.setProgress} apikey = {this.apikey}
                  key="science"
                  pageSize={pgsize}
                  mode={this.state.mode}
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/Sports"
              element={
                <News setProgress = {this.setProgress} apikey = {this.apikey}
                  key="sports"
                  pageSize={pgsize}
                  mode={this.state.mode}
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/Technology"
              element={
                <News setProgress = {this.setProgress} apikey = {this.apikey}
                  key="technology"
                  pageSize={pgsize}
                  mode={this.state.mode}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
