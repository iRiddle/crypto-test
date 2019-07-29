import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getGenresTrigger } from "../../core/actions/getGenresAction";

import { getGenresSelector } from "../../core/selectors/getGenresSelector";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { TitleH1, TitleH2, TitleCard } from "../../components/Title/Title";

import { Container, SecondaryContainer } from "../style.js";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class FilterContainer extends React.Component {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getGenresAction();
  //   // fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=5fcdb863130c33d2cb8f1612b76cbd30&language=en-US')
  // });
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  componentDidMount() {
    this.props.getGenresTrigger();
  }
  render() {
    const { selectedOption } = this.state;

    console.log(this.props.genres);
    return (
      <Container>
        <TitleH1 title="Фильтры" />
        <SecondaryContainer>
          <TextInput placeholder="Введите название фильма" />
        </SecondaryContainer>
        <SecondaryContainer filters>
          <Card>
            <TitleCard title="Фильтр по жанру" />
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              isMulti={true}
            />
          </Card>
          <Card>
            <TitleCard title="Фильтр по рейтингу" />
          </Card>
          <Card>
            <TitleCard title="Фильтр по году" />
          </Card>
        </SecondaryContainer>
        <SecondaryContainer>
          <Button primary value="Применить фильтры" placeholder="lala" />
        </SecondaryContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.genres
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getGenresTrigger }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer);
