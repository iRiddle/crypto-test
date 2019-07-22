import React, { useState, useEffect } from "react";

import { TextInput } from "../../components/TextInput/TextInput";
import ButtonStyled from "../../components/Button/Button";
import FilterCard from "../../components/FilterCard/FilterCard";

import { Container } from "../style.js";

const FilterContainer = () => {
  return (
    <Container>
      <FilterCard>
        <TextInput placeholder="Введите наименование фильма" />
      </FilterCard>
      <FilterCard>dasdas</FilterCard>
      <FilterCard>
        <ButtonStyled primary />
      </FilterCard>
    </Container>
  );
};

export default FilterContainer;
