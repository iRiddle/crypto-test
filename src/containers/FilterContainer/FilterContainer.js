import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Select from "react-select";

import { getGenresTrigger } from "../../core/actions/getGenresAction";

import { getGenresSelector } from "../../core/selectors/getGenresSelector";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { TitleH1, TitleCard } from "../../components/Title/Title";
import InputRangeComponent from "../../components/InputRange";

import { Container, SecondaryContainer } from "../style.js";

const FilterContainer = ({ getGenresTrigger, genres }) => {
  const [selectedOption, handleChangeGenre] = useState("");
  const [rangeValue, handleChangeRate] = useState({ min: 2, max: 8 });

  useEffect(() => {
    getGenresTrigger();
  }, []);

  const selectGenre = selectedOption => {
    handleChangeGenre(selectedOption);
  };

  const selectRate = selectedOption => {
    handleChangeRate(selectedOption);
  };

  return (
    <Container isFilter>
      <TitleH1 title="Фильтры" />
      <SecondaryContainer>
        <TextInput placeholder="Введите название фильма" />
      </SecondaryContainer>
      <SecondaryContainer filters>
        <Card>
          <TitleCard title="Фильтр по жанру" />
          <Select
            value={selectedOption}
            onChange={selectGenre}
            options={genres.map(item => {
              return { id: item.id, value: item.name, label: item.name };
            })}
            placeholder="Выберите жанр"
            isMulti={true}
          />
        </Card>
        <Card>
          <TitleCard title="Фильтр по рейтингу" />
          <InputRangeComponent value={rangeValue} selectRate={selectRate} />
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
};

const mapStateToProps = state => ({
  genres: getGenresSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getGenresTrigger }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer);
