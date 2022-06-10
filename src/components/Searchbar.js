import styled from "styled-components";
import { useState } from "react";

export default function Searchbar(items) {
  //const [search, setSearch] = useState("");

  //const {search} = window.location;
  //const query
  return (
    <SearchForm action="/" method="get" role="search">
      <SearchTitle htmlFor="myInput">What do you want to buy ?</SearchTitle>
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

const SearchTitle = styled.label`
  font-weight: 1.5rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  margin: auto;
`;

const SearchInput = styled.input`
  margin-top: 10px;
  margin-bottom: 40px;
  width: 100%;
  padding: 6px;
  border: 1px solid #585858;
  //background-image: url("http://www.w3.org/2000/svg");
`;
