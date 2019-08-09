import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { filtersSelector } from "../core/selectors/appliedFiltersSelector";

import MoviesContainer from "./MoviesContainer/MoviesContainer";
import FilterContainer from "./FilterContainer/FilterContainer";

import { Container, GlobalStyle } from "./style.js";

const isEmpty = require("lodash/isEmpty");

const App = ({ filters }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <Route exact path="/" component={FilterContainer} />
          <Route
            path="/movies"
            render={() =>
              !isEmpty(filters) ? <MoviesContainer /> : <Redirect to="/" />
            }
          />
        </Router>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  filters: filtersSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(App);
