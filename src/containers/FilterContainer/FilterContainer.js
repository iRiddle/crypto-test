import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { TitleH1, TitleH2, TitleCard } from "../../components/Title/Title";

import { Container, SecondaryContainer } from "../style.js";

const FilterContainer = () => {
  useEffect(() => {
    // fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=5fcdb863130c33d2cb8f1612b76cbd30&language=en-US')
  });

  return (
    <Container>
      <TitleH1 title="Фильтры" />
      <SecondaryContainer>
        <TextInput placeholder="Введите название фильма" />
      </SecondaryContainer>
      <SecondaryContainer filters>
        <Card>
          <TitleCard title="Фильтр по жанру" />
        </Card>
        <Card>
          <TitleCard title="Фильтр по рейтингу" />
        </Card>
        <Card>
          <TitleCard title="Фильтр по году" />
        </Card>
      </SecondaryContainer>
      <SecondaryContainer>
        <Button
          primary
          value="Применить фильтры"
          placeholder="lala"
          // onClick={this.applyFilters}
        />
      </SecondaryContainer>
    </Container>
  );
};

export default FilterContainer;
