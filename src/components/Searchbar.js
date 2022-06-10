import styled from "styled-components";

function Searchbar() {
  return (
    <SearchForm>
      <SearchTitle htmlFor="search">What do you want to buy ?</SearchTitle>
      <SearchInput id="search" type="text" name="search" />
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
  width: 100%;
`;

export default Searchbar;
