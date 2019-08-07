import React, { useState, useEffect } from "react";
import Select from "react-select";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getGenresTrigger } from "../../core/actions/getGenresAction";
import { applyFilters } from "../../core/actions/applyFiltersAction";

import { getGenresSelector } from "../../core/selectors/getGenresSelector";

import { TitleH1, TitleCard } from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import InputRangeComponent from "../../components/InputRange";

import { Container, SecondaryContainer } from "../style.js";

import { arrayYearsFilter } from "../../core/utils";

const FilterContainer = ({ applyFilters, getGenresTrigger, genres }) => {
  const [selectedOption, handleChangeGenre] = useState("");
  const [selectedOptionYear, handleChangeYear] = useState("");
  const [years] = useState(arrayYearsFilter);
  const [rangeValue, handleChangeRate] = useState([2, 8]);
  const [movieName, handleChangeMovieName] = useState("");

  useEffect(() => {
    getGenresTrigger();
  }, []);

  const selectGenre = selectedOption => {
    handleChangeGenre(selectedOption);
  };

  const selectRate = selectedOption => {
    handleChangeRate(selectedOption);
  };

  const selectYear = selectedOption => {
    handleChangeYear(selectedOption);
  };

  const changeMovieName = e => {
    handleChangeMovieName(e.target.value);
  };

  const onClick = () => {
    if (!movieName) {
      return toast.error("Введите название фильма", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }

    const filters = {
      selectedOption,
      rangeValue,
      selectedOptionYear,
      movieName
    };

    applyFilters(filters);

    console.log(selectedOption, rangeValue, selectedOptionYear, movieName);
  };

  return (
    <Container isFilter>
      <TitleH1 title="Фильтры" />
      <SecondaryContainer>
        <TextInput
          placeholder="Введите название фильма"
          onChange={changeMovieName}
          value={movieName}
        />
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
          <InputRangeComponent values={rangeValue} selectRate={selectRate} />
        </Card>
        <Card>
          <TitleCard title="Фильтр по году" />
          <Select
            value={selectedOptionYear}
            onChange={selectYear}
            options={years}
            placeholder="Выберите год"
            isMulti={true}
          />
        </Card>
      </SecondaryContainer>
      <SecondaryContainer>
        <Button primary value="Применить фильтры" onClick={onClick} />
      </SecondaryContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </Container>
  );
};

const mapStateToProps = state => ({
  genres: getGenresSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getGenresTrigger, applyFilters }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer);
