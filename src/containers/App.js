import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MoviesContainer from "./MoviesContainer/MoviesContainer";
import FilterContainer from "./FilterContainer/FilterContainer";

import { Container, GlobalStyle } from "./style.js";

export default function App() {
  return (
    <Container className="app">
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={FilterContainer} />
        <Route path="/movies" component={MoviesContainer} />
      </Router>
    </Container>
  );
}
