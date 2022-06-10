import styled from "styled-components";
import Header from "./components/Header.js";
import Searchbar from "./components/Searchbar.js";
import { useEffect, useState } from "react";

const initialItems = [
  {
    _id: "c2hvcHBpbmcuaXRlbTox",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Pineapple", de: "Ananas" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbToy",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Apples", de: "Äpfel" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbToz",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Apricots", de: "Aprikosen" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo0",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Artichokes", de: "Artischocken" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo1",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Aubergine", de: "Aubergine" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo2",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Oyster mushrooms", de: "Austernpilze" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo3",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Avocado", de: "Avocado" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo4",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Baby spinach", de: "Babyspinat" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo5",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Bananas", de: "Bananen" },
  },
];

//const {Searchbar}

export default function App() {
  const [items, setItems] = useState(initialItems);
  const apiUrl = "https://fetch-me.vercel.app/api/shopping/items";
  useEffect(() => {
    function loadItems() {
      console.log("load");
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setItems(data.data);
        })
        .catch(onError);
    }

    loadItems();
  }, []);

  function onError(error) {
    document.body.innerHTML = `<span className="error"> "We could not find what 
    you were looking for. For that we are truly sorry." ${error.message}</span>`;
  }

  return (
    <AppContainer className="App">
      <Searchbar />
      <Header />
      <AppItems>
        {items.map(({ _id, name }) => (
          <SingleItem key={_id}>
            <Button>{name.en}</Button>
          </SingleItem>
        ))}
      </AppItems>
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

const AppItems = styled.ul`
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
