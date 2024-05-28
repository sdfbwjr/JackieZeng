import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import HomePage from "./pages/HomePage";
import OAAPage from "./pages/OAAPage";
import NavBar from "./components/NavBar";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";
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
            <Route path="/Projects" component={ProjectListPage} exact />
            <Route path="/Projects/:name" component={ProjectPage} exact />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
