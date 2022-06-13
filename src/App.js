import styled from "styled-components";
import Heading from "./components/Heading.js";
import Searchbar from "./components/Searchbar.js";
import { useEffect, useState } from "react";

//const {Searchbar}

export default function App() {
  const [items, setItems] = useState([]);
  const apiUrl = "https://fetch-me.vercel.app/api/shopping/items";
  useEffect(() => {
    function loadItems() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setItems(data.data);
        })
        .catch(onError);
    }

    loadItems();
  }, []);

  function onError(error) {
    document.body.innerHTML = `${error.message}`;
  }

  return (
    <AppContainer>
      <Searchbar />
      <Heading />
      <ShoppingList>
        {items.map(({ _id, name }) => (
          <SingleItem key={_id}>
            <Button>{name.en}</Button>
          </SingleItem>
        ))}
      </ShoppingList>
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

const ShoppingList = styled.ul`
  padding: 0;
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const SingleItem = styled.li`
  list-style: none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0099cc;
  color: white;
  border: none;
  border-radius: 5px;
`;
