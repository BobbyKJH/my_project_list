import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 100vw;
  height: 300px;
  border: 1px solid black;
`;

function Header() {
  return <Container>Header</Container>;
}

export default Header;
