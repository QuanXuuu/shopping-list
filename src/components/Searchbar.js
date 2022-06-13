import styled from "styled-components";
import { useState } from "react";

export default function Searchbar(items) {
  // const [search, setSearch] = useState("");
  //const {search} = window.location;
  //const query

  return (
    <SearchForm action="/" method="get" role="search">
      <SearchLabel htmlFor="myInput">What do you want to buy ?</SearchLabel>
      <SearchInput
        id="myInput"
        type="text"
        name="search"
        placeholder="search.."
        //onChange={(event = setSearch(event.target.value))}
      />
    </SearchForm>
  );
}

const SearchForm = styled.form``;

const SearchLabel = styled.label`
  font-weight: 1.5rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  margin: auto;
`;

const SearchInput = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  padding: 6px;
  border: 1px solid #585858;
`;
