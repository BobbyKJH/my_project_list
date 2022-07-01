import styled, { keyframes } from "styled-components";

const Opacity = keyframes`
  0%{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const HeaderStyle = styled.div`
  display: block;
  width: 100%;
  border: 1px solid black;
  background: #fff;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    h1 {
      width: 40%;
    }
    h2 {
      width: 15%;
      color: #000;
      max-height: 48px;

      span {
        display: block;
        padding: 15px 0;
        &:hover {
          color: #0080c6;
        }
      }
      nav {
        display: none;
        padding: 10px 0;
        border-right: 4px solid #0080c6;
        border-left: 4px solid #0080c6;
        animation: ${Opacity} 1s;
        transition: 0.5s;
        &:hover {
          background: #0080c6;
          color: #fff;
        }
        &:last-child {
          border-bottom: 4px solid #0080c6;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
      &:hover {
        border-bottom: 4px solid #0080c6;
        nav {
          display: block;
        }
      }
    }
  }
`;
