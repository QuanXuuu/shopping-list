import styled from "styled-components";
import Header from "./components/Header.js";
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

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [apiUrl, setApiUrl] = useState(
    "https://fetch-me.vercel.app/api/shopping/items"
  );

  function loadItems() {
    console.log("load");
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.results);
      });
  }

  return (
    <AppContainer className="App">
      <Header />
      <AppItems>
        {items.map(({ _id, name }) => (
          <AppItem key={_id}>
            <Button>{name.en}</Button>
          </AppItem>
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

const AppItem = styled.li`
  list-style: none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0099cc;
  color: white;
  border: none;
  border-radius: 5px;
`;
