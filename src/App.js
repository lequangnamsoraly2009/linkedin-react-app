import { connect } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./features/HomePage/index";
import React, { Suspense, useEffect } from "react";
import { getUserAuth } from "./actions";
import NotFound from "./components/NotFoundPage";

const Header = React.lazy(() => import("./components/Header"));

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/home">
              <Header />
              <Home />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
