import React from "react";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  background-color: darkorange;
  padding: 10px 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h2>Super E-comm</h2>
      <ul>
        <li>Productos</li>
        <li>Carrito</li>
      </ul>
    </StyledHeader>
  );
};
