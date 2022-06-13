import styled from "styled-components";
import Heading from "./components/Heading.js";
import Searchbar from "./components/Searchbar.js";
import SearchList from "./components/SearchList.js";
import ShoppingItems from "./components/ShoppingList.js";

export default function App() {
  return (
    <AppContainer>
      <Searchbar />
      <SearchList />
      <Heading />
      <ShoppingItems />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  gap: 20px;
  max-width: 350px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5%;
  box-shadow: 5px 10px #888888;
  background-color: white;
  padding: 20px;
`;
