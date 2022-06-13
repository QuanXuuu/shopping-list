import styled from "styled-components";
import { useEffect, useState } from "react";

function ShoppingItems() {
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
    <div>
      <ShoppingList>
        {items.map(({ _id, name }) => (
          <SingleItem key={_id}>
            <Button>{name.en}</Button>
          </SingleItem>
        ))}
      </ShoppingList>
    </div>
  );
}

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

export default ShoppingItems;
