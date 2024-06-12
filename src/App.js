import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Helmet>
          <title>Jackie Zeng</title>
        </Helmet>
        <NavBar />
        <div className="content">
          {/*
            gh-pages doesn't natively support spa, I had some issues implementing the solution found here:
            https://github.com/rafgraph/spa-github-pages and had to go with the messier workaround of using hashrouter.
          */}
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
