import styled from "styled-components";

function Heading() {
  return <AppTitle>Shopping List</AppTitle>;
}

const AppTitle = styled.h1`
  font-weight: 2.5rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  margin: auto;
`;

export default Heading;
