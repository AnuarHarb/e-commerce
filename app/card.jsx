import React, { useState } from "react";
import { styled } from "styled-components";
import { ImHeart } from "react-icons/im";
import { ImCart } from "react-icons/im";

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 7px 15px 0px rgba(0, 0, 0, 0.45);
  padding: 8px;
  background-color: aliceblue;
  font-family: "Atkinson Hyperlegible Mono", sans-serif;
  width: 300px;

  img {
    background-color: white;
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
  }

  .subtitle {
    color: gray;
    font-weight: 100;
    margin: 8px 0;
  }

  .action {
    display: flex;
    margin-top: 24px;
    gap: 8px;
  }

  .favicon {
    padding: 4px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .favicon:hover {
    background-color: white;
    color: black;
  }

  .favicon:active {
    background-color: white;
    color: red;
    transform: translateY(1px);
  }

  .active {
    color: red;
    background-color: transparent;
  }

  button {
    width: 100%;
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
  }

  button:hover {
    background-color: black;
    color: white;
  }

  button:active {
    transform: translateY(1px);
  }
`;

export const Card = ({ title, image, price, subtitle }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [inCart, setInCart] = useState(false);

  const clickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <StyledCard>
      <img src={image}></img>
      <div>
        <header>
          <h3>{title}</h3>
          <p>${price}</p>
        </header>
        <h4 className="subtitle">{subtitle}</h4>
      </div>
      <div className="action">
        <article
          className={`favicon ${isLiked && "active"}`}
          onClick={clickHandler}
        >
          <ImHeart />
        </article>
        <button onClick={() => setInCart(!inCart)}>
          {inCart ? <ImCart /> : "Add to Cart"}
        </button>
      </div>
    </StyledCard>
  );
};
