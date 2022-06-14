import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: block;
  height: 120px;
`;

const Container = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 100px;
  width: 90vw;
  /* border: 1px solid black; */
  border-radius: 20px;
  background-color: #000;
  transition: 1s;
  &:hover {
    background-color: #fff;
  }
`;

function Header() {
  return (
    <Box>
      <Container>1111</Container>
    </Box>
  );
}

export default Header;
