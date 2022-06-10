import styled from "styled-components";

function Searchbar() {
  return (
    <Form>
      <SearchTitle htmlFor="search">What do you want to buy ?</SearchTitle>
      <input id="search" type="text" name="search" />
      <SearchButton>Search</SearchButton>
    </Form>
  );
}

const SearchTitle = styled.label`
  font-weight: 1.5rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  margin: auto;
`;

const SearchButton = styled.button`
  border: none;
`;

export default Searchbar;
